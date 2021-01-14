<template>
  <div class="addAddress">
    <Header :title="title" :isLeft="true"></Header>
    <!-- 添加地址 -->
    <div class="viewbody">
      <div class="content">
        <FormBlock label="联系人" placeholder="姓名" :tags="sexes" :sex="addressInfo.sex" @checkSex="checkSex" v-model="addressInfo.name"/>
        <FormBlock v-model="addressInfo.phone" label="电话" placeholder="手机号码"/>
        <FormBlock v-model="addressInfo.address" @click="showSearch=true" label="地址" placeholder="小区/写字楼/学校等" icon="angle-right" />
        <FormBlock v-model="addressInfo.bottom" label="门牌号" placeholder="10号楼5单元404" icon="edit" textarea="textarea" />
        <div class="formblock">
          <div class="label-wrap">标签</div>
          <TabTag :tags="tags" :selectTag="addressInfo.tag" @checkTag="checkTag"/>
        </div>
      </div>
      <!-- 确定按钮 -->
      <div class="form-button-wrap">
        <button @click="handleSave" class="form-button">确定</button>
      </div>
    </div>

    <!-- 搜索地址 -->
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import FormBlock from '../../components/Orders/FormBlock.vue'

export default {
  name: 'addAddress',
  data () {
    return {
      title: '添加地址'
    }
  },
  components: {
    Header,
    FormBlock
  }
}
</script>

<style scoped>
.addAddress {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 45px;
}
.viewbody {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

.content {
  padding-left: 4vw;
  background: #fff;
  font-size: 0.94rem;
}

.formblock {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
}
.formblock .label-wrap {
  flex-basis: 17.333333vw;
  padding: 3.733333vw 0;
  line-height: 4.8vw;
  color: #333;
  font-weight: 700;
}

/* 确定按钮 */
.form-button-wrap {
  padding: 5.333333vw 4vw;
  display: flex;
}
.form-button-wrap .form-button {
  background: #00d762;
  text-align: center;
  border-radius: 0.533333vw;
  flex: 1;
  font-size: 1.1rem;
  line-height: 5.066667vw;
  color: #fff;
  padding: 3.333333vw 0;
  border: none;
  font-weight: 500;
}
</style>
