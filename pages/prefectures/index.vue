<template>
  <v-container fluid>
    都道府県検索
    <v-row>
      <v-col v-for="pref in prefectures" :key="pref.id">
        <v-btn :to="`./prefectures/${pref.code}`">{{ pref.name }}</v-btn>
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
import { prefectures } from '../../assets/prefecture.js';

export default {
  data: function() {
    return {
      prefectures: prefectures
    }
  }
}
</script>
