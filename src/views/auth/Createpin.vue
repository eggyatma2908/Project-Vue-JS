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
                    <p class="paragraph3">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</p>
                    <p class="paragraph4">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
                    <div class="box1">
                        <input class="input1" type="text" maxlength="1" required>
                        <input class="input2" type="text" maxlength="1" required>
                        <input class="input3" type="text" maxlength="1" required>
                        <input class="input4" type="text" maxlength="1" required>
                        <input class="input5" type="text" maxlength="1" required>
                        <input class="input6" type="text" maxlength="1" required>
                    </div>
                    <button class="button" type="submit">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Createpin'
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
}

.box1 {
    margin-top: 70px;

    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.input1 {
    background: #FFFFFF;

    outline: none;

    text-align: center;
    width: 53px;
    height: 65px;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;

    color: #3A3D42;
}

.input1:valid {
    border-color: #6379F4;
}

.input1:invalid {
    border-color: rgba(169, 169, 169, 0.6);
}

.input2 {
    background: #FFFFFF;

    outline: none;

    text-align: center;
    width: 53px;
    height: 65px;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;

    color: #3A3D42;
}

.input2:valid {
    border-color: #6379F4;
}

.input2:invalid {
    border-color: rgba(169, 169, 169, 0.6);
}

.input3 {
    background: #FFFFFF;

    outline: none;

    text-align: center;
    width: 53px;
    height: 65px;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;

    color: #3A3D42;
}

.input3:valid {
    border-color: #6379F4;
}

.input3:invalid {
    border-color: rgba(169, 169, 169, 0.6);
}

.input4 {
    background: #FFFFFF;

    outline: none;

    text-align: center;
    width: 53px;
    height: 65px;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;

    color: #3A3D42;
}

.input4:valid {
    border-color: #6379F4;
}

.input4:invalid {
    border-color: rgba(169, 169, 169, 0.6);
}

.input5 {
    background: #FFFFFF;

    outline: none;

    text-align: center;
    width: 53px;
    height: 65px;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;

    color: #3A3D42;
}

.input5:valid {
    border-color: #6379F4;
}

.input5:invalid {
    border-color: rgba(169, 169, 169, 0.6);
}

.input6 {
    background: #FFFFFF;

    outline: none;

    text-align: center;
    width: 53px;
    height: 65px;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;

    color: #3A3D42;
}

.input6:valid {
    border-color: #6379F4;
}

.input6:invalid {
    border-color: rgba(169, 169, 169, 0.6);
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
    color: #FFFFFF;
    background: #6379F4;
}

.button:focus {
    outline: none;
    color: #FFFFFF;
    background: #6379F4;
}

/* Tablet */
@media (max-width: 768px) {
    .box1 {
        width: 60%;
    }

    .button {
        width: 60%;
    }
}

/* Mobile L */
@media (max-width: 425px) {
    .box1 {
        width: 90%;
    }
}

/* Mobile s */
@media (max-width: 320px) {
    .box1 {
        width: 110%;
    }
}
</style>
