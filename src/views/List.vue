<template>
  <div class="login-box">
    <input type="text" v-model="name" @keyup.enter="add"/>
    <button @click="add">+</button>

    <ul>
      <li v-for="item in lists">{{item}}
        <button @click="remove(item)">-</button>
      </li>
    </ul>
    <p>length:{{listLength}}</p>
  </div>
</template>
<style>

</style>
<script>
  import { mapState, mapGetters } from 'vuex'
  import Types from '../store/types'
  export default{
    name: 'list-view',
    data () {
      return {
        name: ''
      }
    },
    computed: {
      ...mapState(Types.LIST.NAMESPACE, {
        lists: state => state.lists
      }),
      ...mapGetters(Types.LIST.NAMESPACE, {
        listLength: Types.LIST.LIST_G_LENGTH
      })
    },
    created () {
      this.getList()
    },
    methods: {
      getList () {
        this.$store.dispatch(Types.LIST.PRE + Types.LIST.LIST_A_GET)
      },
      add () {
        this.name && this.$store.dispatch(Types.LIST.PRE + Types.LIST.LIST_A_ADD, this.name)
      },
      remove (item) {
        this.$store.dispatch(Types.LIST.PRE + Types.LIST.LIST_A_REDUCE, item)
      }
    }
  }
</script>
