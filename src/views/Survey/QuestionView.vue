<template>
  <div>
    <!-- Navbar Question -->
    <div class="d-flex align-items-end pb-3">
      <img
        src="../../assets/logo-client.svg"
        alt="logo-client.svg"
        class="ml-5"
      />
      <div class="bg-list ml-auto" />
    </div>
    <div class="bg-header">
      <h4 class="font-weight-bolder font-head">Lorem ipsum Survey</h4>
      <p class="font-subhead">Lorem Ipsum Project 2023</p>
    </div>
    <div>
      <div class="bg-question" />
      <div
        class="question"
        :style="{ width: currentPage == 3 ? '60%' : '40%' }"
      >
        <div class="progress">
          <div class="bg-persentase">
            <div
              class="progress-bar"
              :style="{
                width: progressWidth,
              }"
            />
          </div>
          <p class="number-question">
            Pertanyaan {{ currentPage + 1 }} dari
            {{ questionComponents.length }}
          </p>
        </div>
        <div class="content">
          <!-- Content question here -->
          <component :is="questionComponents[currentPage]" />
          <!-- Button -->
          <div class="btn">
            <b-button
              @click="prevPage()"
              v-show="currentPage !== 0"
              squared
              variant="outline-danger"
              style="background-color: none; border-radius: 10px"
              >Kembali</b-button
            >
            <div class="button-next" style="display: flex; margin-left: auto">
              <b-button
                style="margin-left: 20px"
                @click="prevPage()"
                v-show="currentPage == 3"
                variant="danger"
                >Undo</b-button
              >
              <b-button
                @click="nextPage()"
                variant="danger"
                :class="{ 'right-align': currentPage === 0 }"
                >Lanjut</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-question">
      <div class="bg-logo">
        <img
          src="../../assets/logo-client.svg"
          alt="logo-client-svg"
          class="logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Question1 from "./Question/Question1.vue";
import Question2 from "./Question/Question2.vue";
import Question3 from "./Question/Question3.vue";
import Question4 from "./Question/Question4.vue";
import Question5 from "./Question/Question5.vue";

export default {
  components: {
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
  },
  data() {
    return {
      currentPage: 0,
      progressWidth: "150px",
      questionComponents: [
        Question1,
        Question2,
        Question3,
        Question4,
        Question5,
      ],
    };
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.questionComponents.length - 1) {
        this.currentPage++;
        this.updateProgress();
      } else {
        this.$router.push("/closing");
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.updateProgress();
      }
    },
    updateProgress() {
      const percent =
        ((this.currentPage + 1) / this.questionComponents.length) * 100;
      this.progressWidth = `${percent}%`;
      if (this.currentPage === 3) {
        this.progressWidth = "80%";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-list {
  background-color: black;
  width: 200px;
  height: 16px;
}

.bg-header {
  background-color: black;
  text-align: center;
  padding: 1px 0;
}

.font-head {
  font-size: 18px;
  margin-top: 5px;
}
.font-subhead {
  font-size: 14px;
}
.bg-question {
  background: #d72029;
  mix-blend-mode: multiply;
  height: 70vh;
  position: relative;
}
.question {
  background-color: white;
  height: 75vh;
  z-index: 2;
  position: absolute;
  inset: 0;
  top: 10rem;
  border-radius: 10px;
  margin: 10px auto;
}

// .content {
//   padding: 20px 40px;
// }

.btn {
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
}

.right-align {
  margin-left: auto;
}

.progress {
  background: #e9e9e9;
  height: 13%;
  padding: 20px 20px;
  display: block;
}

.bg-persentase {
  background: #cfcfcf;
  width: 80%;
  height: 1.5vh;
  margin: 0 auto;
  border-radius: 50px;
}
.progress-bar {
  height: 10px;
  background-color: #ddd;
  margin-bottom: 20px;
}

.progress-bar:after {
  content: "";
  display: block;
  height: 100%;
  background-color: rgb(196, 2, 2);
  border-radius: 50px;
}

.number-question {
  text-align: center;
  color: black;
  margin-top: 24px;
  font-size: 14px;
}

.footer-question {
  background-color: #d9d9d9;
  width: 100vw;
  height: 11vh;
  padding: 10px 0;
}
.bg-logo {
  background-color: white;
  width: 12rem;
  float: right;
}
</style>
