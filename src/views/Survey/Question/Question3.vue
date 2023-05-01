<template>
  <div class="question3">
    <div class="transportation">
      <div
        v-for="(transport, index) in transportation"
        :key="index"
        class="list-transport"
        @click="
          {
            chooseTransport(index);
          }
        "
        :style="{
          backgroundColor: selectIndex == index ? '#D72029' : null,
        }"
      >
        <p
          :style="{
            color: selectIndex == index ? 'white' : 'black',
            fontWeight: selectIndex == index ? 'bold' : null,
          }"
        >
          {{ transport }}
        </p>
      </div>
    </div>
    <p class="text-dark px-4">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris?
    </p>
  </div>
</template>

<script>
export default {
  name: "Question3View",
  data() {
    return {
      transportation: ["Mobil", "Angkutan umum"],
      selectIndex: -1,
    };
  },
  methods: {
    chooseTransport(index) {
      this.selectIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.transportation {
  display: flex;
  margin: 20px 30px;
  justify-content: space-between;
  background-color: #d9d9d933;
  border-radius: 50px;
}

.list-transport {
  // padding: 0 20px;
  border-radius: 50px;
  width: 50%;
  margin: 10px;
}

.list-transport p {
  margin: 10px 20px;
  text-align: center;
}
</style>
