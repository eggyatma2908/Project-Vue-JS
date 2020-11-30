<template>
<div class="col-lg-9">
    <div class="box d-flex justify-content-between">
        <div class="box1 mt-2 ml-3">
            <div class="balance"><p>Balance</p></div>
            <div class="saldo"><p>Rp120.000</p></div>
            <div class="phone1"><p>+62 813-9387-7946</p></div>
        </div>
        <div class="box2 mt-3 mr-4">
            <div class="transfer">
                <div class="transfer1">
                    <img src="../../assets/arrow-up1.png" alt="image3">
                    <p>Transfer</p>
                </div>
            </div>
            <div class="topup">
                <div class="topup1">
                    <img src="../../assets/plus1.png" alt="image4">
                    <p>Top Up</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-7 mb-3">
                <div class="box-graph">
                    <div class="income-expense d-flex justify-content-between">
                        <div class="income mt-3">
                            <img src="../../assets/arrow-down.png" alt="image5">
                            <p class="income-text mt-3">Income</p>
                            <p class="income-money">Rp.2.120.000</p>
                        </div>
                        <div class="expense mt-3">
                            <img src="../../assets/arrow-up red.png" alt="image6">
                            <p class="expense-text mt-3">Expense</p>
                            <p class="expense-money">Rp1.560.000</p>
                        </div>
                    </div>

                    <div class="box-in-graph">
                        <div class="chart d-flex justify-content-between mt-5 ml-4 mr-4">
                            <div class="chart1"></div>
                            <div class="chart2"></div>
                            <div class="chart3"></div>
                            <div class="relative">
                                <div class="chart4">
                                    <img src="../../assets/circle.png" alt="image7">
                                </div>
                                <p>+Rp65.000</p>
                            </div>
                            <div class="chart5"></div>
                            <div class="chart6"></div>
                            <div class="chart7"></div>
                        </div>
                        <div class="day d-flex justify-content-between mt-4 ml-4 mr-4">
                            <p>Sat</p>
                            <p>Sun</p>
                            <p>Mon</p>
                            <p>Tue</p>
                            <p>Wed</p>
                            <p>Thu</p>
                            <p>Fri</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="encapsule">
                    <div class="d-flex justify-content-between pt-4 ml-3 mr-3">
                        <p class="history">Transaction History</p>
                        <a href="#">See all</a>
                    </div>

                    <div class="box3">
                        <div class="d-flex justify-content-between flex-box1">
                            <img class="profile1" src="../../assets/1.png" alt="image8">
                            <div class="box-profile1">
                                <p class="name1">Samuel Sushi</p>
                                <p class="status">Transfer</p>
                            </div>
                            <p class="transfer2">+Rp50.000</p>
                        </div>
                        <div class="d-flex justify-content-between flex-box2">
                            <img class="profile2" src="../../assets/spotify.png" alt="image9">
                            <div class="box-profile2">
                                <p class="name2">Netflix</p>
                                <p class="status1">Subcription</p>
                            </div>
                            <p class="subcription">-Rp149.000</p>
                        </div>
                        <div class="d-flex justify-content-between flex-box3">
                            <img class="profile3" src="../../assets/2.png" alt="image10">
                            <div class="box-profile3">
                                <p class="name3">Christian Mar...</p>
                                <p class="status2">Transfer</p>
                            </div>
                            <p class="transfer3">+Rp150.000</p>
                        </div>
                        <div class="d-flex justify-content-between flex-box4">
                            <img class="profile4" src="../../assets/spotify1.png" alt="image11">
                            <div class="box-profile4">
                                <p class="name4">Adobe Inc.</p>
                                <p class="status3">Subcription</p>
                            </div>
                            <p class="subcription1">-Rp249.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
.box {
    background: #6379F4;
    border-radius: 20px;

    height: max-content;
}

.balance {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;

    color: #E0E0E0;
}

.saldo {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;

    color: #FFFFFF;
}

.phone1 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    color: #DFDCDC;
}

.box2 {
    height: max-content;
}

.transfer {
    margin-bottom: 10px;

    background: rgba(255, 255, 255, 0.2);

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
}

.transfer1 {
    display: flex;
    flex-direction: row;

    margin: 15px 30px 0px 30px;
}

.transfer img {
    width: 28px;
    height: 28px;

    margin-right: 15px;
}

.transfer p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #FFFFFF;
}

.topup {
    background: rgba(255, 255, 255, 0.2);

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
}

.topup1 {
    display: flex;
    flex-direction: row;

    margin: 15px 30px 0px 30px;
}

.topup img {
    width: 28px;
    height: 28px;

    margin-right: 15px;
}

.topup p {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #FFFFFF;
}

.col-md-7 {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
}

.income-text {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #6A6A6A;
}

.income-money {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.expense-text {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #6A6A6A;
}

.expense-money {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.chart {
    display: flex;
    flex-direction: row-reverse;

    transform: rotate(180deg);
}

.chart p {
    transform: rotate(180deg);
}

.chart1 {
    display: flex;
    flex-direction: column;

    width: 14px;
    height: 223px;

    background: #6379F4;
    border-radius: 15px;
}

.chart2 {
    width: 14px;
    height: 97px;

    background: #6379F4;
    border-radius: 15px;
}

.chart3 {
    width: 14px;
    height: 149px;

    background: #9DA6B5;
    border-radius: 15px;
}

.relative {
    position: relative;
}

.relative p {
    position: absolute;
    top: 220px;
    right: -30px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;

    text-align: right;

    color: #1EC15F;
}

.chart4 {
    width: 14px;
    height: 183px;

    background: #9DA6B5;
    border-radius: 15px;
}

.chart4 img {
    position: absolute;
    top: 160px;
    right: -23px;

    width: 60px;
    height: 60px;
}

.chart5 {
    width: 14px;
    height: 138px;

    background: #9DA6B5;
    border-radius: 15px;
}

.chart6 {
    width: 14px;
    height: 197px;

    background: #6379F4;
    border-radius: 15px;
}

.chart7 {
    width: 14px;
    height: 155px;

    background: #9DA6B5;
    border-radius: 15px;
}

.col-md-5 {
    padding-right: 0px
}

.encapsule {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
}

.history {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

.flex-box1 {
    margin: 30px 20px 0px 20px;
}

.profile1 {
    width: 56px;
    height: 56px;
}

.name1 {
    margin: 10px 0px 0px 0px;

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
    width: max-content;
    height: max-content;

    margin-top: 1rem;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #1EC15F;
}

.flex-box2 {
    margin: 40px 20px 0px 20px;
}

.profile2 {
    width: 56px;
    height: 56px;
}

.name2 {
    margin: 10px 0px 0px 0px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #3A3D42;
}

.status1 {
    margin: 0;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    color: rgba(58, 61, 66, 0.9);
}

.subcription {
    width: max-content;
    height: max-content;

    margin-top: 1rem;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #FF5B37;
}

.flex-box3 {
    margin: 40px 20px 0px 20px;
}

.profile3 {
    width: 56px;
    height: 56px;
}

.name3 {
    margin: 10px 0px 0px 0px;

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
    width: max-content;
    height: max-content;

    margin-top: 1rem;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #1EC15F;
}

.flex-box4 {
    margin: 40px 20px 0px 20px;
    padding-bottom: 30px;
}

.profile4 {
    width: 56px;
    height: 56px;
}

.name4 {
    margin: 10px 0px 0px 0px;

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
    width: max-content;
    height: max-content;

    margin-top: 1rem;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    text-align: right;

    color: #FF5B37;
}

/* Mobile L */
@media (max-width: 425px) {
.balance {
        font-size: 15px;
    }
    .saldo {
        font-size: 30px;
    }
    .phone1 {
        font-size: 11px;
    }
}

/* Mobile M */
@media (max-width: 375px) {
    .transfer1 {
        margin: 15px 10px 0px 10px;
    }
    .topup1 {
        margin: 15px 10px 0px 10px;
    }
}

/* Mobile S */
@media (max-width: 320px) {
    .saldo {
        font-size: 20px;
    }
    .transfer1 {
        margin: 15px 5px 0px 5px;
    }
    .topup1 {
        margin: 15px 5px 0px 5px;
    }
}
</style>
