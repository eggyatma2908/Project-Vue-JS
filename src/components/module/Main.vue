<template>
<div class="col-lg-9">
    <div class="box d-flex justify-content-between">
        <div class="box1 mt-2 ml-3">
            <div class="balance"><p>Balance</p></div>
            <div class="saldo"><p>Rp{{balance(this.getDataUserById[0].balance)}}</p></div>
            <div class="phone1"><p>{{getDataUserById[0].phoneNumber ? '+62' + getDataUserById[0].phoneNumber : '+62'}}</p></div>
        </div>
        <div class="box2 p-3">
            <router-link :to="{path: '/main/transfer'}" class="router">
            <div class="transfer">
                <div class="transfer1">
                    <img src="../../assets/arrow-up1.png" alt="image3">
                    <p>Transfer</p>
                </div>
            </div>
            </router-link>
            <router-link :to="{path: '/main/topup'}" class="router">
            <div class="topup">
                <div class="topup1">
                    <img src="../../assets/plus1.png" alt="image4">
                    <p>Top Up</p>
                </div>
            </div>
            </router-link>
        </div>
    </div>
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-7 mb-3">
                <div class="box-graph">
                    <div class="income-expense d-flex justify-content-between">
                        <div class="income mt-3">
                            <img src="../../assets/arrow-down.png" alt="image5">
                            <p class="income-text mt-3">Income {{income()}}</p>
                            <p class="income-money">Rp.{{balance(totalIncome())}}</p>
                        </div>
                        <div class="expense mt-3">
                            <img src="../../assets/arrow-up red.png" alt="image6">
                            <p class="expense-text mt-3">Expense {{expense()}}</p>
                            <p class="expense-money">Rp.{{balance(totalExpense())}}</p>
                        </div>
                    </div>

                    <div class="box-in-graph">
                        <div id="chart">
                            <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="encapsule">
                    <div class="d-flex justify-content-between ml-3 mr-3">
                        <p class="history">Transaction History</p>
                        <router-link :to="{path: '/main/history'}">See all</router-link>
                    </div>

                    <div class="box3 pl-2 pr-2">
                        <div v-for="transaction in getTransactions" :key="transaction.id">
                            <div class="d-flex justify-content-between flex-box1" v-if="getDataUserById[0].username === transaction.receiverName">
                            <div class="boxphoto">
                                <img class="user1" :src="transaction.photoProfile" alt="image3" v-if="transaction.photoProfile">
                                <img class="user1" src="../../assets/emptyprofile.jpg" alt="image4" v-else>
                            </div>
                            <div class="box-profile1">
                                <p class="name1">{{firstName(transaction.senderName)}}</p>
                                <p class="status">Transfer</p>
                            </div>
                                <p class="income1" id="income">+Rp{{balance(transaction.amount)}}</p>
                            </div>

                            <div class="d-flex justify-content-between flex-box1" v-if="getDataUserById[0].username === transaction.senderName">
                            <div class="boxphoto">
                                <img class="user1" :src="userProfile" alt="image3" v-if="userProfile">
                                <img class="user1" :src="getDataUserById[0].photoProfile" alt="image3" v-else-if="getDataUserById[0].photoProfile">
                                <img class="profile" src="../../assets/emptyprofile.jpg" alt="image1" v-else>
                            </div>
                            <div class="box-profile1">
                                <p class="name1">{{firstName(transaction.senderName)}}</p>
                                <p class="status">Expense</p>
                            </div>
                                <p class="expense1">-Rp{{balance(transaction.amount)}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VueApexCharts from 'vue-apexcharts'
import moment from 'moment'

export default {
  name: 'Home',
  components: {
    apexchart: VueApexCharts
  },
  data: function () {
    return {
      moment: moment,
      series: [{
        name: 'Income',
        data: [],
        colors: '#6379F4'
      }, {
        name: 'Expense',
        data: []
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: []
        },
        fill: {
          opacity: 1,
          colors: ['#6379F4', '#9DA6B5']
        },
        legend: {
          markers: {
            fillColors: ['#6379F4', '#9DA6B5']
          }
        }
      }
    }
  },
  created () {
    this.dateTime()
    this.income()
    this.expense()
  },
  methods: {
    ...mapActions(['getAllTransaction']),
    firstName (param) {
      const first = param.split(' ')[0].toLowerCase()
      this.capitalize = first.charAt(0).toUpperCase() + first.slice(1)
      return this.capitalize
    },
    balance (param) {
      const numberString = param.toString()
      const leftover = numberString.length % 3
      this.rupiah = numberString.substr(0, leftover)
      const thousands = numberString.substr(leftover).match(/\d{3}/g)

      if (thousands) {
        const separator = leftover ? '.' : ''
        this.rupiah += separator + thousands.join('.')
      }
      return this.rupiah
    },
    transactionsIncome () {
      return this.getTransactions.filter(item => item.receiverName === this.getDataUserById[0].username)
    },
    transactionsExpense () {
      return this.getTransactions.filter(item => item.senderName === this.getDataUserById[0].username)
    },
    income () {
      this.series[0].data = this.transactionsIncome().map(item => item.amount)
    },
    totalIncome () {
      this.total = 0
      for (let i = 0; i < this.transactionsIncome().map(item => item.amount).length; i++) {
        this.total += this.transactionsIncome().map(item => item.amount)[i]
      }
      return this.total
    },
    expense () {
      this.series[1].data = this.transactionsExpense().map(item => item.amount)
    },
    totalExpense () {
      this.total = 0
      for (let i = 0; i < this.transactionsExpense().map(item => item.amount).length; i++) {
        this.total += this.transactionsExpense().map(item => item.amount)[i]
      }
      return this.total
    },
    dateTime () {
      this.chartOptions.xaxis.categories = this.getTransactions.map(item => moment(item.dateTime).format('dddd, D MMM YYYY'))
    }
  },
  computed: {
    ...mapGetters(['getDataUserById', 'getTransactions', 'userProfile'])
  },
  mounted () {
    this.getAllTransaction()
    this.income()
    this.expense()
    this.dateTime()
  }
}
</script>

<style scoped>
.box {
    background: #6379F4;
    border-radius: 20px;

    height: max-content;
}

.balance {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;

    color: #E0E0E0;
}

.saldo {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;

    color: #FFFFFF;
}

.phone1 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    color: #DFDCDC;
}

.box2 {
    height: max-content;
}

.router {
    text-decoration: none;
}

.transfer {
    margin-bottom: 10px;

    background: rgba(255, 255, 255, 0.2);

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
}

.transfer1 {
    display: flex;
    flex-direction: row;

    margin: 15px 30px 0px 30px;
}

.transfer img {
    width: 28px;
    height: 28px;

    margin-right: 15px;
}

.transfer p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #FFFFFF;
}

.topup {
    background: rgba(255, 255, 255, 0.2);

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
}

.topup1 {
    display: flex;
    flex-direction: row;

    margin: 15px 30px 0px 30px;
}

.topup img {
    width: 28px;
    height: 28px;

    margin-right: 15px;
}

.topup p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #FFFFFF;
}

.col-md-7 {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
}

.income-text {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #6A6A6A;
}

.income-money {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.expense-text {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #6A6A6A;
}

.expense-money {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.chart {
    display: flex;
    flex-direction: row-reverse;

    transform: rotate(180deg);
}

.chart p {
    transform: rotate(180deg);
}

.chart1 {
    display: flex;
    flex-direction: column;

    width: 14px;
    height: 223px;

    background: #6379F4;
    border-radius: 15px;
}

.chart2 {
    width: 14px;
    height: 97px;

    background: #6379F4;
    border-radius: 15px;
}

.chart3 {
    width: 14px;
    height: 149px;

    background: #9DA6B5;
    border-radius: 15px;
}

.relative {
    position: relative;
}

.relative p {
    position: absolute;
    top: 220px;
    right: -30px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;

    text-align: right;

    color: #1EC15F;
}

.chart4 {
    width: 14px;
    height: 183px;

    background: #9DA6B5;
    border-radius: 15px;
}

.chart4 img {
    position: absolute;
    top: 160px;
    right: -23px;

    width: 60px;
    height: 60px;
}

.chart5 {
    width: 14px;
    height: 138px;

    background: #9DA6B5;
    border-radius: 15px;
}

.chart6 {
    width: 14px;
    height: 197px;

    background: #6379F4;
    border-radius: 15px;
}

.chart7 {
    width: 14px;
    height: 155px;

    background: #9DA6B5;
    border-radius: 15px;
}

.col-md-5 {
    padding-right: 0px
}

.encapsule {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    padding: 30px 10px;
}

.history {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin: 0;

    color: #3A3D42;
}

.box3{
    width: 100%;
    height: 375px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow-y: scroll;
    background: #FAFAFA;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

.flex-box1 {
    padding: 10px 0;
}

.boxphoto {
    width: 56px;
    background-position: 100px;
}

.boxphoto img {
    width: 100%;
    height: 56px;
    border-radius: 12px;
}

.name1 {
    margin: 10px 0px 0px 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.status {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.income1 {
    width: max-content;
    height: max-content;

    margin-top: 1rem;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #1EC15F;
}

.expense1 {
    width: max-content;
    height: max-content;

    margin-top: 1rem;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #FF5B37;
}

.flex-box2 {
    margin: 40px 20px 0px 20px;
}

.profile2 {
    width: 56px;
    height: 56px;
}

.name2 {
    margin: 10px 0px 0px 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.status1 {
    margin: 0;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.flex-box3 {
    margin: 40px 20px 0px 20px;
}

.profile3 {
    width: 56px;
    height: 56px;
}

.name3 {
    margin: 10px 0px 0px 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.status2 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.transfer3 {
    width: max-content;
    height: max-content;

    margin-top: 1rem;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #1EC15F;
}

.flex-box4 {
    margin: 40px 20px 0px 20px;
    padding-bottom: 30px;
}

.profile4 {
    width: 56px;
    height: 56px;
}

.name4 {
    margin: 10px 0px 0px 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.status3 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

/* Mobile L */
@media (max-width: 425px) {
.balance {
        font-size: 15px;
    }
    .saldo {
        font-size: 30px;
    }
    .phone1 {
        font-size: 11px;
    }
}

/* Mobile M */
@media (max-width: 375px) {
    .transfer1 {
        margin: 15px 10px 0px 10px;
    }
    .topup1 {
        margin: 15px 10px 0px 10px;
    }
}

/* Mobile S */
@media (max-width: 320px) {
    .saldo {
        font-size: 20px;
    }
    .transfer1 {
        margin: 15px 5px 0px 5px;
    }
    .topup1 {
        margin: 15px 5px 0px 5px;
    }
}
</style>
