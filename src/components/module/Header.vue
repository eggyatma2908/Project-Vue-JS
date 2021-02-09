<template>
    <div class="container-fluid">
        <div class="header">
            <p v-styleLogo:logo>Zwallet</p>
            <div class="d-flex justify-content-between flex-box image-upload">
                <div class="boxphoto">
                  <label for="photoprofile">
                    <img id="update-photo" :src="userProfile" alt="image1" v-if="userProfile">
                    <img id="update-photo" :src="getDataUserById[0].photoProfile" alt="image1" v-else-if="getDataUserById[0].photoProfile">
                    <img class="profile" src="../../assets/emptyprofile.jpg" alt="image1" v-else>
                  </label>
                </div>
                <input id="photoprofile" type="file" accept="image/x-png/,image/gif,image/jpeg" class="uploadphoto" v-on:change="updatePhoto"/>
                <div class="box-profile">
                    <p class="name">{{getDataUserById[0] ? capitalizeStr(getDataUserById[0].username) : ''}}</p>
                    <router-link :to="{ path: `/main/managephone`}"><p class="phone">{{getDataUserById[0].phoneNumber ? '+62' + getDataUserById[0].phoneNumber : '+62'}}</p></router-link>
                </div>
                <img class="bell" src="../../assets/bell.png" alt="image2">
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'Header',
  data () {
    return {
      photoProfile: [],
      previewImage: ''
    }
  },
  methods: {
    ...mapActions(['getAllUser', 'updateUserProfile', 'getUserById']),
    capitalizeStr (param) {
      const lowerStr = param.toLowerCase()
      this.last = lowerStr.split(' ').slice(0).map(item => item.slice()[0].charAt(0).toUpperCase() + item.slice(1))
      return this.last.join(' ')
    },
    updatePhoto () {
      const imagename = (event.target.files[0].name)
      this.photoProfile = imagename
      this.previewImg = URL.createObjectURL(event.target.files[0])
      const form = new FormData()
      const image = document.getElementById('photoprofile').files[0]
      form.append('photoProfile', image)
      const userId = localStorage.getItem('id')
      const payload = {
        userId,
        formData: form
      }
      this.updateUserProfile(payload)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Photo profile has been update',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          if (err.response.data.err.message === 'Rejected: File accepted only JPG, JPEG, GIF & PNG.') {
            Swal.fire({
              icon: 'error',
              title: 'File accepted only JPG, JPEG, GIF & PNG',
              showConfirmButton: false,
              timer: 2000
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'File to large',
              showConfirmButton: false,
              timer: 2000
            })
          }
        })
    }
  },
  computed: {
    ...mapGetters(['userProfile', 'getDataUserById'])
  },
  mounted () {
    this.getUserById()
    this.getAllUser()
  }
}
</script>

<style scoped>
body {
    margin: 0px;
    padding: 0px;
}

.container-fluid {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

.header {
    display: flex;
    justify-content: space-between;

    margin: 0px 50px;
    padding: 20px 0px;
}

.boxphoto {
    width: 52px;
    background-position: 100px;
}

.boxphoto img {
    width: 100%;
    height: 52px;

    border-radius: 50px;
}

.image-upload > input {
  display: none;
}

.box-profile {
    margin: 0px 20px 0px 20px;
}

.profile {
    width: 52px;
    height: 52px;
}

.name {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 100%;
    line-height: 31px;

    color: #3A3D42;
}

.phone {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 80%;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.bell {
    width: max-content;
    height: max-content;

    margin-top: 1rem;
}

/* Mobile L */
@media (max-width: 425px) {
    .header {
        flex-direction: column;
        margin: 0px 20px;
        padding: 20px 0px;
    }
}
</style>
