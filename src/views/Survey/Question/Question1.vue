<template>
  <div class="question1">
    <h5>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </h5>
    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
    <div class="price">
      <p class="font-weight-bold">Lebih mahal Rp 2.000.000</p>
    </div>
    <p class="text-dark py-3">Ut enim ad minim veniam</p>
    <div class="select-data">
      <div
        v-for="(item, index) in chooses"
        :key="index"
        class="check"
        :style="{
          backgroundColor: selectIndex == index ? '#fbcbcd' : '#e9e9e9',
          border: selectIndex == index ? borderChooses : null,
        }"
        @click="chooseData(index)"
      >
        <img :src="item.icon" alt="" />
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question1View",
  data() {
    return {
      chooses: [
        {
          icon: require("../../../assets/checklist.svg"),
          text: "Ya, saya mau",
        },
        {
          icon: require("../../../assets/cross.svg"),
          text: "Saya tidak mau",
        },
      ],
      selectIndex: 0,
      borderChooses: "solid 1px red",
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
.question1 h5 {
  color: #d72029;
  // color: #fbcbcd;

  font-size: 14px;
  font-weight: 600;
}

.question1 p {
  color: black;
  font-size: 14px;
  padding-top: 10px;
}

.price {
  background-color: #e9e9e9;
  padding: 3px 30px;
  border-radius: 10px;
}

.price p {
  align-items: center;
  margin-top: 5px;
}

.select-data {
  display: flex;
  justify-content: space-between;
  margin: 20px 50px;
}
.check {
  padding: 20px 40px;
  text-align: center;
  border-radius: 5px;
}

.check img {
  margin: 0 10px;
}
</style>
