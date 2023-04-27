<template>
  <div class="home">
    <div class="grid-component">
      <SideNav />
      <ContentView />
    </div>
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
</style>
