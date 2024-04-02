<script setup>
defineProps(["plan"]);
</script>

<template>
  <div class="flex gap-x-4">
    <div class="flex flex-col shadow-lg p-5 rounded" v-for="item in 3">
      <h4 class="text-4xl text-center font-medium">Grátis</h4>
      <p class="mt-3 text-4xl font-bold text-black md:text-4xl"></p>
      <h6>Este plano inclui:</h6>
      <p>Até 30 pedidos/mês + R$ 1,39 por pedido excedido</p>
      <LandingButton>
        Criar Cardápio Grátis
      </LandingButton>
      <ul class="grid mt-8 gap-y-4">
        <li>
          <LandingTick className="w-6 h-6" />
          <span>Pedidos via WhatsApp</span>
        </li>
        <li>
          <LandingTick className="w-6 h-6" />
          <span>Limite de 30 pedidos gratuitos (cobrança de R$ 1,39 por pedido excedido)</span>
        </li>
        <li>
          <LandingTick className="w-6 h-6" />
          <span>Cardápio digital personalizável com foto, descrição e opcionais</span>
        </li>
        <li>
          <LandingTick className="w-6 h-6" />
          <span>Link para divulgar no WhatsApp e redes sociais</span>
        </li> 
      </ul>
      <div class="flex mt-8">
        <!-- <LandingLink
          :href="plan.button.link || '#'"
          block
          :styleName="plan.popular ? 'primary' : 'outline'"
        >
          {{ plan.button.text || "Get Started" }}
        </LandingLink> -->
      </div>
    </div>
  </div>
</template>
