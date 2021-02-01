<template>
    <div class="col-lg-9">
        <div class="encapsule">
            <div class="box-personal pt-4 pb-3 pl-4 pr-4">
                <p class="title">Personal Information</p>
                <p class="describe">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                <div class="box-firstname pt-4 pb-2 pl-4">
                    <h1>First Name</h1>
                    <p>{{firstName(this.getDataUserById[0].username)}}</p>
                </div>
                <div class="box-lastname mt-2 pt-4 pb-2 pl-4">
                    <h1>Last Name</h1>
                    <p>{{lastName(this.getDataUserById[0].username)}}</p>
                </div>
                <div class="box-verified-email mt-2 pt-4 pb-2 pl-4">
                    <h1>Verified E-mail</h1>
                    <p>{{getDataUserById[0].email}}</p>
                </div>
                <div class="phone-number d-flex justify-content-between mt-2 pt-4 pb-2 pl-4">
                    <div class="box-phone">
                        <h1>Phone Number</h1>
                        <p>{{getDataUserById[0].phoneNumber ? '+62' + getDataUserById[0].phoneNumber : '+62'}}</p>
                    </div>
                    <router-link class="button1 mt-3" :to="{ path : '/main/managephone' }">Manage</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Personalinfo',
  methods: {
    firstName (param) {
      const first = param.split(' ')[0].toLowerCase()
      this.capitalize = first.charAt(0).toUpperCase() + first.slice(1)
      return this.capitalize
    },
    lastName (param) {
      const lowerStr = param.toLowerCase()
      this.last = lowerStr.split(' ').slice(1).map(item => item.slice()[0].charAt(0).toUpperCase() + item.slice(1))
      return this.last.join(' ')
    }
  },
  computed: {
    ...mapGetters(['getDataUserById'])
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

.col-lg-9 .describe {
    width: 53%;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    color: #7A7886;
}

.col-lg-9 h1 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: #7A7886;
}

.col-lg-9 p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;

    color: #514F5B;
}

.box-firstname {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.box-lastname {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.box-verified-email {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.phone-number {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.button1 {
    width: max-content;
    height: max-content;

    border: none;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    background: none;
    color: #6379F4;
}

.button1:focus {
    outline: none;
}

@media (max-width: 991px) {
    .col-lg-9 .describe {
        width: 100%;
    }
}

@media (max-width: 380px) {
    .col-lg-9 p {
        font-size: 18px;
    }
    .phone-number p {
        font-size: 15px;
    }
}
</style>
