
const state = () => ({
  notifications: []
})

const mutations = {
  ADD_NOTIFICATION (state, notification) {
    state.notifications.push(notification)
  },
  REMOVE_NOTIFICATION (state, ts) {
    state.notifications = state.notifications.filter(elem => elem.ts !== ts)
  }
}

const getters = {
  notifications: state => state.notifications
}

const actions = {
  addNotification ({ commit }, { notificationText, lifetime }) {
    const ts = Date.now()
    const notification = {
      text: notificationText,
      ts
    }
    commit('ADD_NOTIFICATION', notification)
    setTimeout(() => { commit('REMOVE_NOTIFICATION', ts) }, lifetime)
  },
  removeNotification ({ commit }, ts) {
    commit('REMOVE_NOTIFICATION', ts)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
