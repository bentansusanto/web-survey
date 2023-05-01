<template>
  <div class="home">
    <div class="grid-component">
      <SideNav />
      <ContentView />
    </div>
    <div class="bg-logo">
      <img src="../../assets/logo-client.svg" alt="logo-client.svg" />
    </div>
    <div class="bg-list"></div>
  </div>
</template>

<script>
import ContentView from "../Closing/ClosingView.vue";
import SideNav from "./SideNav.vue";
export default {
  name: "EndView",
  components: {
    SideNav,
    ContentView,
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}
.grid-component {
  display: flex;
  flex-direction: row;
}

.bg-list {
  background-color: #d1d1d1;
  width: 100vw;
  height: 5vh;
}

.bg-logo {
  position: absolute;
  right: 0;
  bottom: 20px;
  background-color: white;
  width: 12rem;
  padding: 3px;
  z-index: 2;
}
</style>
