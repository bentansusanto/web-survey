<template>
  <div class="question5">
    <p class="text-dark px-4 py-2">
      Ut enim ad minim veniam laboris nisi ut aliquip ex ea commodo consequat?
    </p>
    <div class="package">
      <div
        class="list-package"
        :style="{
          backgroundColor:
            selectIndex == index
              ? 'rgba(215, 32, 41, 0.07)'
              : 'rgba(217, 217, 217, 0.2)',
          border:
            selectIndex == index
              ? 'solid 1px red'
              : '1px solid rgba(0, 0, 0, 0.25)',
        }"
        v-for="(list, index) in transport"
        :key="index"
      >
        <h4 class="text-danger">{{ list.title }}</h4>
        <div class="waiting">
          <p>Waktu tunggu</p>
          <p class="text-danger">{{ list.waiting }}</p>
        </div>
        <div class="waiting">
          <p>Lama Perjalanan</p>
          <p class="text-danger">{{ list.lama_perjalanan }}</p>
        </div>
        <div class="waiting">
          <p>Total Waktu Perjalanan</p>
          <p class="text-danger">{{ list.total_waktu }}</p>
        </div>
        <div class="waiting">
          <p>Resiko Keterlambatan</p>
          <p class="text-danger">{{ list.resiko_terlambat }}</p>
        </div>
        <div class="waiting">
          <p>Biaya Perjalanan</p>
          <p class="text-danger">{{ list.price }}</p>
        </div>
        <div>
          <b-button
            @click="
              {
                selectPackage(index);
              }
            "
            variant="danger"
            style="width: 100%"
            >Pilih</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question5View",
  data() {
    return {
      transport: [
        {
          title: "Travel",
          waiting: "60 menit",
          lama_perjalanan: "120 menit",
          total_waktu: "180 menit",
          resiko_terlambat: "20 menit",
          price: "Rp 250.000",
        },
        {
          title: "Train",
          waiting: "60 menit",
          lama_perjalanan: "50 menit",
          total_waktu: "110 menit",
          resiko_terlambat: "0 menit",
          price: "Rp 400.000",
        },
      ],
      selectIndex: -1,
    };
  },
  methods: {
    selectPackage(index) {
      this.selectIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.package {
  display: flex;
  justify-content: space-between;
  margin: 10px 30px;
}

.list-package {
  background: rgba(217, 217, 217, 0.2);
  padding: 10px 20px;
  width: 46%;
  text-align: center;
  border-radius: 10px;
}

.list-package h4 {
  font-size: 18px;
  font-weight: bold;
}

.waiting {
  padding-top: 2px;
}
.waiting p {
  color: #000;
  font-size: 12px;
}
.waiting p:nth-child(2) {
  margin-top: -12px;
}
</style>
