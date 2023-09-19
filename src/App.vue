<template>
  <div id="app">
    <h1>Vue cookies</h1>
    <button @click="setCookie">Set Cookie</button>
  </div>
</template>

<script>
export default {
  methods: {
    setCookie() {
      // it sets the cookie called `username`
      // this.$cookies.set("username", "gowtham");
      this.$cookies.set(
        "use_path_argument",
        "value",
        null,
        null,
        "dominio.com"
      );
      this.$cookies.set("token", "domain.com");
    },
    verifyDomain() {},
  },
  mounted() {
    console.log(this.$cookies.get("token"));
    // this.$cookies.keys().forEach((cookie) => this.$cookies.remove(cookie));
  },
};
</script>