<template>
  <div class="mb-1">
    <div class="question4">
      <div class="form-question" style="width: 40vw">
        <div class="mx-4 mt-3">
          <p class="text-dark" style="font-size: 14px">
            Lorem ipsum dolor sit amet. Et inventore quia sit omnis nisi id
            quasi itaque ea incidunt quod hic amet itaque?
          </p>
          <div style="margin-top: -10px">
            <p class="text-danger font-weight-bold" style="font-size: 12px">
              Keterangan
            </p>
            <p class="text-danger" style="font-size: 12px; margin-top: -10px">
              Lorem ipsum dolor sit amet. Et inventore quia sit omnis nisi id
              quasi itaque ea incidunt quod hic amet itaque?
            </p>
          </div>
        </div>
        <div style="background-color: gray; width: 100%; height: 1px" />
        <!-- Form ticket -->
        <div class="mx-4 my-1">
          <div style="display: flex; align-items: center">
            <div
              style="
                background-color: red;
                border-radius: 100%;
                padding: 3px 11px;
                color: white;
                font-size: 14px;
                font-weight: 600;
              "
            >
              1
            </div>
            <p class="text-danger mt-3 ml-3">Titik Pemberhentian 1</p>
          </div>
          <!-- Form -->
          <form class="ml-5">
            <!-- Alamat pemberhentian -->
            <div
              class="mb-3"
              style="
                display: flex;
                align-items: center;
                background-color: rgb(238, 238, 238);
                border-radius: 5px;
                padding: 9px;
              "
            >
              <input
                type="text"
                placeholder="Alamat pemberhentian 1"
                style="
                  font-size: 13px;
                  border: none;
                  outline: none;
                  margin-left: 10px;
                  background: transparent;
                  width: 100%;
                "
              />
            </div>
            <!-- Transportasi dan biaya -->
            <div class="mb-3 row" style="margin-top: -10px">
              <div class="col">
                <label class="text-dark" style="font-size: 10.5px"
                  >Moda transportasi yang digunakan</label
                >
                <div
                  style="
                    display: flex;
                    align-items: center;
                    border: 1px solid #e9e9e9;
                    background-color: rgb(238, 238, 238);
                    border-radius: 5px;
                    padding: 9px;
                  "
                >
                  <img
                    src="../../../assets/arrow-down.svg"
                    alt=""
                    style="width: 12px"
                  />
                  <input
                    type="text"
                    placeholder="Moda transportasi"
                    style="
                      font-size: 13px;
                      border: none;
                      outline: none;
                      margin-left: 5px;
                      background: transparent;
                    "
                  />
                </div>
              </div>
              <div class="col">
                <label class="text-dark" style="font-size: 11px"
                  >Biaya yang dikeluarkan</label
                >
                <div
                  style="
                    display: flex;
                    align-items: center;
                    background-color: rgb(238, 238, 238);
                    border-radius: 5px;
                    padding: 9px;
                  "
                >
                  <div
                    class="text-dark font-weight-bold"
                    style="font-size: 13px"
                  >
                    Rp
                  </div>
                  <input
                    type="text"
                    placeholder="Moda transportasi"
                    style="
                      font-size: 13px;
                      border: none;
                      outline: none;
                      margin-left: 10px;
                      background: transparent;
                    "
                  />
                </div>
              </div>
            </div>
            <!-- Time -->
            <div class="mb-3">
              <p class="text-dark" style="font-size: 12px">
                Durasi perjalanan yang harus ditempuh
              </p>
              <div class="row">
                <div class="col">
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      border: 1px solid #e9e9e9;
                      background-color: rgb(238, 238, 238);
                      border-radius: 5px;
                      padding: 9px;
                    "
                  >
                    <img
                      src="../../../assets/arrow-down.svg"
                      alt=""
                      style="width: 12px"
                    />
                    <input
                      type="text"
                      placeholder="Moda transportasi"
                      style="
                        font-size: 13px;
                        border: none;
                        outline: none;
                        margin-left: 5px;
                        background: transparent;
                      "
                    />
                  </div>
                </div>
                <div class="col">
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      border: 1px solid #e9e9e9;
                      background-color: rgb(238, 238, 238);
                      border-radius: 5px;
                      padding: 9px;
                    "
                  >
                    <img
                      src="../../../assets/arrow-down.svg"
                      alt=""
                      style="width: 12px"
                    />
                    <input
                      type="text"
                      placeholder="Moda transportasi"
                      style="
                        font-size: 13px;
                        border: none;
                        outline: none;
                        margin-left: 5px;
                        background: transparent;
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mb-3"
              style="
                display: flex;
                align-items: center;
                background: rgba(215, 32, 41, 0.07);
                border: 1px dashed #d72029;
                border-radius: 5px;
              "
            >
              <p class="text-danger" style="font-size: 13px; margin: 9px auto">
                + Tambah titik pemberhentian
              </p>
            </div>
          </form>
        </div>
      </div>
      <div style="background-color: gray; width: 1px; height: 58vh"></div>
      <div class="hasil mx-4 mt-3">
        <p class="text-dark font-weight-bold">Resume Perjalanan</p>
        <div>
          <div style="display: flex; align-items: center">
            <div
              style="
                background-color: #d72029;
                border-radius: 100%;
                padding: 3px 9px;
                color: white;
                font-size: 14px;
                font-weight: 600;
              "
            >
              0
            </div>
            <p class="text-danger mt-3 ml-3" style="font-size: 13px">
              Titik Keberangkatan
            </p>
          </div>
          <div style="display: flex; align-items: center">
            <div
              style="
                border: 1px dashed #d72029;
                width: 2px;
                height: 40px;
                margin-left: 12px;
              "
            />
            <div
              style="
                background-color: rgba(215, 32, 41, 0.07);
                width: 100%;
                margin-left: 30px;
              "
            >
              <div style="margin: 5px 15px">
                <p
                  class="text-dark font-weight-bold"
                  style="font-size: 12px; font-style: italic"
                >
                  Kereta Api Komuter
                </p>
                <p
                  class="text-dark"
                  style="font-size: 10px; font-style: italic; margin-top: -10px"
                >
                  Rp 5000,00
                </p>
                <p
                  class="text-dark"
                  style="font-size: 10px; font-style: italic; margin-top: -10px"
                >
                  30 menit
                </p>
              </div>
            </div>
          </div>
          <div>
            <div style="display: flex; align-items: center">
              <div
                style="
                  background-color: #d72029;
                  border-radius: 100%;
                  padding: 3px 10px;
                  color: white;
                  font-size: 14px;
                  font-weight: 600;
                "
              >
                1
              </div>
              <p class="text-danger mt-3 ml-3" style="font-size: 13px">
                Titik Pemberhentian
              </p>
            </div>
            <p
              class="text-dark"
              style="font-size: 12px; margin-left: 45px; margin-top: -10px"
            >
              Tirta Dahlia 9, Ngingas, Waru, Sidoarjo
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color: gray; width: 100%; height: 1px"></div>
  </div>
</template>

<script>
export default {
  name: "Question4View",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.question4 {
  display: flex;
}
</style>
