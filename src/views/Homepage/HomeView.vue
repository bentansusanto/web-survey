<template>
  <div class="home">
    <div class="grid-component">
      <SideNav />
      <ContentView />
    </div>
    <div class="bg-list"></div>
  </div>
</template>

<script>
import ContentView from "../Homepage/ContentView.vue";
import SideNav from "./SideNav.vue";
export default {
  name: "HomeView",
  components: {
    SideNav,
    ContentView,
  },
};
</script>

<style lang="scss" scoped>
.grid-component {
  display: flex;
  flex-direction: row;
}

.bg-list {
  background-color: #d1d1d1;
  width: 100vw;
  height: 5vh;
}
</style>
