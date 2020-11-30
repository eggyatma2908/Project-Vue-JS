<template>
    <div class="container-fluid">
        <div class="header">
            <p class="logo">Zwallet</p>
            <div class="d-flex justify-content-between flex-box">
                <img class="profile" src="../../assets/profile.png" alt="image1">
                <div class="box-profile">
                    <p class="name">Richard Chandler</p>
                    <p class="phone">+62 8139 3877 7946</p>
                </div>
                <img class="bell" src="../../assets/bell.png" alt="image2">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
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

.logo {
    margin-top: 10px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 180%;
    line-height: 40px;

    color: #6379F4;
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
