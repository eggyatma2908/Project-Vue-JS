<template>
    <div class="col-lg-8">
        <div class="encapsule">
            <div class="box-manage-phone-number p-4">
                <p class="title">Manage Phone Number</p>
                <p class="describe mb-5">You can only delete the phone number and then you must add another phone number.</p>
            </div>
            <div class="d-flex justify-content-between ml-3 mr-3" v-if="phone() !== '+62'">
                <div class="box-primary">
                    <div class="boxphone">
                        <h1>Primary</h1>
                        <p style="margin: 0">{{phone()}}</p>
                    </div>
                    <button class="button" type="submit" @click.prevent="deletePhone()"><img class="trash mt-3" src="../../assets/trash.png" alt="image9"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'Managephonenumber',
  methods: {
    ...mapActions(['editPhone']),
    phone () {
      if (this.getDataUserById[0].phoneNumber === null || this.getDataUserById[0].phoneNumber === 0) {
        return '+62'
      }
      return '+62' + this.getDataUserById[0].phoneNumber
    },
    deletePhone () {
      const userId = localStorage.id
      const payload = {
        userId,
        phoneNumber: null
      }
      this.editPhone(payload)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Phone number has been deleted',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/')
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'phone number failed',
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  },
  computed: {
    ...mapGetters(['getDataUserById'])
  },
  mounted () {
    this.phone()
  }
}
</script>

<style scoped>
.encapsule {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
}

.col-lg-8 p.title {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.col-lg-8 p.describe {
    width: 62%;
    height: 84px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    color: #7A7886;
}

.col-lg-8 h1 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: #7A7886;
}

.col-lg-8 p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 135%;
    line-height: 30px;

    color: #514F5B;
}

.box-primary {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    margin-bottom: 345px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.trash {
    width: max-content;
    height: max-content;
}

div.footer {
    position: relative;

    background: #6379F4;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    position: relative;
}

.flex-box5 {
    display: flex;
}

.copyright {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    color: rgba(239, 239, 239, 0.9);
}

.phone5 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    color: #EFEFEF;
}

.contact {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    color: #EFEFEF;
}

.button {
    border: none;
    background: none;
    width: max-content;
    height: max-content;
}

@media (max-width: 991px) {
    .col-lg-8 p.describe {
        width: 100%;
    }
}

/* Tablet */
@media (max-width: 768px) {
    .box-sidebar5 {
        margin-top: 40px;
    }
}

/* Mobile L */
@media (max-width: 425px) {
    .header {
        flex-direction: column;
        margin: 0px 20px;
        padding: 20px 0px;
    }
    .flex-box5 {
        flex-direction: column;
    }
    .copyright {
        position: absolute;
        top: 110px;
    }
    .phone2 {
        font-size: 13px;
        margin: 0px;
    }
    .contact {
        margin-bottom: 50px;
    }
}

/* Mobile M */
@media (max-width: 375px) {
    .col-lg-8 h1 {
        margin-top: 40px;
    }
    .col-lg-8 p {
        font-size: 90%;
    }
    .trash {
        margin-top: 55px !important;
    }
}
</style>
