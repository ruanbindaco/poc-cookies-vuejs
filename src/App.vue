<template>
  <div id="app">
    <h1>Vue cookies</h1>
    <button @click="setCookie">Set Cookie</button>
    <button @click="deleteCookie">Delete Cookie</button>
    <div>Cookies: {{ cookiesSalvos }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookiesSalvos: [],
    };
  },
  methods: {
    setCookie() {
      // it sets the cookie called `username`
      // this.$cookies.set("username", "gowtham");
      this.$cookies.set("cookieKeyName", "value", null, null, "dominio.com");
      this.$cookies.set("token", "value");
      this.cookiesSalvos = this.$cookies.keys();
    },
    deleteCookie() {
      this.$cookies.keys().forEach((cookie) => this.$cookies.remove(cookie));
      this.cookiesSalvos = this.$cookies.keys();
    },
  },
};
</script>