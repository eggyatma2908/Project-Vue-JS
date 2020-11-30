<template>
<div class="container-fluid footer mt-3 pt-4 pb-2 pr-5 pl-5">
    <div class="d-flex justify-content-between ">
        <p class="copyright">2020 Zwallet. All right reserved</p>
        <div class="flex-box5">
            <p class="phone2 mr-5">+62 5637 8882 9901</p>
            <p class="contact">contact@zwallet.com</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
div.footer {
    position: relative;

    background: #6379F4;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}

.flex-box5 {
    display: flex
}

.copyright {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;

    color: rgba(239, 239, 239, 0.9);
}

.phone2 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    color: #EFEFEF;
}

.contact {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    color: #EFEFEF;
}

/* Mobile L */
@media (max-width: 425px) {
    .flex-box5 {
        flex-direction: column;
    }
    .copyright {
        position: absolute;
        top: 85px;
    }
    .phone2 {
        font-size: 13px;
        margin: 0px;
    }
    .contact {
        margin-bottom: 50px;
    }
}

/* Mobile M */
@media (max-width: 375px) {
    .copyright {
        position: absolute;
        top: 85px;
    }
}

/* Mobile S */
@media (max-width: 320px) {
    .copyright {
        position: absolute;
        top: 85px;
    }
}
</style>
