<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        
        <div class="modal-container">
          <div class="modal-header">
            <h3>
              Criar novo Contato
            </h3>
          </div>
          <div>
           
          </div>
            <div class="modal-body">
              <Input
                v-model="obj.name"
                label="Nome"
                icon="persone"
                hint="Por favor digite seu nome"
                color="#2196F3"
              />
              <Input
                v-model="obj.email"
                label="Email"
                icon="persone"
                hint="Por favor digite seu nome"
                color="#2196F3"
              />
              <Input
                id="text-input"
                v-mask="'(##)#####-####'" 
                v-model="obj.cellphone"
                label="Telefone"
                icon="persone"
                hint="Por favor digite seu nome"
                color="#2196F3"
              />
            </div>
          <div class="modal-actions">
            <ButtomText :label="'Cancelar'" @closeModal="closeModal()" :actionName="'closeModal'"/>
            <ButtomRounded :label="'Salvar'" @saveModal="saveModal()" :actionName="'saveModal'" :disabled="!dirty"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

import Input from '../forms/Input.vue'
import ButtomText from '../forms/ButtonText.vue'
import { mapActions } from 'vuex'
import ButtomRounded from '../forms/ButtonRounded.vue'
export default {
  components:{
    Input,
    ButtomRounded,
    ButtomText,
  },
  data:()=>({
    obj:{
      name: '',
      email: '',
      cellphone: '',
    },
    dirty: false
  }),
  created() {
    this.unsubscribe = this.$store.subscribeAction((action) => {
      if (action.type === 'modal/addContact') {
        this.visible = true;
      }
    });
  },
  watch:{
    obj:{
      handler() {
        this.dirty = true;
      },
      deep: true
    }
  },
  methods:{
    ...mapActions('contact', [
      'insertContact',
      'getContactById'
    ]),
    closeModal(){
      this.$emit('closeModal')
    },
    saveModal(){
      this.insertContact({
        id: this.generateRandomInteger(),
        ...this.obj
      })
      this.closeModal();
    },
    generateRandomInteger(){
        return Math.floor(Math.random() * 1000) + 1;
    },
    teste(){
      return this.getContactById()
    }
  },
  beforeDestroy() {
    this.unsubscribe();
  },
}
</script>

<style scoped>
  @-webkit-keyframes fadeIn {
      from { opacity: 0; }
        to { opacity: 1; }
  }
  @keyframes fadeIn {
      from { opacity: 0; }
        to { opacity: 1; }
  }
  
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
    border-top: solid 1px #c0c3d2;
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