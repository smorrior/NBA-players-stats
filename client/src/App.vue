<template>
  <div class="app">
    <div class="header p-26" @click="goHome()">
      <img class="logo mr-16" src="@/assets/logo.png" />
      <h1>NBA players</h1>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="sass">
@import "@/scss/main.scss";
</style>
