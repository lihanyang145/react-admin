/* 操作local数据的工具  */
const USER_KEY = 'user_key'
// import store  from 'store'
export default {
    //保存
    saveUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user))
        // store.set(USER_KEY, user)
    },
    //获取
    getUser() {
        return JSON.parse(localStorage.getItem(USER_KEY))
        // return store.get(USER_KEY, user)
    },
    removeUser() {
        localStorage.removeItem(USER_KEY)
    }
}
