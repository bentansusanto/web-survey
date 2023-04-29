<template>
  <div class="content">
    <div class="bg-content">
      <NavbarHome />
      <OpeningHome />
    </div>
  </div>
</template>

<script>
import NavbarHome from "../Homepage/components/NavbarHome.vue";
import OpeningHome from "../Homepage/components/OpeningHome.vue";
export default {
  components: {
    NavbarHome,
    OpeningHome,
  },
};
</script>

<style lang="scss" scoped>
.bg-content {
  width: 100%;
}
</style>
