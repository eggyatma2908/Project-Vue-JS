<template>
    <div class="col-lg-3 mb-3">
        <div class="box-sidebar1"><router-link class="sidebar1" :to="{path: '/'}">Dashboard</router-link></div>
        <div class="box-sidebar2"><router-link class="sidebar2" :to="{path: '/main/transfer'}">Transfer</router-link></div>
        <div class="box-sidebar3"><router-link class="sidebar3" :to="{path: '/main/topup'}">Top up</router-link></div>
        <div class="box-sidebar4"><router-link class="sidebar4" :to="{path: '/main/profile'}">Profile</router-link></div>
        <div class="box-sidebar5"><router-link class="sidebar5" :to="{path: '/auth/login'}" @click.native="handleLogout">Logout</router-link></div>
    </div>
</template>

<script>
import Logout from '../../mixins/Logout'

export default {
  mixins: [Logout],
  name: 'Navbar'
}
</script>

<style scoped>
.col-lg-3 {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
}

.box-sidebar1 {
    margin-top: 40px;
}

a.sidebar1 {
    width: 100%;

    margin-left: -25px;
    padding-left: 100px;

    text-decoration: none;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;

    background-image: url(../../assets/grid.png);
    background-repeat: no-repeat;
    background-position: left ;
    background-position-x: 50px, 10px;
    color: rgba(58, 61, 66, 0.8);
}

.sidebar1:focus {
    color: #6379F4;
    background-image: url(../../assets/grid1.png), url(../../assets/span.png);
    font-weight: bold;
}

.box-sidebar2 {
    margin-top: 40px;
}

a.sidebar2 {
    width: 100%;

    margin-left: -25px;
    padding-left: 100px;

    text-decoration: none;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;

    background-image: url(../../assets/arrow-up.png);
    background-repeat: no-repeat;
    background-position: left ;
    background-position-x: 50px, 10px;
    color: rgba(58, 61, 66, 0.8);
}

.sidebar2:focus {
    color: #6379F4;
    background-image: url(../../assets/arrow-up2.png), url(../../assets/span.png);
    font-weight: bold;
}

.box-sidebar3 {
    margin-top: 40px;
}

a.sidebar3 {
    width: 100%;

    margin-left: -25px;
    padding-left: 100px;

    text-decoration: none;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;

    background-image: url(../../assets/plus.png);
    background-repeat: no-repeat;
    background-position: left ;
    background-position-x: 50px, 10px;
    color: rgba(58, 61, 66, 0.8);
}

.sidebar3:focus {
    color: #6379F4;
    background-image: url(../../assets/plus2.png), url(../../assets/span.png);
    font-weight: bold;
}

.box-sidebar4 {
    margin-top: 40px;
}

a.sidebar4 {
    width: 100%;

    margin-left: -25px;
    padding-left: 100px;

    text-decoration: none;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;

    background-image: url(../../assets/user.png);
    background-repeat: no-repeat;
    background-position: left ;
    background-position-x: 50px, 10px;
    color: rgba(58, 61, 66, 0.8);
}

.sidebar4:focus {
    color: #6379F4;
    background-image: url(../../assets/user1.png), url(../../assets/span.png);
    font-weight: bold;
}

.box-sidebar5 {
    margin-top: 280px;
    margin-bottom: 50px;
}

a.sidebar5 {
    width: 100%;

    margin-left: -25px;
    padding-left: 100px;

    text-decoration: none;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;

    background-image: url(../../assets/log-out.png);
    background-repeat: no-repeat;
    background-position: left ;
    background-position-x: 50px, 10px;
    color: rgba(58, 61, 66, 0.8);
}

.sidebar5:focus {
    color: #6379F4;
    background-image: url(../../assets/log-out.png), url(../../assets/span.png);
    font-weight: bold;
}

/* Tablet */
@media (max-width: 768px) {
    .box-sidebar5 {
        margin-top: 40px;
    }
}
</style>
