<template>
  <form action="" id="form" class="needs-validation" novalidate @submit.prevent="submit()">
    <div class="flex gap-2">
      <img
        src="~/assets/img/hero.png"
        alt="imagem de uma pessoa levando um prato na mesa"
        loading="eager"
        width="512"
        height="512"
      />

      <div class="flex flex-col gap-2 w-full">
        <input
          type="text"
          placeholder="Nome Completo"
          required
          v-model="form.name"
          class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          name="name"
        />
  
        <input
          type="text"
          placeholder="Email"
          required
          v-model="form.email"
          class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          name="name"
        />

        <input
          type="tel"
          placeholder="Telefone"
          required
          v-model="form.cellphone"
          class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          name="cellphone"
        />
  
        <input
          type="password"
          placeholder="Senha"
          required
          v-model="form.password"
          class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          name="password"
        />
  
        <LandingButton type="submit">
          Começar
        </LandingButton>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  data: () => {
    return {
      form: {
        name: null,
        email: null,
        cellphone: null,
        password: null
      }
    }
  },
  methods: {
    submit() {
      $fetch(this.$config.public.BASE_API_URL + '/panel/user', {
        method: 'POST',
        body: this.form
      })
    }
  }
}

</script>

<style scoped>

</style>