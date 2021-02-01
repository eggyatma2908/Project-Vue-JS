<template>
    <div class="col-lg-9">
        <div class="encapsule">
        <div class="box pt-5 ml-4 mr-4">
            <p class="title ml-1">Search Receiver</p>
            <div class="box-search mt-4">
                <div class="icon-search"><label for="search"><img src="../../assets/search.png" alt="image9"></label></div>
                    <input type="text" id="search" placeholder="Search receiver here" v-model="search"/>
                </div>
            </div>
            <div class="box-user ml-4 mr-4">
                <div class="box-sort">
                    <button class="button1" @click="sortByNameAZ()">▲</button>
                    <button class="button2" @click="sortByNameZA()">▼</button>
                </div>
                <div class="flex-box1" v-for="user in filterUsername" :key="user.id">
                    <router-link :to="{ path: `InputTransfer/${user.id}`}" class="router">
                        <div class="boxphoto">
                            <img class="user1" :src="user.photoProfile" alt="image3" v-if="user.photoProfile">
                            <img class="user1" src="../../assets/emptyprofile.jpg" alt="image4" v-else>
                        </div>
                        <div class="box-profile1 ml-5 mt-2">
                            <p class="name1 mb-2">{{ firstName(user.username) }}</p>
                            <p class="phone1">{{user.phoneNumber === null ? null : '+62'}}{{ user.phoneNumber }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="box-pagination">
                <div class="row1">
                    <p>Data to <b>{{ begin + 1 }} - {{ end >= exceptUserLogin().length ? exceptUserLogin().length : end }}</b> from <b>{{ exceptUserLogin().length }}</b> data
                    </p>
                </div>
                <div class="row2">
                    <div class="column has-text-right">
                        <button class="button" @click="pageNav('left')" :disabled="begin === 0">◀</button>
                        <button class="button" @click="pageNav('right')" :disabled="end >= exceptUserLogin().length">▶</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Searchreceiver',
  data: function () {
    return {
      search: '',
      list_paged: [],
      begin: 0,
      end: 4
    }
  },
  methods: {
    firstName (param) {
      const first = param.split(' ')[0].toLowerCase()
      this.capitalize = first.charAt(0).toUpperCase() + first.slice(1)
      return this.capitalize
    },
    exceptUserLogin () {
      return this.getUsers.filter((user) => {
        return !user.id.match(localStorage.id)
      })
    },
    sortByNameAZ () {
      this.list_paged.sort(function (a, b) {
        const nameA = a.username.toUpperCase()
        const nameB = b.username.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    },
    sortByNameZA () {
      this.list_paged.sort(function (a, b) {
        const nameA = a.username.toUpperCase()
        const nameB = b.username.toUpperCase()
        if (nameA > nameB) {
          return -1
        }
        if (nameA < nameB) {
          return 1
        }
        return 0
      })
    },
    pageNav (direction) {
      if (direction === 'left') {
        this.begin -= 4
        this.end -= 4
      } else if (direction === 'right') {
        this.begin += 4
        this.end += 4
      }
      this.list_paged = this.exceptUserLogin().slice(this.begin, this.end)
    }
  },
  computed: {
    ...mapGetters(['getUsers']),
    filterUsername: function () {
      return this.list_paged.filter((user) => {
        return user.username.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  mounted () {
    this.pageNav()
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

    margin: 35px 0px 0px 0px;
}

.boxphoto {
    width: 70px;
    background-position: 100px;
}

.boxphoto img {
    width: 100%;
    border-radius: 12px;
}

.router {
    display: flex;
    text-decoration: none;
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

.box-pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5px;
}

.box-pagination p{
    margin-top: 8px;
    margin-bottom: 8px;
}

.box-sort {
    position: relative;
}

.button1 {
    position: absolute;

    top: -140px;
    right: 50px;
}

.button2 {
    position:absolute;

    top: -140px;
    right: 20px;

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
