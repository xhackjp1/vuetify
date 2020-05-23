<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="9">
        <v-text-field
          v-model="searchText"
          placeholder="検索ワードを入力してね"
          solo-inverted
          flat
          hide-details
          @change="search"
        />
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="selectPref"
          :items="prefectures"
          item-text="pref_name"
          item-value="pref_code"
          :menu-props="{ top: true, offsetY: true }"
          label="都道府県"
          @change="search"
        >
        </v-select>
      </v-col>
    </v-row>

    <v-row >
      <v-col 
        cols="12" 
        xs="12" 
        sm="6" 
        md="4" 
        lg="4" 
        xl="3"
        v-for="shop in shops" v-bind:key="shop.id"
      >
        <ShopCard v-bind:shop-item="shop"></ShopCard>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" justify="center">
        <v-btn @click="loadNext">続きを読み込む</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
"
<script>
import axios from 'axios'
import ShopCard from '@/components/ShopCard'
import { prefectures } from '../assets/prefecture'

export default {
  components: {
    ShopCard
  },
  mounted: function () {
    this.send('焼肉')
    this.pref()
  },
  methods: {
    search: function () {
      this.send(this.searchText)
    },
    loadNext: function () {
      this.send(this.searchText, true)
    },
    pref:function () {
      let baseUrl = 'https://api.gnavi.co.jp/master/PrefSearchAPI/v3'
      let api_key = this.$api_key
      axios
        .get(baseUrl, {
          params : { keyid: api_key }
        })
        .then((response) => {
          console.log("都道府県")
          console.log(response.data.pref)
          this.prefs = response.data.pref
        })
    },
    send: function (searchText, loadNext) {
      let baseUrl = 'https://api.gnavi.co.jp/RestSearchAPI/v3/'
      let limit = 20
      let api_key = this.$api_key
      let pref_id = this.selectPref
      if(loadNext){
        this.offset = this.offset + limit
      }
      axios
        .get(baseUrl, {
          params : {
            keyid: api_key,
            hit_per_page: limit,
            freeword: this.searchText,
            pref: pref_id,
            offset: this.offset
          }
        })
        .then((response) => {
          if(!loadNext){
            this.shops = response.data.rest
          }else{
            this.shops = this.shops.concat(response.data.rest)
          }
        })
    }
  },
  data: function () {
    return {
      searchText: '',
      selectPref: '',
      shops: [],
      prefs: [{pref_code: "PREF13"}],
      offset: 1
    }
  },
  computed: {
    prefectures() {
      console.log(this.prefs)
      return this.prefs // .map(_ =>  _.pref_code)
    }
  } 
}
</script>