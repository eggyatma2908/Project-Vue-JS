<template>
    <div class="col-lg-9">
        <div class="encapsule">
            <div class="box-transaction">
                <p class="history">Transaction History</p>
            </div>
            <p class="week">This Week</p>
                <div class="box">
                    <div class="flex-box1">
                        <div class="box1">
                            <img class="profile1" src="../../assets/1.png" alt="image3">
                            <div class="box-profile1">
                                <p class="name1">Samuel Sushi</p>
                                <p class="status">Transfer</p>
                            </div>
                        </div>
                        <p class="transfer2">+Rp50.000</p>
                    </div>
                    <div class="flex-box2">
                        <div class="box2">
                            <img class="profile2" src="../../assets/spotify.png" alt="image4">
                            <div class="box-profile2">
                                <p class="name2">Netflix</p>
                                <p class="status1">Subcription</p>
                            </div>
                        </div>
                        <p class="subcription">-Rp149.000</p>
                    </div>
                    <p class="month mt-5">This Month</p>
                    <div class="flex-box3">
                        <div class="box3">
                            <img class="profile3" src="../../assets/2.png" alt="image5">
                            <div class="box-profile3">
                                <p class="name3">Christian Mar...</p>
                                <p class="status2">Transfer</p>
                            </div>
                        </div>
                        <p class="transfer3">+Rp150.000</p>
                    </div>
                    <div class="flex-box4">
                        <div class="box4">
                            <img class="profile4" src="../../assets/spotify1.png" alt="image6">
                            <div class="box-profile4">
                                <p class="name4">Adobe Inc.</p>
                                <p class="status3">Subcription</p>
                            </div>
                        </div>
                    <p class="subcription1">-Rp249.000</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'History'
}
</script>

<style scoped>
.encapsule {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
}

.box-transaction {
    padding-top: 30px;
}

.history {
    margin: 0px 40px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.week {
    margin: 35px 40px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;

    color: #7A7886;
}

.box {
    margin: 0px 40px;
}

.flex-box1 {
    display: flex;
    justify-content: space-between;

    margin-top: 55px;
}

.box1 {
    display: flex;
    flex-direction: row;
}

.profile1 {
    width: 56px;
    height: 56px;

    margin: 0px 10px 0px 0px;
}

.box-profile1 {
    display: flex;
    flex-direction: column;
}

.name1 {
    margin: 8px 0px 0px 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.status {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.transfer2 {
    margin: 15px 0px 0px 0px;

    width: max-content;
    height: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #1EC15F;
}

.flex-box2 {
    display: flex;
    justify-content: space-between;

    margin-top: 45px;
}

.box2 {
    display: flex;
    flex-direction: row;
}

.profile2 {
    width: 56px;
    height: 56px;

    margin: 0px 10px 0px 0px;
}

.box-profile2 {
    display: flex;
    flex-direction: column;
}

.name2 {
    margin: 8px 0px 0px 0px;

    width: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.status1 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.subcription {
    margin: 15px 0px 0px 0px;

    width: max-content;
    height: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #FF5B37;
}

.month {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;

    color: #7A7886;
}

.flex-box3 {
    display: flex;
    justify-content: space-between;

    margin-top: 55px;
}

.box3 {
    display: flex;
    flex-direction: row;
}

.profile3 {
    width: 56px;
    height: 56px;

    margin: 0px 10px 0px 0px;
}

.box-profile3 {
    display: flex;
    flex-direction: column;
}

.name3 {
    margin: 8px 0px 0px 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.status2 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.transfer3 {
    margin: 15px 0px 0px 0px;

    width: max-content;
    height: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #1EC15F;
}

.flex-box4 {
    display: flex;
    justify-content: space-between;

    margin-top: 45px;
    padding-bottom: 30px;
}

.box4 {
    display: flex;
    flex-direction: row;
}

.profile4 {
    width: max-content;
    height: max-content;

    margin: 0px 10px 0px 0px;
}

.box-profile4 {
    display: flex;
    flex-direction: column;
}

.name4 {
    margin: 8px 0px 0px 0px;

    width: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.status3 {
    margin: 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.subcription1 {
    margin: 15px 0px 0px 0px;

    width: max-content;
    height: max-content;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #FF5B37;
}
</style>
