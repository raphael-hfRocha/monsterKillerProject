<!-- eslint-disable -->
<template>
  <div id="header">
    <div>
        <h2>Jogador</h2>
        <div class="barra"></div>
        <span align="center">100%</span>
    </div>
    <div>
        <h2>Monstro</h2>
        <div class="barra"></div>
        <span align="center">100%</span>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
#header {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
    height: 300px;
    box-shadow: 4px 4px 4px 4px #ccc;
}
.barra {
    width: 600px;
    background-color: green;
    height: 30px;
    border: 1px solid black;
    margin-top: 20px;
}
</style>