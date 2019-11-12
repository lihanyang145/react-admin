import storageUtils from '../utils/storageUtils'
import { combineReducers } from 'redux'
import { SET_HEADER_TITLE ,USER } from './action-types'
//管理应用头部函数
const initHeaderTitle = '首页'
function headerTitle(state = initHeaderTitle, action) {
    switch (action.type) {
        case SET_HEADER_TITLE:
            return action.data;

        default:
            return state;
    }
}
//管理登录函数
const initUser = storageUtils.getUser
function user(state = initUser, action) {
    switch (action.type) {
        case USER:
            // storageUtil.saveUser(action.user)
            return { user: action.user };

        default:
            return state;
    }
}
const reducer = combineReducers({
    headerTitle,
    user
})
export default reducer