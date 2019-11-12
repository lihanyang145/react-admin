import { SET_HEADER_TITLE, USER } from './action-types'

//设置头部
export const setHeaderTitle = (headerTitle) => ({ type: SET_HEADER_TITLE, data: headerTitle })
//设置登录
export const setUesr = (user) => ({ type: USER, user })