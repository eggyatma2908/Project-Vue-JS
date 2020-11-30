<template>
    <div class="col-lg-9" id="app">
        <div class="encapsule">
        <div class="box pt-5 ml-4 mr-4">
            <p class="title ml-1">Search Receiver</p>
            <div class="box-search mt-4">
                <div class="icon-search"><label for="search"><img src="../../assets/search.png" alt="image9"></label></div>
                    <input type="text" id="search" placeholder="Search receiver here" v-model="search" />
                </div>
            </div>
            <div class="box-user ml-4" v-for="user in filterUsername" :key="user.id">
                <router-link to="Inputtransfer" style="text-decoration: none;">
                <div class="flex-box1">
                    <img class="user1" src="../../assets/1.png" alt="image3">
                    <div class="box-profile1 mt-2">
                        <p class="name1 mb-2">{{ user.username }}</p>
                        <p class="phone1">{{ user.phoneNumber }}</p>
                    </div>
                </div>
                 </router-link>
                <!-- <div class="flex-box2">
                    <img class="user2" src="../../assets/4.png" alt="image4">
                    <div class="box-profile1 mt-2">
                        <p class="name2 mb-2">Momo Taro</p>
                        <p class="phone2">+62 812-4343-6731</p>
                    </div>
                </div>
                <div class="flex-box3">
                    <img class="user3" src="../../assets/3.png" alt="image5">
                    <div class="box-profile3 mt-2">
                        <p class="name3 mb-2">Jessica Keen</p>
                        <p class="phone3">+62 811-3452-5252</p>
                    </div>
                </div>
                <div class="flex-box4">
                    <img class="user4" src="../../assets/profile.png" alt="image6">
                    <div class="box-profile4 mt-2">
                        <p class="name4 mb-2">Michael Le</p>
                        <p class="phone4">+62 810-4224-4613</p>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Searchreceiver',
  data: function () {
    return {
      users: [],
      search: ''
    }
  },
  methods: {
    getAllData () {
      axios.get(`${process.env.VUE_APP_SERVICE_API}/users`)
        .then((res) => {
          this.users = res.data
        })
        .catch(() => {
          alert('error load data')
        })
    }
  },
  computed: {
    filterUsername: function () {
      return this.users.filter((user) => {
        return user.username.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  mounted () {
    this.getAllData()
  }
}
</script>

<style scoped>
.encapsule {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;

    padding-bottom: 35px;
}

.title {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.box-search {
    position: relative;
}

.icon-search {
    position: absolute;
    top: -4px;
    left: -3px;

    margin-left: 17px;
    margin-top: 17px;
    color: #4f5b66;
}

#search {
    width: 100%;
    height: 54px;

    border: none;
    padding-left: 45px;
    background: rgba(58, 61, 66, 0.1);
    border-radius: 12px;

    outline: none;
}

.flex-box1 {
    display: flex;
    flex-direction: row;

    margin: 45px 0px 0px 0px;
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

/* .flex-box2 {
    display: flex;
    flex-direction: row;

    margin: 45px 0px 0px 0px;
}

.user2 {
    width: 70px;
    height: 70px;

    margin: 0px 20px 0px 20px;
}

.name2 {
    margin: 0px;

    width: 90px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.phone2 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.flex-box3 {
    display: flex;
    flex-direction: row;

    margin: 45px 0px 0px 0px;
}

.user3 {
    width: 70px;
    height: 70px;

    margin: 0px 20px 0px 20px;
}

.name3 {
    margin: 0px;

    width: 105px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.phone3 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.flex-box4 {
    display: flex;
    flex-direction: row;

    margin: 45px 0px 0px 0px;
    padding-bottom: 22px;
}

.user4 {
    width: 70px;
    height: 70px;

    margin: 0px 20px 0px 20px;
}

.name4 {
    margin: 0px;

    width: 90px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.phone4 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
} */
</style>
