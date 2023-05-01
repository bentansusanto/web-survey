<template>
  <div class="content">
    <div class="bg-content">
      <NavbarHome />
      <OpeningHome />
    </div>
  </div>
</template>

<script>
import NavbarHome from "../Opening/components/NavbarHome.vue";
import OpeningHome from "../Opening/components/OpeningHome.vue";
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
