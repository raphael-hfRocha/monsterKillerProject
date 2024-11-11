<!-- eslint-disable -->
<template>
  <div id="controle">
    <button>Ataque</button>
    <button>Ataque Especial</button>
    <button>Curar</button>
    <button>Desistir</button>
  </div>
</template>
  
<script src="./index.js"></script>
  
<style scoped>
#controle {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  height: 100px;
  box-shadow: 4px 4px 4px 4px #ccc;
}
button {
  width: 90px;
  height: 50px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
}
button:nth-child(1) {
  background-color: red;
  color: white;
}
button:nth-child(2) {
  background-color: rgba(197, 194, 1, 0.863);
  color: black;
  width: 110px;
}
button:nth-child(3) {
  background-color: rgb(0, 156, 0);
  color: white;
}
</style>