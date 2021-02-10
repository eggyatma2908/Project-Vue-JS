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
                <img class="success" src="../../assets/success.png" alt="image3">
                <div class="box">
                    <p class="paragraph3">Your PIN Was Successfully Created</p>
                    <p class="paragraph4">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
                    <button class="button" type="submit" @click="goLogin">Login Now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Pinsuccess',
  methods: {
    goLogin () {
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style lang="scss" scoped>
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

.success {
    margin-top: 121px;
    margin-bottom : 50px;
    margin-left: 50px;
}

.paragraph3 {
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
    .success {
        margin-left: 40px;
    }
}

@media (max-width: 991px) {
    .success {
        margin: 50px 0 50px 95px;
    }
    .button {
        margin: 45px 0;
    }
}

/* Tablet */
@media (max-width: 768px) {
    .success {
        margin: 50px 0 50px 75px;
    }
}

/* Mobile L */
@media (max-width: 425px) {
    .success {
        margin-left: 40px;
    }
}

/* Mobile M */
@media (max-width: 375px) {
    .success {
        margin-left: 35px;
    }
}

/* Mobile s */
@media (max-width: 320px) {
    .success {
        margin-left: 30px;
    }
}
</style>
