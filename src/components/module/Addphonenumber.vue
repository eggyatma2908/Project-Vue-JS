<template>
    <div class="col-lg-9">
        <div class="encapsule">
            <div class="box-add-phone-number pt-5 ml-4">
                <p class="title">Add Phone Number</p>
                <p class="describe mb-5">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
            </div>
            <div class="d-flex justify-content-center pt-5 pb-5">
                <label for="phone">+62</label>
                <input type="tel" id="phone" class="input1 mr-4" name="phone" placeholder="Enter your phone number" required>
            </div>
            <div class="d-flex justify-content-center mt-5">
                <button class="button" type="submit">Add Phone Number</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Addphonenumber',
  data: function () {
    return {
      phoneNumber: ''
    }
  },
  methods: {
    insertData () {
      axios.patch(`${process.env.VUE_APP_SERVICE_API}/users`, {
        phoneNumber: ''
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

.describe {
    width: 342px;
    height: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    color: #7A7886;
}

label {
    position: relative;
    top: 13px;
    left: 65px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;

    color: #3A3D42;
}

.input1 {
    outline: 0;
    border-width: 0 0 2px;

    width: 433px;
    height: 50px;

    border-color: rgba(169, 169, 169, 0.6);
    background-image: url("../../assets/phone1.png");
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 75px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;

    color: rgba(169, 169, 169, 0.8);
}

.input1:valid {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 27px;

    color: #3A3D42;
    border-color: #6379F4;
    background-image: url("../../assets/phone2.png");
}

.input1:invalid {
    border-color: rgba(169, 169, 169, 0.6);
    background-image: url("../../assets/phone1.png");
}

.button {
    width: 50%;
    height: 57px;

    margin-bottom: 173px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    border: none;
    border-radius: 12px;

    color: #88888F;
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

/* Mobile M */
@media (max-width: 375px) {
    .button {
        width: 70%;
    }
    .describe {
        width: 250px
    }
}

/* Mobile S */
@media (max-width: 320px) {
    .input1 {
        font-size: 14px;
    }
}

</style>
