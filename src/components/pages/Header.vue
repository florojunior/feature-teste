<template>
<div>
  <div class="header-all">
    <div style="padding:10px">
      <img src="../../assets/ubook.svg" alt="ubook">
    </div>
    <div style="padding: 10px">
      <button @click="addContact()" class="add-contact ">
        <i class="fa-solid fa-plus"></i>
         Criar Contato
      </button>
    </div>
     <input class="search-input" id="busca" type="text" placeholder="Buscar..." />
    <span id="box_icone_busca">
        <i id="icone_busca" class="fa fa-search" onclick="sua_funcao_aqui()"></i>
    </span>
    <!--<div class="search-input">
      <input placeholder="Buscar..." class="input-text" type="text"  > 
      <i class="fas fa-search"></i>
    </div>-->
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "header",
    data() {
        return {
            openDialog: false,
        };
    },
    methods: {
      ...mapActions('modal', [
        'addContact'
      ]),
      closeModal() {
          this.openDialog = false;
      },
    },
}
</script>

<style>
#box_icone_busca{
  width: 30px;
  height: 30px;
  padding: 10px;
  position: relative;
  left: -39px;
  top: 1px;
}
#icone_busca {
  margin-top: 5px;
  color: #9297ac;
  cursor: pointer;
}
.search-input {
  background-color: #e4e7f4;
  margin: 0 0 0 1.5rem;
  padding: 0.438rem 0.5rem 0.375rem;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  width: 70%;
}
.header-all {
  justify-content: space-around;
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
}
.input-text{
  margin-left: 0px !important;
  width: 100%;
  height: 2rem;
  margin: 0 0 0 1.5rem;
  padding: 0.438rem 0.5rem 0.375rem;
  border-radius: 4px;
  background-color: #e4e7f4;
}
.add-contact {
  margin-left: 0px !important;
  margin-right: 0px !important;
  font-weight: 500;
  width: 9rem;
  height: 2rem;
  margin: 0 1.5rem 0 3.75rem;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px var(--black-8), inset 0 0 0 0.5px var(--black-8), 0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
  /* background-color: var(--light-yellowish-green); */
  background: #dbff90;
  color: #fa7268;
  border-style: none;
  cursor: pointer;
}
</style>