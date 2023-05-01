<template>
  <div class="question2">
    <h5>Ut enim ad minim veniam, quis nostrud exercitation.</h5>
    <div class="border-list" />
    <div class="list">
      <div
        v-for="(list, index) in listPrice"
        :key="index"
        @click="chooseData(index)"
        class="listData"
        :style="{
          backgroundColor: selectIndex == index ? '#fbcbcd' : '#ffffff',
          border: selectIndex == index ? borderChoose : null,
        }"
      >
        <p
          :style="{
            color: selectIndex == index ? 'red' : 'black',
            fontWeight: selectIndex == index ? 'bold' : null,
          }"
        >
          {{ list }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question2View",
  data() {
    return {
      listPrice: [
        "Kurang dari Rp3.000.000 perbulan",
        "Rp3.000.001 - Rp7.000.000 perbulan",
        "Rp7.000.001 - Rp10.000.000 perbulan",
        "Rp10.000.001 - Rp15.000.000 perbulan",
        "Lebih dari Rp15.000.000 perbulan",
      ],
      selectIndex: -1,
      borderChoose: "solid 1px red",
      textColor: "red",
    };
  },
  methods: {
    chooseData(index) {
      this.selectIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.question2 h5 {
  // color: black;
  font-size: 14px;
  margin: 15px 20px;
}
.question2 p {
  // color: black;
  font-size: 15px;
  margin: 15px 20px;
}

.border-list {
  background-color: #a4a4a4;
  width: 100%;
  height: 1px;
}

.list {
  margin: 10px 20px;
}

.listData {
  padding: 5px;
  margin-bottom: 15px;
  box-shadow: 0 10px 20px 0 rgba($color: #4e4e4e29, $alpha: 0.1);
  border-radius: 5px;
}
</style>
