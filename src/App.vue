<!-- eslint-disabled -->
<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <Controle />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Controle from "./components/Controle/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "App",
  components: {
    Header,
    Controle,
    Footer
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  display: flex;
  justify-content: center;
}
main {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
