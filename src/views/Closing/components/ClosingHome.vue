<template>
  <div class="bg-opening">
    <div class="content">
      <h1 class="font-weight-bolder">
        {{ datas.head[0] }} <span>- {{ datas.head[1] }}</span>
      </h1>
      <p class="mt-4">
        {{ datas.content1 }}
      </p>
      <div>
        <p class="font-weight-bold">{{ datas.disclamer }}</p>
        <ul v-for="data in datas.list" :key="data">
          <li class="mt-2 ml-4">{{ data }}</li>
        </ul>
      </div>
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
        head: ["Terima kasih", "Thank you"],
        content1:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus qui autem error dignissimos, eligendi doloribus.",
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
  padding-top: 16rem;
  padding-left: 4rem;
}

.content span {
  font-weight: 300;
  font-style: italic;
}

.content p {
  width: 70%;
}

.button-survei {
  background-color: #000;
  padding: 0 15px;
}

.button-survei:hover {
  background-color: #000;
}
</style>
