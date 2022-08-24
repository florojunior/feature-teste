<template>
  <div class="book-container">
      <img src="../../assets/book.svg" alt="book">
      <p>Nenhum contato foi criado ainda</p>
      <button @click="addContact()" class="add-contact ">
        <i class="fa-solid fa-plus"></i>
         Criar Contato
      </button>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name:'NoContact',
  data() {
        return {
            openDialog: false,
        };
    },
  methods: {
      ...mapActions('modal', [
        'addContact'
      ]),
  }
}

</script>

<style>
p{
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}
.book-container {
  margin-top: 10rem !important;
  margin: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}
</style>