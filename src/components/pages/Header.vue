<template>
<div>
  <div class="header-all">
    <div style="padding:10px">
      <img src="../../assets/ubook.svg" alt="ubook">
    </div>
    <div style="padding: 10px">
      <button class="add-contact ">
        <i class="fa-solid fa-plus"></i>
         Criar Contato
        </button>
    </div>
    <div class="search-input">
      <input placeholder="Buscar..." class="input-text" type="text"  > 
      <i class="fas fa-search"></i>
    </div>
  </div>
</div>
</template>

<script>

export default {
    name: "header",
    data() {
        return {
            openDialog: false
        }
    },
    methods: {
        addModal() {
            return this.showModal = true;
        },
         closeModal () {
        this.openDialog = false;
      },
    },
}
</script>

<style>
.search-input {
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