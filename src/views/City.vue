<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" v-model="city_val" placeholder="输入城市名">
      </div>
      <button @click="$router.go(-1)">取消</button>
    </div>
    <div style="height: 100%">
      <div class="location">
        <Location :address="city"></Location>
      </div>
      <Alphabet :cityInfo="cityInfo" :keys="keys" ref="allCity" @selectCity="selectCity"></Alphabet>
    </div>
  </div>
</template>

<script>
import Location from '../components/Location.vue'
import Alphabet from '../components/Alphbet.vue'

export default {
  name: 'city',
  data () {
    return {
      city_val: '',
      cityInfo: null,
      keys: []
    }
  },
  components: {
    Location,
    Alphabet
  },
  computed: {
    city () {
      return ( this.$store.getters.location.addressComponent.city || 
        this.$store.getters.location.addressComponent.province )
    }
  },
  created () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      this.$axios('/api/posts/cities').then(res => {
        this.cityInfo = res.data
        // 处理 keys，计算 key
        // Object.keys() 返回一个所有元素为字符串的数组
        this.keys = Object.keys(res.data)
        // hotcities这个key移除掉
        this.keys.pop()
        // keys 排序
        this.keys.sort()
        this.$nextTick(() => {
          this.$refs.allCity.initScroll()
        })
      }).catch(err => {
        console.log(err)
      })
    },
    selectCity (city) {
      this.$router.push({name: '/address', params: {city: city.name }})
    }
  }
}
</script>

<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search_wrap button {
  outline: none;
  color: #009eef;
}

.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}

.search_list {
  background: #fff;
  padding: 5px 16px;
}
.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
