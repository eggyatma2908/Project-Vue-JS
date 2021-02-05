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
                    <div class="box-email">
                        <input class="input1" placeholder="Enter your e-mail" type="email" v-model.trim="$v.email.$model" :class="{ 'is-invalid': validationStatus($v.email) }" required/>
                        <div class="invalid-feedback" v-if="!$v.email.required">Field is required.</div>
                        <div class="invalid-feedback" v-if="!$v.email.email">Invalid email</div>
                    </div>
                    <div class="box-password">
                        <input type="password" id="myInput" class="input2" placeholder="Enter your password" password="password" v-model.trim="$v.password.$model" :class="{ 'is-invalid': validationStatus($v.password) }" required/>
                        <div class="invalid-feedback" v-if="!$v.password.required">Field is required.</div>
                        <div class="invalid-feedback" v-if="!$v.password.minLength">Field must have at least {{ $v.password.$params.minLength.min }} characters.</div>
                        <img class="img3" src="../../assets/eye-crossed.png" alt="image3">
                        <input class="checkbox" type="checkbox" @click="togglePassword()">
                        <p class="forgotPassword"><router-link to="Resetpassword">Forgot Password?</router-link></p>
                    </div>
                    <Button @click="loginUser()" Button="Login"/>
                    <p class="paragraph5">Don't have an account? Let's <router-link to="Signup">Sign Up</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/base/Button.vue'
import { mapMutations, mapActions } from 'vuex'
import Swal from 'sweetalert2'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Button
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    ...mapMutations(['togglePassword']),
    ...mapActions(['login']),
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    loginUser () {
      this.$v.$touch()
      if (this.$v.$pending || this.$v.$error) return
      const payload = {
        email: this.email,
        password: this.password
      }
      this.login(payload)
        .then((res) => {
          console.log(res)
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/main/home')
        })
        .catch((err) => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap");

body {
    margin: 0px;
    padding: 0px;
}

.col-lg-7 {
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
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

.box-username, .box-email, .box-password {
    width: 80%;
}

.input1{
    margin-top: 40px;

    outline: 0;
    border-width: 0 0 2px;
    width: 100%;
    height: 50px;
    border-color: rgba(169, 169, 169, 0.6);
    background-image: url("../../assets/person.png");
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 40px;
}

.input1:valid {
    border-color: #6379F4;
    background-image: url("../../assets/person2.png");
}

.input1:invalid {
    border-color: rgba(169, 169, 169, 0.6);
    background-image: url("../../assets/person.png");
}

.box-password {
    position: relative;
}

.input2 {
    margin-top: 40px;

    outline: 0;
    border-width: 0 0 2px;
    width: 100%;
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

.box {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
}

.invalid-feedback {
    position: absolute;
}

.img3 {
    position: absolute;
    bottom: 15px;
    right: 0px;
}

.checkbox {
    position: absolute;
    bottom: 15px;
    right: 0px;

    width: 24px;
    height: 24px;

    opacity: 0;
}

.forgotPassword a {
    color: rgba(58, 61, 66, 0.8);
}

.forgotPassword {
    position: absolute;
    right: 0px;

    margin-top: 20px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    text-align: right;
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

/* Laptop */
@media (max-width: 1024px) {
    .paragraph5 {
        margin-top: 10px;
    }
}

/* Tablet */
@media (max-width: 768px) {
    .paragraph3 {
        margin: 30px 0 0 0;
    }
}

</style>
