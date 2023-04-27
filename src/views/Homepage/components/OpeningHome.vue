<template>
  <div class="bg-opening">
    <div class="content">
      <h1 class="font-weight-bolder">Lorem Ipsum</h1>
      <p class="mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
        atque quaerat. Facilis quibusdam nihil consequuntur non est distinctio
        facere quas cupiditate amet dicta maxime, nobis, itaque magnam voluptate
        voluptatibus nam.
      </p>
      <p class="font-weight-bold mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus qui
        autem error dignissimos, eligendi doloribus.
      </p>
      <p class="mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, dicta
        voluptatem libero asperiores incidunt ab? Ad laborum fuga vel porro!
      </p>
      <div>
        <p class="font-weight-bold">Disclamer:</p>
        <ul>
          <li class="mt-2 ml-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            numquam!
          </li>
          <li class="mt-2 ml-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            libero?
          </li>
        </ul>
      </div>
      <b-button variant="dark align-items-center d-flex button-survei">
        <img src="../../../assets/Send.svg" alt="" />
        <p class="font-weight-bold ml-2 pt-3 text-capitalize">Mulai survey</p>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-opening {
  background-color: rgb(170, 5, 5);
  height: 90vh;
}

.content {
  padding: 7rem 5rem;
}

.button-survei {
  background-color: #000;
  padding: 0 15px;
}

.button-survei:hover {
  background-color: #000;
}
</style>
