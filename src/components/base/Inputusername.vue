<template>
    <input class="input1" placeholder="Enter your username" type="text" v-model="newValue" required/>
</template>

<script>
export default {
  name: 'Inputusername',
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
.input1{
    margin-top: 40px;

    outline: 0;
    border-width: 0 0 2px;
    width: 80%;
    height: 50px;
    border-color: rgba(169, 169, 169, 0.6);
    background-image: url("../../assets/person.png");
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 40px;
}

.input1:valid {
    border-color: #6379F4;
    background-image: url("../../assets/person2.png");
}

.input1:invalid {
    border-color: rgba(169, 169, 169, 0.6);
    background-image: url("../../assets/person.png");
}
</style>
