<template>
  <div class="bg-opening">
    <div class="content">
      <h1 class="font-weight-bolder">{{ datas.head }}</h1>
      <p class="mt-4">
        {{ datas.content }}
      </p>
      <p class="font-weight-bold mt-4">
        {{ datas.content1 }}
      </p>
      <p class="mt-4">
        {{ datas.content2 }}
      </p>
      <div>
        <p class="font-weight-bold">{{ datas.disclamer }}</p>
        <ul v-for="data in datas.list" :key="data">
          <li class="mt-2 ml-4">{{ data }}</li>
        </ul>
      </div>
      <b-button
        @click="questionPage"
        variant="dark align-items-center d-flex button-survei mt-5"
      >
        <img src="../../../assets/Send.svg" alt="" />
        <p class="font-weight-bold ml-2 pt-3 text-capitalize">Mulai survey</p>
      </b-button>
    </div>
    <!-- <div class="bg-logo">
      <img src="../../../assets/logo-client.svg" alt="logo-client.svg" />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: {
        head: "Lorem ipsum",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,atque quaerat. Facilis quibusdam nihil consequuntur non est distinctio facere quas cupiditate amet dicta maxime, nobis, itaque magnam voluptate voluptatibus nam.",
        content1:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus qui autem error dignissimos, eligendi doloribus.",
        content2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, dicta voluptatem libero asperiores incidunt ab? Ad laborum fuga vel porro!",
        disclamer: "Disclamer:",
        list: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, numquam!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, numquam!",
        ],
      },
    };
  },
  methods: {
    questionPage() {
      this.$router.push("/question");
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-opening {
  background: #d72029;
  mix-blend-mode: multiply;
  height: 86vh;
  // position: relative;
}

.content {
  padding: 7rem 4rem;
}

.button-survei {
  background-color: #000;
  padding: 0 15px;
}

.button-survei:hover {
  background-color: #000;
}
</style>
