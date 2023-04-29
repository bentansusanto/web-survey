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
      <div class="checklist">
        <img src="../../../assets/checklist.svg" alt="checklist.svg" />
        <p>Ya, saya mau</p>
      </div>
      <div class="cross">
        <img src="../../../assets/cross.svg" alt="cross.svg" />
        <p>Saya tidak mau</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question1View",
};
</script>

<style lang="scss" scoped>
.question1 h5 {
  color: #d72029;
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
.checklist {
  background-color: #e9e9e9;
  padding: 20px 40px;
  text-align: center;
}
.cross {
  background-color: #e9e9e9;
  padding: 20px 40px;
  margin-left: 10px;
}
</style>
