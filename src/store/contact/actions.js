export const actions = {
  insertContact(state, payload){
    const list = localStorage.getItem("list");
    if(!list){
      localStorage.setItem("list", JSON.stringify([]));
    }

    let listStorage = JSON.parse(localStorage.getItem("list"));
    listStorage.push(payload);
    state.commit('SET_LIST', listStorage);
  },
};
