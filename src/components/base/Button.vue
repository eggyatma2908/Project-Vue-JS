<template>
    <button class="button" type="submit" @click.prevent="$emit('click')">{{ Button }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    Button: String
  }
}
</script>

<style scoped>
.button {
    margin-top: 90px;

    width: 80%;
    height: 57px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    text-align: center;

    border: none;
    border-radius: 12px;

    color: #FFFFFF;
    background: #DADADA;
}

.button:hover {
    background: #6379F4;
}

.button:focus {
    outline: none;
}
</style>
