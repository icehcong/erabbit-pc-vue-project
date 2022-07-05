const state = () => {
  return {
    profile: {
      id: '',
      avatar: '',
      accpunt: '',
      mobile: '',
      token: ''
    }
  }
}

const mutations = {
  setUser (state, payload) {
    state.profile = payload
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
