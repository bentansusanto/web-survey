<template>
  <div class="content">
    <div class="bg-content">
      <NavbarHome />
      <ClosingHome />
    </div>
  </div>
</template>

<script>
import NavbarHome from "../Closing/components/NavbarHome.vue";
import ClosingHome from "../Closing/components/ClosingHome.vue";
export default {
  components: {
    NavbarHome,
    ClosingHome,
  },
};
</script>

<style lang="scss" scoped>
.bg-content {
  width: 100%;
}
</style>
