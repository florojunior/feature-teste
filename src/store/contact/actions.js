export const actions = {
  insertContact(state, payload){
    const list = localStorage.getItem("list");
    if(!list){
      localStorage.setItem("list", JSON.stringify([]));
    }

    let listStorage = JSON.parse(localStorage.getItem("list"));
    listStorage.push(payload);
    localStorage.setItem("list", JSON.stringify(listStorage));
    state.commit('SET_LIST', listStorage);
  },

  initStateValuesFromLocalStorage(state){
    const listFromLS = localStorage.getItem("list")
    if(listFromLS){
      state.commit('SET_LIST', JSON.parse(listFromLS));
    }
  },

  async getContactById(state, id){
    return await state.state.list.find((contact) => contact.id === id);
  },

  async deleteContactById(state, id){
    const listDeletedObj = state.state.list.filter((contact) => contact.id != id);
    localStorage.setItem("list", JSON.stringify(listDeletedObj));
    state.commit('SET_LIST', listDeletedObj);
  }
};
