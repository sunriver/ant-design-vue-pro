// import router from "../../router";
// import request from "../../utils/request";

const state = {
  listData: []
};

const actions = {
  async getListData({ commit }) {
    console.log("request to get new list");
    // const response = (await request({
    //     url: "/newlist/getall",
    //     method: "GET"
    // }));
    const response = ["re1", "re2", "re3"];
    console.log(response);
    commit("updateList", { payload: response });
  }
};

const mutations = {
  updateList(state, { payload }) {
    console.log("updateList" + payload);
    if (!payload) {
      state.listData = [];
      return;
    }
    state.listData = payload;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
