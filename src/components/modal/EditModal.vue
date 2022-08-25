<template>
<div v-if="dialogEdit">
  <transition  name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        
        <div class="modal-container">
          <div class="modal-header">
            <h3>
              Editar Contato
            </h3>
          </div>
          
          <div class="modal-body">
            <Input
              v-model="obj.name"
              label="Nome"
            />
            <Input
              v-model="obj.email"
              label="Email"
            />
            <Input
              id="text-input"
              v-model="obj.cellphone"
              label="Telefone"
            />
          </div>
          <div class="modal-actions">
            <ButtomText :label="'Cancelar'" @closeModal="closeEdit()" :actionName="'closeModal'"/>
            <ButtomRounded :label="'Salvar'"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>

import Input from '../forms/Input.vue'
import ButtomRounded from '../forms/ButtonRounded.vue'
import ButtomText from '../forms/ButtonText.vue'
import { mapActions } from 'vuex'

export default {
  components:{
    Input,
    ButtomRounded,
    ButtomText,
  },
  props:{
    dialogEdit: Boolean,
    id: Number
  },
  data:()=>({
    obj:{
      name: '',
      email: '',
      cellphone: '',
    } 
  }),
  async mounted() {
    this.unsubscribe = this.$store.subscribeAction((action) => {
      if (action.type === 'modal/editContact') {
        this.visible = true;
      }
    });
  },
  methods:{
    ...mapActions("contact", ["getContactById"]),
    closeEdit(){
      this.$emit('closeEdit')
    }
  },
  watch:{
    async dialogEdit(){
       this.obj =  await this.getContactById(this.id);
    }
  },
  beforeDestroy() {
    this.unsubscribe();
  },
}
</script>

<style scoped>
 #text-input {
    width: 8rem !important;
  }
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-divider{
    width: 99.5%;
    border: solid 1px #c0c3d2;
    margin: 0px;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 27rem;
    height: 21.375rem;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .modal-header {
    height: 2.969rem;
    width: 100%;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    display: flex;
    border-bottom: solid 1px #c0c3d2;;
  }

  .modal-header h3 {
    width: 8.25rem;
    height: 1.188rem;
    margin-left: 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--dark);
    align-items: center;
    display: flex;
  }

  .modal-body {
  }

  .modal-actions{
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .modal-default-button {
    float: right;
  }
</style>