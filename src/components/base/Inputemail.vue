<template>
    <input class="input1" placeholder="Enter your e-mail" type="email" v-model="newValue" required />
</template>

<script>
export default {
  name: 'Inputemail',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      newValue: this.value
    }
  },
  watch: {
    newValue (v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style scoped>
.input1 {
    margin-top: 40px;

    outline: 0;
    border-width: 0 0 2px;
    width: 80%;
    height: 50px;
    border-color: #a9a9a999;
    background-image: url("../../assets/mail.png");
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 40px;
}

.input1:valid {
    border-color: #6379F4;
    background-image: url("../../assets/mail2.png");
}

.input1:invalid {
    border-color: #a9a9a999;
    background-image: url("../../assets/mail.png");
}
</style>
