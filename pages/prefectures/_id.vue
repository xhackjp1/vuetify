<template>
  <v-container fluid>
    <p>
    <v-btn to="/prefectures">  {{ '<<' }} 都道府県選択へ 戻る </v-btn>
    </p>
    {{ filtered_stations.length || 0 }} 駅を選択中
    <v-divider></v-divider>
    路線選択 - {{ prefectures[$route.params.id - 1].name }}
    <v-row>
      <v-switch 
        height="5"
        class="ma-1"
        @change="hello(dat.line_cd)"
        :label="dat.line_name"
        v-for="dat in data" :key="dat.line_cd">
      </v-switch>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-switch
        height="5"
        class="ma-1" 
        :label="dat.station_name"
        v-for="dat in filtered_stations" :key="dat.station_cd">
      </v-switch>
    </v-row>
  </v-container> 
</template>

<script>
import { routes } from '../../assets/routes.js';
import { prefectures } from '../../assets/prefecture.js';
import { stations } from '../../assets/stations.js';

export default {
  data: function() {
    return {
      selectedLines: [],
      checkbox: [],
      prefectures: prefectures,
      stations: stations,
      data: routes.filter(_ => _.lat > 35.3 && _.lat < 35.7 && _.lon > 139.4 && _.lon < 139.8),
      selectId: 13,
    }
  },
  methods: {
    hello(code) {
      if(this.selectedLines.includes(code)){
        this.selectedLines = this.selectedLines.filter(_ => _ !== code)
      }else{
        this.selectedLines.push(code)
      }
    }
  },
  computed: {
    selected_lines() {
      return this.selectedLines;
    },
    filtered_stations() {
      const lines = this.selected_lines
      return this.stations.filter(_ => lines.includes(_.line_cd))
    }
  }
}
</script>