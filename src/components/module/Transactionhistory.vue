<template>
    <div class="col-lg-9">
        <div class="encapsule pt-4 pb-4 pl-2 pr-2">
            <div class="box-transaction">
                <p class="history">Transaction History</p>
            </div>
                <div class="box">
                <div v-for="transaction in getTransactions" :key="transaction.id">
                    <div class="flex-box1" v-if="getDataUserById[0].username === transaction.receiverName">
                        <div class="boxphoto">
                            <img :src="transaction.photoProfile" alt="image3" v-if="transaction.photoProfile">
                            <img src="../../assets/emptyprofile.jpg" alt="image4" v-else>
                        </div>
                        <div class="box-profile1">
                            <p class="name1">{{firstName(transaction.senderName)}}</p>
                            <p class="status">Transfer</p>
                        </div>
                        <p class="transfer2">+Rp{{balance(transaction.amount)}}</p>
                    </div>

                    <div class="d-flex justify-content-between flex-box1" v-if="getDataUserById[0].username === transaction.senderName">
                        <div class="boxphoto">
                            <img class="user1" :src="userProfile" alt="image3" v-if="userProfile">
                            <img class="profile" :src="getDataUserById[0].photoProfile" alt="image1" v-else-if="getDataUserById[0].photoProfile">
                            <img class="profile" src="../../assets/emptyprofile.jpg" alt="image1" v-else>
                        </div>
                        <div class="box-profile2">
                            <p class="name1">{{firstName(transaction.senderName)}}</p>
                            <p class="status1">Expense</p>
                        </div>
                        <p class="expense1">-Rp{{balance(transaction.amount)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Transactionhistory',
  methods: {
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
    }
  },
  computed: {
    ...mapGetters(['getDataUserById', 'getTransactions', 'userProfile'])
  }
}
</script>

<style scoped>
.encapsule {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
}

.history {
    margin: 0px 20px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.box {
    height: 475px;
    margin: 50px 20px;
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
    display: flex;
    justify-content: space-between;
    padding: 16px 10px 16px 10px ;
}

.box1 {
    display: flex;
    flex-direction: row;
}

.boxphoto {
    width: 56px;
    background-position: 100px;
    margin: 0px 10px 0px 0px;
}

.boxphoto img {
    width: 100%;
    height: 56px;
    border-radius: 12px;
}

.box-profile1,
.box-profile2 {
    display: flex;
    flex-direction: column;
}

.name1,
.name2 {
    margin: 8px 0px 0px 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.status,
.status1 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.transfer2 {
    margin: 15px 0px 0px 0px;

    width: max-content;
    height: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #1EC15F;
}

.flex-box2 {
    display: flex;
    justify-content: space-between;

    margin-top: 45px;
}

.box2 {
    display: flex;
    flex-direction: row;
}

.profile2 {
    width: 56px;
    height: 56px;

    margin: 0px 10px 0px 0px;
}

.expense1 {
    margin: 15px 0px 0px 0px;

    width: max-content;
    height: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #FF5B37;
}

.month {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;

    color: #7A7886;
}

.flex-box3 {
    display: flex;
    justify-content: space-between;

    margin-top: 55px;
}

.box3 {
    display: flex;
    flex-direction: row;
}

.profile3 {
    width: 56px;
    height: 56px;

    margin: 0px 10px 0px 0px;
}

.box-profile3 {
    display: flex;
    flex-direction: column;
}

.name3 {
    margin: 8px 0px 0px 0px;

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
    margin: 15px 0px 0px 0px;

    width: max-content;
    height: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #1EC15F;
}

.flex-box4 {
    display: flex;
    justify-content: space-between;

    margin-top: 45px;
    padding-bottom: 30px;
}

.box4 {
    display: flex;
    flex-direction: row;
}

.profile4 {
    width: max-content;
    height: max-content;

    margin: 0px 10px 0px 0px;
}

.box-profile4 {
    display: flex;
    flex-direction: column;
}

.name4 {
    margin: 8px 0px 0px 0px;

    width: max-content;

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

.subcription1 {
    margin: 15px 0px 0px 0px;

    width: max-content;
    height: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #FF5B37;
}
</style>
