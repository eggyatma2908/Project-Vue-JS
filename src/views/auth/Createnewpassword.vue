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
                    <p class="paragraph3">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</p>
                    <p class="paragraph4">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                    <Inputpassword Id="myInput" Class="input1" PlaceholderValue="Create new password"/>
                    <img class="eye" src="../../assets/eye-crossed.png" alt="image3">
                    <input class="checkbox" type="checkbox" @click="togglePassword()">
                    <Inputpassword Id="myInput1" Class="input2" PlaceholderValue="Create new password"/>
                    <img class="eye1" src="../../assets/eye-crossed.png" alt="image4">
                    <input class="checkbox1" type="checkbox" @click="togglePassword1()">
                    <Button Button="Reset Password"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Inputpassword from '@/components/base/Inputpassword.vue'
import Button from '@/components/base/Button.vue'

export default {
  name: 'Createnewpassword',
  methods: {
    togglePassword () {
      var x = document.getElementById('myInput')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },

    togglePassword1 () {
      var x = document.getElementById('myInput1')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    }
  },
  components: {
    Inputpassword,
    Button
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

.eye {
    position: absolute;
    bottom: 250px;
    right: 60px;
}

.checkbox {
    opacity: 0;

    position: absolute;
    bottom: 250px;
    right: 60px;

    width: 24px;
    height: 24px;
}

.eye1 {
    position: absolute;
    bottom: 160px;
    right: 60px;
}

.checkbox1 {
    opacity: 0;

    position: absolute;
    bottom: 160px;
    right: 60px;

    width: 24px;
    height: 24px;
}

.input1 {
    margin-top: 40px;

    outline: 0;
    border-width: 0 0 2px;
    width: 80%;
    height: 50px;
    border-color: rgba(169, 169, 169, 0.6);
    background-image: url("../../assets/lock.png");
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 40px;
}
.input1:valid {
    border-color: #6379F4;
    background-image: url("../../assets/lock2.png");
}

.input1:invalid {
    border-color: #a9a9a999;
    background-image: url("../../assets/lock.png");
}

.input2 {
    margin-top: 40px;

    outline: 0;
    border-width: 0 0 2px;
    width: 80%;
    height: 50px;
    border-color: rgba(169, 169, 169, 0.6);
    background-image: url("../../assets/lock.png");
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 40px;
}
.input2:valid {
    border-color: #6379F4;
    background-image: url("../../assets/lock2.png");
}

.input2:invalid {
    border-color: #a9a9a999;
    background-image: url("../../assets/lock.png");
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
    .eye {
        bottom: 250px;
        right: 40px;
    }

    .checkbox {
        bottom: 250px;
        right: 40px;
    }

    .eye1 {
        bottom: 160px;
        right: 40px;
    }

    .checkbox1 {
        bottom: 160px;
        right: 40px;
    }
}

/* Tablet */
@media (max-width: 768px) {
    .eye {
        right: 80px;
    }

    .checkbox {
        right: 80px;
    }

    .eye1 {
        right: 80px;
    }

    .checkbox1 {
        right: 80px;
    }
}

/* Mobile L */
@media (max-width: 425px) {
    .eye {
        right: 40px;
    }

    .checkbox {
        right: 40px;
    }

    .eye1 {
        right: 40px;
    }

    .checkbox1 {
        right: 40px;
    }
}

/* Mobile S */
@media (max-width: 320px) {
    .eye {
        right: 30px;
    }

    .checkbox {
        right: 30px;
    }

    .eye1 {
        right: 30px;
    }

    .checkbox1 {
        right: 30px;
    }
}
</style>
