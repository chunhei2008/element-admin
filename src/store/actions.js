import * as types from "./mutation-types"

export const actions = {
    setToken({commit},token){
        commit(types.COMMON_SET_TOKEN,token)
    },
    setUser({commit},user){
        commit(types.COMMON_SET_USER,user)
    }
}