<template>
    <div class="col-lg-9">
        <div class="encapsule">
            <div class="box pt-3 pb-2 ml-4 mr-4">
                <div class="box mt-4 mr-4">
                    <div class="title">Transfer Money</div>
                </div>
                <div class="box-user mt-5">
                    <div class="flex-box1">
                        <img class="user1" src="../../assets/1.png" alt="image3">
                        <div class="box-profile1 mt-2">
                            <p class="name1 mb-2">Samuel Sushi</p>
                            <p class="phone1">+62 813-8492-9994</p>
                        </div>
                    </div>
                </div>
                <div class="box1 ml-1 mr-1 mt-5 mb-5">
                    <p class="text">Type the amount you want to transfer and then </p>
                    <p class="text1">press continue to the next steps.</p>
                </div>
                <div class="box2 d-flex justify-content-center">
                    <input class="null" type="text" placeholder="0.00" v-model="amount" required>
                </div>
                <p class="saldo mt-4">Rp120.000 Available</p>
                <div class="box3 d-flex justify-content-center">
                    <input class="notes mt-4" placeholder="Add some notes" type="text" v-model="notes" required/>
                </div>
                <div class="box4 d-flex justify-content-end mt-4 mb-4">
                    <button class="button" type="submit" @click.prevent="insertData()">Continue</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Inputtransfer',
  data: function () {
    return {
      amount: '',
      notes: ''
    }
  },
  methods: {
    insertData () {
      axios.post(`${process.env.VUE_APP_SERVICE_API}/transaction`, {
        amount: this.amount,
        notes: this.notes
      }).then(() => {
        alert('Berhasil')
      }).catch((err) => {
        console.log(err)
        alert('Gagal')
      })
    }
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

    text-align: center;

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

.box1 {
    width: max-content;
    height: max-content;
}

.text {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    color: #7A7886;

    margin: 0px 0px 0px 0px;
}

.text1 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    color: #7A7886;

    margin: 0px 0px 0px 0px;
}

.null {
    width: 50%;

    outline: none;
    border: none;
    text-align: center;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 56px;

    text-align: center;

    color: #B5BDCC;
}

.null:valid {
    color: #6379F4;
}

.null:invalid {
    color: #B5BDCC;
}

.saldo {
    text-align: center;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.notes {
    outline: 0;
    border-width: 0 0 2px;
    width: 50%;
    height: 50px;
    border-color: #a9a9a999;
    background-image: url("../../assets/pen.png");
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 40px;
}

.notes:valid {
    border-color: #6379F4;
    background-image: url("../../assets/pen1.png");
}

.notes:invalid {
    border-color:  #a9a9a999;
    background-image: url("../../assets/pen.png");
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
    background: #6379F4;
}

/* Mobile M */
@media (max-width: 375px) {
    .text {
        font-size: 13px;
    }
    .text1 {
        font-size: 13px;
    }
    .notes {
        width: 70%;
    }
    .button {
        width: 40%;
    }
}

/* Mobile S */
@media (max-width: 320px) {
    .text {
        font-size: 11px;
    }
    .text1 {
        font-size: 11px;
    }
}
</style>
