<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-7">
                <img class="img1" src="../../assets/background.png" alt="image1">
                <h1 class="logo">Zwallet</h1>
                <img class="img2" src="../../assets/phone.png" alt="image2">
                <p class="paragraph1">App that Covering Banking Needs.</p>
                <p class="paragraph2">Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
            </div>

            <div class="col-lg-5">
                <div class="box">
                    <p class="paragraph3">Start Accessing Banking Needs With All Devices and All Platforms With 30.000++ Users</p>
                    <p class="paragraph4">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                    <Inputusername v-model="username" @updateNilai="updateNilai"/>
                    <Inputemail v-model="email" @updateNilai="updateNilai"/>
                    <Inputpassword Id="myInput" Class="input2" PlaceholderValue="Enter your password" Password="password" v-model="password" @updateNilai="updateNilai"/>
                    <img class="img3" src="../../assets/eye-crossed.png" alt="image3">
                    <input class="checkbox" type="checkbox" @click="togglePassword()">
                    <button class="button" type="submit" @click.prevent="signUp()">Sign Up</button>
                    <p class="paragraph5">Already have an account? Lets<router-link to="Login"> Login</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Inputusername from '@/components/base/Inputusername.vue'
import Inputemail from '@/components/base/Inputemail.vue'
import Inputpassword from '@/components/base/Inputpassword.vue'

import axios from 'axios'

export default {
  name: 'Signup',
  data: function () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    togglePassword () {
      var x = document.getElementById('myInput')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    signUp () {
      axios.post(`${process.env.VUE_APP_SERVICE_API}/users`, {
        username: this.username,
        email: this.email,
        password: this.password
      }).then(() => {
        alert('Berhasil')
        this.clear()
      }).catch((err) => {
        console.log(err)
        alert('Gagal')
      })
    },
    clear () {
      this.username = ''
      this.email = ''
      this.password = ''
    },
    updateNilai (nilaiBaru) {
      this.value = nilaiBaru
    }
  },
  components: {
    Inputusername,
    Inputemail,
    Inputpassword
  }
}
</script>

<style scoped>
body {
    margin: 0px;
    padding: 0px;
}

.col-lg-7 {
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
}

.img1 {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.img2 {
    width: 65%;
}

.logo {
    margin-top: 50px;

    width: 65%;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 40px;

    color: #FFFFFF;
}

.paragraph1 {
    margin-top: 12px;

    width: 65%;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;

    color: #FFFFFF;
}

.paragraph2 {
    margin-top: 30px;
    margin-bottom: 70px;

    width: 65%;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;

    color: #ffffffcc;
}

.paragraph3 {
    margin-top: 121px;

    width: 80%;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;

    color: #3A3D42;
}

.paragraph4 {
    margin-top: 30px;

    width: 80%;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;

    color: #3a3d4299;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
}

.img3 {
    position: absolute;
    bottom: 240px;
    right: 60px;
}

.checkbox {
    position: absolute;
    bottom: 240px;
    right: 60px;

    width: 24px;
    height: 24px;

    opacity: 0;
}

.paragraph5 {
    margin-top: 40px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;

    text-align: center;

    color: #3a3d42cc;
}

.button {
    margin-top: 90px;

    width: 80%;
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

/* Laptop */
@media (max-width: 1024px) {
    .img3 {
        bottom: 210px;
        right: 40px;
    }

    .checkbox {
        bottom: 210px;
        right: 40px;
    }

    .paragraph5 {
        margin-top: 10px;
    }
}

/* Tablet */
@media (max-width: 768px) {
    .img3 {
        right: 75px;
    }

    .checkbox {
        right: 75px;
    }
}

/* Mobile L*/
@media (max-width: 425px) {
    .img3 {
        right: 40px;
    }

    .checkbox {
        right: 40px;
    }
}

/* Mobile S*/
@media (max-width: 320px) {
    .img3 {
        right: 30px;
    }

    .checkbox {
        right: 30px;
    }
}
</style>
