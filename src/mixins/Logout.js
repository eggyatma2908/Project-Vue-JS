import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.logout()
        .then(() => {
          localStorage.removeItem('vuex')
          Swal.fire({
            icon: 'success',
            title: 'Succeed logout',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/auth/login').catch(() => {})
        })
    }
  }
}
