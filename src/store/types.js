/*
*   增加 types  避免各模块同名方法重复调用
 */
export default {
  // login types
  LOGIN: {
    NAMESPACE: 'Login',
    PRE: 'Login/',
    LOGIN_A_LOGIN: 'login',
    LOGIN_M_UPDATE_NAME: 'nameUpdate',
    LOGIN_M_UPDATE_TOKEN: 'tokenUpdate'
  },
  LIST: {
    NAMESPACE: 'List',
    PRE: 'List/',
    LIST_A_ADD: 'list_add',
    LIST_A_REDUCE: 'list_reduce',
    LIST_A_GET: 'list_get',
    LIST_M_ADD_DATA: 'list_addData',
    LIST_M_REDUCE_DATA: 'list_reduceData',
    LIST_G_LENGTH: 'list_length'
  }
}
