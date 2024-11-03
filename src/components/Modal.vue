<template>
    <dialog id="my_modal_1" class="modal" open>
      <div class="modal-box">
        <h3 class="text-lg font-bold">{{ title }}</h3>
        <p class="py-4">{{ description }}</p>
        <div class="modal-action">
          <button class="btn" @click="closeModal">Close</button>
        </div>
      </div>
    </dialog>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String,
      exito: Boolean
    },
    methods: {
      closeModal() {
        this.$emit('close');
        if(this.exito){
            window.close();
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos CSS para la modal */
  </style>
  