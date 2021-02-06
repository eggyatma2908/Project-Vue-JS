<template>
    <div class="col-lg-9">
        <div class="encapsule">
            <div class="box p-2 ml-4 mr-4">
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
                <div class="box-detail">
                    <div class="box1 mb-3">
                        <p class="title2">Details</p>
                    </div>
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
                                <p class="money1">Rp{{this.balances(balanceLeft())}}</p>
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
                    <div class="box2 d-flex justify-content-end mt-5 mb-1">
                        <button class="button" type="submit" @click.prevent="transfer()">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'Confirmationtransfer',
  data () {
    return {
      receiver: '',
      username: '',
      moment: moment
    }
  },
  methods: {
    ...mapActions(['transferUsers', 'updateBalanceSender', 'updateBalanceReceiver']),
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
    },
    balanceLeft () {
      const item = this.getUsers.filter(e => e.id.match(localStorage.id))
      this.balance = item[0].balance - this.$route.query.amount
      return this.balance
    },
    transfer () {
      const payload = {
        transaction: {
          senderId: localStorage.id,
          receiverId: this.$route.query.id,
          amount: this.$route.query.amount,
          notes: this.$route.query.notes
        },
        balanceLeftSender: {
          senderId: localStorage.id,
          balance: this.balance
        },
        balanceLeftReceiver: {
          receiverId: this.$route.query.id,
          balance: parseInt(this.receiver.balance) + parseInt(this.$route.query.amount)
        }
      }
      this.updateBalanceSender(payload.balanceLeftSender)
      this.updateBalanceReceiver(payload.balanceLeftReceiver)
      this.transferUsers(payload.transaction)
        .then(() => {
          this.$router.push({ path: '/main/success', query: { id: this.$route.query.id, balanceLeft: this.balanceLeft(), amount: this.$route.query.amount, notes: this.$route.query.notes } })
        })
        .catch(() => {
          this.$router.push({ path: '/main/failed', query: { id: this.$route.query.id, balanceLeft: this.balanceLeft(), amount: this.$route.query.amount, notes: this.$route.query.notes } })
        })
    }
  },
  computed: {
    ...mapGetters(['getUsers'])
  },
  mounted () {
    this.filterTransaction()
    this.balanceLeft()
  }
}
</script>

<style scoped>
.encapsule {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
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
    width: 25%;
    height: 57px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    text-align: center;

    border: none;
    border-radius: 12px;

    color: #FFFFFF;
    background: #DADADA;
}

.button:hover {
    background: #6379F4;
}

.button:focus {
    outline: none;
}

@media (max-width: 375px) {
    .button {
        width: 40%;
    }
}
</style>
