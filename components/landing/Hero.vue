<script>

const go = () => {
  document
    .querySelector('#dddddddddddddddddd')
    .scrollIntoView()
}

</script>


<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full"
        src="~/assets/img/hero.png"
        alt="imagem de uma pessoa levando um prato na mesa"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>
    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Sistema de delivery para seu negócio
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Implemente um sistema de delivery para oferecer conveniência 
        aos clientes com pedidos online e entregas em casa. 
        Otimize processos, reduza erros e aumente as vendas.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="/features"
          target="_blank"
          rel="noopener"
          >Conhecer</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://rapideats.com.br/teste-gratis"
          target="_blank"
          >Testar Grátis</LandingLink
        >
      </div>
    </div>
  </main>
</template>
