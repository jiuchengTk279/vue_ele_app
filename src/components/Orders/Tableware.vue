<template>
  <transition>
    <div class="tableware" v-if="isShow">
      <div class="actions-sheet">
        <i class="fa fa-remove" @click="$emit('close')"></i>
        <h2 class="actions-sheet-header">
          <span class="tag"></span>
          <span class="title">餐具份数</span>
          <span class="tag"></span>
        </h2>
        <ul>
          <li
            :class="{'selected': selectItem == item}"
            @click="clickItem(item)"
            v-for="(item,index) in tablewareList"
            :key="index"
          >{{item}}</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Tableware',
  props: {
    isShow: Boolean
  },
  data () {
    return {
      tablewareList: ["1", "2", "3", "4", "5", "6"],
      selectItem: ""
    }
  },
  methods: {
    clickItem (item) {
      // console.log(item)
      this.selectItem = item
      this.$store.dispatch('setRemarkInfo', {
        tableware: item + "份餐具",
        remark: this.$store.getters.remarkInfo.remark
      })
      
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>