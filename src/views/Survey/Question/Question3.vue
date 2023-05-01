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
    <p class="text-dark px-4" style="font-size: 14px">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris?
    </p>
    <div class="border-list" />
    <!-- value1 -->
    <div class="persen">
      <div class="description">
        <p>Biaya tol</p>
      </div>
      <div class="progres">
        <b-progress
          :value="progress"
          :max="max"
          height="8px"
          variant="danger"
        ></b-progress>
        <div class="slider-container">
          <div
            class="slider-circle"
            :style="{ left: circleLeft + '%' }"
            @mousedown="startDrag"
            @touchstart="startDrag"
          ></div>
        </div>
      </div>
      <div class="price">
        <p>Rp{{ Value }}</p>
      </div>
    </div>
    <!-- value2 -->
    <div class="persen">
      <div class="description">
        <p>Bensin</p>
      </div>
      <div class="progres">
        <b-progress
          :value="progress"
          :max="max"
          height="8px"
          variant="danger"
        ></b-progress>
        <div class="slider-container">
          <div
            class="slider-circle"
            :style="{ left: circleLeft + '%' }"
            @mousedown="startDrag"
            @touchstart="startDrag"
          ></div>
        </div>
      </div>
      <div class="price">
        <p>Rp{{ Value1 }}</p>
      </div>
    </div>
    <!-- value3 -->
    <div class="persen">
      <div class="description">
        <p>Parkir</p>
      </div>
      <div class="progres">
        <b-progress
          :value="progress"
          :max="max"
          height="8px"
          variant="danger"
        ></b-progress>
        <div class="slider-container">
          <div
            class="slider-circle"
            :style="{ left: circleLeft + '%' }"
            @mousedown="startDrag"
            @touchstart="startDrag"
          ></div>
        </div>
      </div>
      <div class="price">
        <p>Rp{{ Value2 }}</p>
      </div>
    </div>
    <!-- Hasil -->
    <div class="mx-4 my-2">
      <p class="text-dark" style="font-size: 14px">
        Ut enim ad minim veniam, quis nostrud exer:
      </p>
      <div class="total">
        <p>Rp{{ Total }}</p>
      </div>
      <p class="text-dark" style="font-size: 14px; font-weight: bold">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat :
      </p>
      <div class="subtotal">
        <p>Rp{{ Total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question3View",
  data() {
    return {
      transportation: ["Mobil", "Angkutan umum"],
      selectIndex: 0,
      minValue: 0,
      maxValue: 100000,
      barWidth: 2,
      circleLeft: 2,
      dragging: false,
      value: 0,
      value1: 0,
      value2: 0,
      total: 0,
    };
  },
  methods: {
    startDrag(event) {
      this.dragging = true;
      this.moveCircle(event);
      window.addEventListener("mousemove", this.moveCircle);
      window.addEventListener("touchmove", this.moveCircle);
      window.addEventListener("mouseup", this.stopDrag);
      window.addEventListener("touchend", this.stopDrag);
    },
    moveCircle(event) {
      if (!this.dragging) {
        return;
      }
      const sliderWidth =
        this.$el.querySelector(".slider-container").clientWidth;
      const mouseX = event.clientX || event.touches[0].clientX;
      const newPosition = Math.max(
        0,
        Math.min(
          sliderWidth,
          mouseX -
            this.$el.querySelector(".slider-container").getBoundingClientRect()
              .left
        )
      );
      const positionPercentage = newPosition / sliderWidth;
      this.circleLeft = positionPercentage * 100 - 4;
      const range = this.maxValue - this.minValue;
      this.value = Math.round(this.minValue + range * positionPercentage);
      this.value1 = Math.round(this.minValue + range * positionPercentage);
      this.value2 = Math.round(this.minValue + range * positionPercentage);
      this.total = this.value + this.value1 + this.value2;
    },
    stopDrag() {
      this.dragging = false;
      window.removeEventListener("mousemove", this.moveCircle);
      window.removeEventListener("touchmove", this.moveCircle);
      window.removeEventListener("mouseup", this.stopDrag);
      window.removeEventListener("touchend", this.stopDrag);
    },
    updateValueFromProgress() {
      const range = this.maxValue - this.minValue;
      const progressPercentage = this.progress / 100;
      this.value = Math.round(this.minValue + range * progressPercentage);
      this.circleLeft = progressPercentage * 100;
    },
    chooseTransport(index) {
      this.selectIndex = index;
    },
  },
  computed: {
    progress() {
      const range = this.maxValue - this.minValue;
      const valuePercentage = (this.value - this.minValue) / range;
      return valuePercentage * 100;
    },
    Total() {
      return this.total.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
    Value() {
      return this.value.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
    Value1() {
      return this.value1.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
    Value2() {
      return this.value2.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
  },
  mounted() {
    this.updateValueFromProgress();
  },
  watch: {
    progress() {
      this.updateValueFromProgress();
    },
  },
};
</script>

<style lang="scss" scoped>
.transportation {
  display: flex;
  margin: 8px 30px;
  justify-content: space-between;
  background-color: #d9d9d933;
  border-radius: 50px;
}

.border-list {
  background-color: #a4a4a4;
  width: 100%;
  height: 1px;
}

.list-transport {
  border-radius: 50px;
  width: 50%;
  margin: 10px;
}
.list-transport p {
  margin: 8px 20px;
  text-align: center;
  font-size: 14px;
}

.persen {
  display: flex;
  flex-direction: row;
  margin: 8px 15px;
  align-items: center;
  justify-content: center;
}

.description p {
  margin: 5px 10px;
  color: black;
  font-size: 14px;
}

.progres {
  width: 40%;
  margin: auto 25px;
}
.slider-container {
  position: relative;
  height: 8px;
  width: 100%;
}

.slider-circle {
  position: absolute;
  top: -40%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
  z-index: 2;
}

.price {
  background-color: rgb(238, 238, 238);
  padding: 5px;
  border-radius: 10px;
}
.price p {
  color: black;
  margin: 5px 10px;
  font-size: 14px;
}

.total {
  background-color: #d9d9d933;
  // padding: 10px auto;
}
.subtotal {
  background-color: #d72029;
  // padding: 10px auto;
}
.total p {
  text-align: center;
  color: red;
  font-weight: bold;
  padding: 10px;
  font-size: 16px;
}
.subtotal p {
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 10px;
  font-size: 16px;
}
</style>
