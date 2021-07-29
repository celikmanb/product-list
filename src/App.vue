<template>
  <div id="app">
    <div id="nav" style="display: inline-flex; float: right;">
      <b-button class="langButton" v-for="lang in languages" :key="lang.info.code" @click="changeLang(lang.info.code)" > {{ lang.info.name }}</b-button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'
export default {
  data() {
    return {
      languages: Object.values(i18n.messages)
    }
  },
  methods:{
    changeLang: (lang) => {
      localStorage.setItem( "lang", lang )
      location.reload();
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.langButton { 
  margin-left: 3%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
