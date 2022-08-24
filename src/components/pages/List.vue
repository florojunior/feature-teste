<template>
  <div class="table-all">
    <table>
      <tr class="text-tr">
        <th>Contatos</th>
        <th>E-mail</th>
        <th>Telefone</th>
      </tr>
      <tr class="loading-background">
        <td>
          <span class="tag-name">A</span>
          <span>Alface</span>
        </td>
        <td>joaoguimajrt@gmail.com</td>
        <td>(92) 992689899</td>
        <td>
          <div class="btn-list">
          <button @click="editItem()" class="edit-btn">
            <img src="../../assets/edit.svg" alt="">
          </button>
            <button  @click="deleteItem()" class="delete-btn">
            <img src="../../assets/delete.svg" alt="">
          </button>
        </div>
        </td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
    </table>
    <AddModal v-if="openDialog" @closeModal="closeModal"/>
    <EditModal @closeEdit="closeEdit" :dialogEdit="dialogEdit"/>
    <DeleteModal @closeDelete="closeDelete" :dialogDelete="dialogDelete" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AddModal from '../modal/AddModal.vue'
import EditModal from '../modal/EditModal.vue'
import DeleteModal from '../modal/DeleteModal.vue';
export default {
  name: "List",
  components: { AddModal, EditModal, DeleteModal },
  data() {
    return {
      openDialog: false,
      dialogEdit: false,
      dialogDelete: false
    };
  },
  methods: {
     ...mapActions('modal', [
        'addContact'
      ]),
    closeModal() {
      this.openDialog = false;
    },
     closeEdit() {
      this.dialogEdit = false;
    },
    editItem () {
      this.dialogEdit = true;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    deleteItem(){
      this.dialogDelete = true;
    }
    
  },
  created() {
    this.unsubscribe = this.$store.subscribeAction((action) => {
      if (action.type === 'modal/addContact') {
        this.openDialog = true;
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
}
</script>


<style>
.loading-background {
  background-color: #fff3f2;
}
.tag-name{
  border-radius: 15px;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 1rem 0 0;
  padding: 0.188rem 0.313rem 0.125rem 0.375rem;
  background-color: #fa8d68;
}
.btn-list {
  display: flex;
  justify-content: space-around;
}
.edit-btn{
  cursor: pointer;
  background: none;
}
.delete-btn {
  cursor: pointer;
  background: none;
}
.text-tr {
  font-size: 0.813rem;
  color: #9198af;
  width: 3.188rem;
  height: 0.938rem;
  margin: 0 0 0 28.063rem;
  font-weight: normal !important;
  font-stretch: normal;
  font-style: normal;
  line-height: normal !important;
  letter-spacing: normal;
}
.table-all {
  display: flex;
  width: 95% !important;
  justify-content: center;
  margin-right: 20px;
  padding: 20px;
}
table {
  background: white;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  font-weight: normal;
  font-size: 0.875rem;
  text-align: left;
  padding: 8px;
}
tr {
  border: groove;
   border-color: #f8f9fd2b;
}

</style>