<template>
    <div class="col-lg-9">
        <div class="encapsule pt-5 pb-5 pl-4 pr-4">
            <div class="d-flex justify-content-center pt-4 pb-3">
                <div class="boxphoto">
                    <img id="update-photo" :src="userProfile" alt="image1" v-if="userProfile">
                    <img class="profile" :src="getDataUserById[0].photoProfile" alt="image9" v-else-if="getDataUserById[0].photoProfile">
                    <img class="profile" src="../../assets/emptyprofile.jpg" alt="image9" v-else>
                </div>
            </div>
            <div class="boxedit">
                <img class="pen" src="../../assets/pen.png" alt="image10">
                <label style="margin: 0;" for="photoprofile">
                    <p class="edit">Edit</p>
                </label>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <div class="box-profile">
                    <p class="name1">{{getDataUserById[0] ? capitalizeStr(getDataUserById[0].username) : ''}}</p>
                    <p class="phone1">{{getDataUserById[0].phoneNumber ? '+62' + getDataUserById[0].phoneNumber : '+62'}}</p>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <router-link class="button1 d-flex justify-content-between pt-3 pl-3 pr-3" :to="{ path: `/main/personalinfo`}">
                    <p>Personal Information</p>
                    <img style="width: 28px; height: 28px;" src="../../assets/arrow-left.png" alt="image11">
                </router-link>
            </div>
            <div class="d-flex justify-content-center position1 mt-3">
                <router-link class="button1 d-flex justify-content-between pt-3 pl-3 pr-3" :to="{ path: `/main/addphone`}">
                    <p>Add Phone Number</p>
                    <img style="width: 28px; height: 28px;" src="../../assets/arrow-left.png" alt="image12">
                </router-link>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <router-link class="button1 d-flex justify-content-between pt-3 pl-3 pr-3" :to="{ path: `/main/managephone`}">
                    <p>Manage Phone Number</p>
                    <img style="width: 28px; height: 28px;" src="../../assets/arrow-left.png" alt="image13">
                </router-link>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <router-link class="button1 d-flex justify-content-between pt-3 pl-3 pr-3" :to="{path: '/auth/login'}" @click.native="handleLogout">
                    <p>Logout</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Swal from 'sweetalert2'
import Logout from '../../mixins/Logout'

export default {
  mixins: [Logout],
  name: 'Profileuser',
  data () {
    return {
      photoProfile: [],
      previewImage: ''
    }
  },
  methods: {
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
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'File to large or File accepted only JPG, JPEG, GIF & PNG',
            showConfirmButton: false,
            timer: 2000
          })
        })
    }
  },
  computed: {
    ...mapGetters(['userProfile', 'getDataUserById'])
  }
}
</script>

<style scoped>
.encapsule {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
}

.boxphoto {
    width: 80px;
    height: 80px;
    background-position: 100px;
}

.boxphoto img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
}

.boxedit {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pen {
    width: 15px !important;
    height: 15px;
}

.edit {
    margin: 0 0 0 5px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;

    color: #7A7886;
}

.box-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.name1 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;

    color: #4D4B57;
}

.phone1 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;

    color: #7A7886;
}

.button1 {
    width: 433px;
    height: 64px;

    border: none;

    background: #E5E8ED;
    border-radius: 10px;
    outline: none;
    text-decoration: none;
}

.button1 p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;

    color: #4D4B57;
}
</style>
