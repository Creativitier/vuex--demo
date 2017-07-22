import * as types from './types'

const mutations = {
	[types.INCREMENT] (state) {
        state.count++
	},
	[types.ASYNC] (state, N) {
        state.count = N
	}
};
export default mutations
