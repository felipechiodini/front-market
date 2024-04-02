<script setup>
const features = [
  {
    title: "Cardápio Digital",
    description: "A RapidEats oferece soluções para o cardápio digital, melhorando a experiência do cliente e otimizando a mão de obra. Descubra como seu estabelecimento pode beneficiar-se.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Sistema Gerencial",
    description:
      "Sistema Gerencial",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Relatórios",
    description: "Need some JS? Nuxt can automatically hydrate interactive components when they become visible on the page.  ",
    icon: "bx:bxs-data",
  },
  {
    title: "Freemium",
    description: "O sistema de develiry rapideats é grátis até 50 pedidos ao mês, tudo para você começar sem investir muito",
    icon: "bx:bxs-bot",
  }
];
</script>

<template>
  <div class="mt-16 md:mt-0" id="dddddddddddddddddd">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Tudo que você precisa para crescer seu delivery
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Potencialize seu negócio: As ferramentas essenciais para o crescimento do seu delivery
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
