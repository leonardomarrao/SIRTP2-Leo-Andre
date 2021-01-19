<!--<template>
  <div class="card">
    <img src={{ imagem }} />
    <div class="container">
      <h5>{{ nome }}</h5>
      <h5>{{ preco }}</h5>
      <a></a>
    </div>
  </div>
</template>
-->
<script>
Vue.component('blog-post', { props: ['imagem', 'nome', 'preco'], template:
'<div class="card">
    <img src={{ imagem }} />
    <div class="container">
      <h5>{{ nome }}</h5>
      <h5>{{ preco }}</h5>
      <a></a>
    </div>
  </div>' })
</script>