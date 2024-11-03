<template>
    <div class="min-h-screen flex justify-center items-center">
        <Card />
    </div>
</template>
  
  <script>
    import Card from './components/Card.vue';
    export default {
         name: 'App',
        components: {
            Card
        } 
        };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos para este componente */
  </style>
  