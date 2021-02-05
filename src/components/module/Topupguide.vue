<template>
    <div class="col-lg-9">
        <div class="encapsule pt-3 pb-3">
            <div class="box pt-3 ml-4 mr-4">
                <p class="title">How To Top Up</p>
            </div>
            <div class="box1 mt-5">
                <ol>
                    <li class="one"><h1>1</h1><p>Go to the nearest ATM or you can use E-Banking.</p> </li>
                    <li class="two"><h1>2</h1><p>Type your security number on the ATM or E-Banking.</p></li>
                    <li class="three"><h1>3</h1><p> Select “Transfer” in the menu</p></li>
                    <li class="four"><h1>4</h1><p>Type the virtual account number that we provide you at the top.</p></li>
                    <li class="five"><h1>5</h1><p>Type the amount of the money you want to top up.</p></li>
                    <li class="six"><h1>6</h1><p>Read the summary details</p></li>
                    <li class="seven"><h1>7</h1><p>Press transfer / top up</p></li>
                    <li class="eight"><h1>8</h1><p>You can see your money in Zwallet within 3 hours.</p></li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Topupguide'
}
</script>

<style scoped>
.encapsule {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
}

.title {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #3A3D42;
}

ol {
    padding-left: 20px;
    padding-right: 20px;
}

ol li {
    margin: 10px 0;
    height: 55px;

    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

li p {
    margin: 0px 0px 0px 20px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 100%;
    line-height: 27px;

    display: flex;
    align-items: center;

    color: #7A7886;
}

h1 {
    margin: 0px 0px 0px 20px;

    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #6379F4;
}

@media (max-width: 320px) {
    li p {
        font-size: 80%;
    }
}
</style>
