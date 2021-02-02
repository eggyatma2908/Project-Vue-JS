<template>
    <div class="col-lg-9" id="transfer">
        <div class="encapsule">
            <div class="box pt-3 ml-4 mr-4">
                <div class="d-flex justify-content-center">
                    <img style="width: 65px;" src="../../assets/success.png" alt="image9">
                </div>
                <div class="d-flex justify-content-center mt-3">
                    <p class="success">Transfer Success</p>
                </div>
                <div class="box-detail">
                    <div class="box-amount">
                        <div class="flex-box2 ml-3">
                            <div class="box-profile2 mt-2 mb-2">
                                <p class="amount">Amount</p>
                                <p class="money">Rp{{this.balances(this.$route.query.amount)}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-balance mt-2">
                        <div class="flex-box3 ml-3">
                            <div class="box-profile3 mt-2 mb-2">
                                <p class="balance">Balance Left</p>
                                <p class="money1">Rp{{this.balances(this.$route.query.balanceLeft)}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-date mt-2">
                        <div class="flex-box4 ml-3">
                            <div class="box-profile4 mt-2 mb-2">
                                <p class="date">Date & Time</p>
                                <p class="date1">{{moment(new Date()).format('MMM DD, YYYY-hh.mm')}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-notes mt-2">
                        <div class="flex-box5 ml-3">
                            <div class="box-profile5 mt-2 mb-2">
                                <p class="note">Notes</p>
                                <p class="note1">{{this.$route.query.notes}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="box mt-4 mr-4">
                        <div class="title">Transfer to</div>
                    </div>
                    <div class="box-user pt-3 pb-3 mt-3 mb-3">
                        <div class="flex-box1">
                            <div class="boxphoto">
                                <img class="user1" :src="receiver.photoProfile" alt="image9" v-if="receiver.photoProfile">
                                <img class="user1" src="../../assets/emptyprofile.jpg" alt="image10" v-else>
                            </div>
                            <div class="box-profile1 ml-5 mt-2">
                                <p class="name1 mb-2">{{firstName(username)}}</p>
                                <p class="phone1">{{receiver.phoneNumber}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end pb-2">
                        <div class="button"><img src="../../assets/share.png" alt="image11"></div>
                        <button class="button1 ml-3 mr-3"><img class="icon mb-1 mr-2" src="../../assets/download.png" alt="image12">Download PDF</button>
                        <router-link class="button2" :to="{path: '/main'}">Back to Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'Success',
  data () {
    return {
      receiver: '',
      username: '',
      moment: moment
    }
  },
  methods: {
    firstName (param) {
      const first = param.split(' ')[0].toLowerCase()
      this.capitalize = first.charAt(0).toUpperCase() + first.slice(1)
      return this.capitalize
    },
    balances (param) {
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
    filterTransaction () {
      const item = this.getUsers.filter(e => e.id === this.$route.query.id)
      this.receiver = item[0]
      this.username = item[0].username
    }
  },
  computed: {
    ...mapGetters(['getUsers'])
  },
  mounted () {
    this.filterTransaction()
  }
}
</script>

<style scoped>
.encapsule {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
}

.success {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;

    color: #4D4B57;
}

.title {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.box-user {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.flex-box1 {
    display: flex;
    flex-direction: row;
}

.boxphoto {
    width: 70px;
    background-position: 100px;
}

.boxphoto img {
    width: 100%;
    border-radius: 12px;
}

.user1 {
    width: 70px;
    height: 70px;

    margin: 0px 20px 0px 20px;
}

.name1 {
    margin: 0px;

    width: 110px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.phone1 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.title2 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.box-amount {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.flex-box2 {
    display: flex;
    flex-direction: row;
}

.amount {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: rgba(58, 61, 66, 0.9);
}

.money {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;

    color: #3A3D42;
}

.box-balance {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.flex-box3 {
    display: flex;
    flex-direction: row;
}

.balance {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: rgba(58, 61, 66, 0.9);
}

.money1 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;

    color: #3A3D42;
}

.box-date {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.flex-box4 {
    display: flex;
    flex-direction: row;
}

.date {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: rgba(58, 61, 66, 0.9);
}

.date1 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;

    color: #3A3D42;
}

.box-notes {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.flex-box5 {
    display: flex;
    flex-direction: row;
}

.note {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: rgba(58, 61, 66, 0.9);
}

.note1 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;

    color: #3A3D42;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 57px;
    height: 50px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);

    border: none;
    border-radius: 12px;

    color: #6379F4;
    background: rgba(99, 121, 244, 0.15);
}

.button:focus {
    outline: none;
}

.button1 {
    width: 30%;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);

    border: none;
    border-radius: 12px;

    color: #6379F4;
    background: rgba(99, 121, 244, 0.15);
}

.button1:focus {
    outline: none;
}

.button2 {
    width: 25%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    border: none;
    border-radius: 12px;

    color: #FFFFFF;
    background: #DADADA;
    text-decoration: none;
}

.button2:hover {
    background: #6379F4;
}

.button2:focus {
    outline: none;
}
</style>
