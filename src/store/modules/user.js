import UserActions from './actions/User';
import UserMutations from './mutations/User';
import UserGetters from './getters/User';

const state = {
  users:[],
}

const actions = {
  UserActions.addUser({ commit, state }, users),
}

const mutations = {
  UserMutations.addUser(state, { user })
}

const getters = {
  userList: UserGetters.getUserList(state, getters, rootState)
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
