import {
	createStore
} from 'vuex'
const store = createStore({


	state() {
		return {
			auth: {
				user: {
					username: '',
					mail: ''
				}
			},
			sidebarShowing: false,
		}
	},


	mutations: {
		toggleSidebar(state) {
			state.sidebarShowing = !state.sidebarShowing
		}
	}


});

export default store;