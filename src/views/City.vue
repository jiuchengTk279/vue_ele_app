<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" v-model="city_val" placeholder="输入城市名">
      </div>
      <button @click="$router.push({name: 'address', params: {city: city}})">取消</button>
    </div>
    <div style="height: 100%" v-if="searchList.length == 0">
      <div class="location">
        <Location :address="city" @click="selectCity({name: city})"></Location>
      </div>
      <Alphabet :cityInfo="cityInfo" :keys="keys" ref="allCity" @selectCity="selectCity"></Alphabet>
    </div>
    <div class="search_list" v-else>
      <ul>
        <li v-for="(item, index) in searchList" :key="index" @click="selectCity(item)">{{ item.name }}</li>
      </ul>
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
      keys: [],
      allCities: [],
      searchList: []
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
  watch: {
    city_val () {
      this.searchCity()
    } 
  },
  methods: {
    // 获取城市列表信息
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

        // 存储所有城市，用来搜索过滤
        this.keys.forEach(key => {
          this.cityInfo[key].forEach(city => {
            this.allCities.push(city)
          })
        })

      }).catch(err => {
        console.log(err)
      })
    },
    // 选择城市
    selectCity (city) {
      this.$router.push({name: '/address', params: {city: city.name }})
    },
    // 搜索城市
    searchCity () {
      if (!this.city_val) {
        // 如果搜索框为空, 数组置空
        this.searchList = []
      } else {
         // 根据输入框的关键字检索城市 并存入到searchList数组中
        this.searchList = this.allCities.filter(item => {
          return item.name.indexOf(this.city_val) != -1
        })
      }
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
