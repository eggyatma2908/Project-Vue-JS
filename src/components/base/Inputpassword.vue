<template>
    <input :id="Id" :class="Class" :placeholder="PlaceholderValue" type="password" v-model="newValue" required />
</template>

<script>
export default {
  name: 'Inputpassword',
  props: {
    PlaceholderValue: String,
    Class: String,
    Id: String,
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
.input2 {
    margin-top: 40px;

    outline: 0;
    border-width: 0 0 2px;
    width: 80%;
    height: 50px;
    border-color: rgba(169, 169, 169, 0.6);
    background-image: url("../../assets/lock.png");
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 40px;
}
.input2:valid {
    border-color: #6379F4;
    background-image: url("../../assets/lock2.png");
}

.input2:invalid {
    border-color: #a9a9a999;
    background-image: url("../../assets/lock.png");
}
</style>
