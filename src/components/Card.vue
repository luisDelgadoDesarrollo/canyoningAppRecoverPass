<template>
  <div class="card bg-gray-900 w-96 shadow-xl">
    <figure>
      <img src="/canyoningIcon.jpg" alt="iconos" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Recuperar contraseña</h2>
      <div class="mb-4">
        <label for="password" class="block text-gray-700"
          >Nueva Contraseña</label
        >
        <input
          type="password"
          id="password"
          v-model="password"
          class="mt-2 p-2 border border-gray-300 rounded-lg w-full"
          placeholder="Ingrese su nueva contraseña"
          required
        />
      </div>
      <div class="mb-4">
        <label for="confirmPassword" class="block text-gray-700"
          >Confirmar Contraseña</label
        >
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          class="mt-2 p-2 border border-gray-300 rounded-lg w-full"
          placeholder="Confirme su nueva contraseña"
          required
        />
      </div>
      <div @click="llamarEndpoint" class="btn">Cambiar contraseña</div>
    </div>
  </div>
  <Modal
    v-show="showModal"
    :title="title"
    :description="description"
    @close="showModal = false"
    :exito="exito"
  />
</template>

<script>
import axios from "axios";
import Modal from "./Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      password: "",
      confirmPassword: "",
      errorMessage: "",
      successMessage: "",
      email: "",
      token: "",
      title: "",
      description: "",
      showModal: false,
      exito: false,
    };
  },
  methods: {
    submitForm() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Las contraseñas no coinciden.";
        this.successMessage = "";
      } else {
        this.successMessage = "Contraseña cambiada con éxito.";
        this.errorMessage = "";
      }
    },

    llamarEndpoint() {
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
      this.email = this.$route.query.email;
      this.token = this.$route.query.token;

      // Realiza la llamada al endpoint utilizando axios
      axios
        .put(
          "https://localhost:8443/updatePassword",
          {
            password: this.password,
          },
          {
            params: {
              email: this.email,
              token: this.token,
            },
          }
        )
        .then((response) => {
          this.title = "Éxito!";
          this.description = "Contraseña cambiada con éxito";
          this.showModal = true;
          this.exito = true;
        })
        .catch((error) => {
          this.title = "Algo fue mal!";
          this.description =
            "Algo ha salido mal con el cambio de contraseña. Si sigue fallando, vuelva a solicitar un nuevo cambio.";
          this.showModal = true;
        });
    },
  },
};
</script>

<style scoped>
/* Aquí puedes agregar estilos adicionales si es necesario */
</style>
