<template>
  <v-container fluid>
    <v-text-field
      v-model="searchText"
      placeholder="検索ワードを入力してください"
      solo-inverted
      flat
      hide-details
      label="Search"
      prepend-inner-icon="search"
      @change="search"
    />
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
        v-for="shop in shops"
        v-bind:key="shop.id"
      >
        <EventCard v-bind:shop-item="shop"></EventCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import EventCard from "@/components/EventCard";

export default {
  head: {
    titleTemplate: "18日目 - JavaScript道場",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      {
        hid: "description",
        name: "description",
        content: "JavaScriptの初心者向け学習サイト|JavaScript道場",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "JavaScript道場",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://js-hack.com/tutorials/18th_day",
      },
      { hid: "og:title", property: "og:title", content: "JavaScript道場" },
      {
        hid: "og:description",
        property: "og:description",
        content: "18日目|JavaScript道場",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://connpass-tokyo.s3.amazonaws.com/thumbs/12/68/126877624bdf7929e0b6d60a7305ff87.png",
      },
    ],
  },
  components: {
    EventCard,
  },
  mounted: function () {
    this.send("焼肉");
  },
  methods: {
    search: function () {
      this.send(this.searchText);
    },
    send: function (searchText) {
      let baseUrl = "https://api.gnavi.co.jp/RestSearchAPI/v3/";
      let apiKey = "60e919407001d7a00adc7f4a8764a2d9";
      let limit = 30;
      let url = `${baseUrl}?keyid=${apiKey}&freeword=${searchText}&hit_per_page=${limit}`;
      axios.get(url).then((response) => {
        console.log(response);
        this.shops = response.data.rest;
      });
    },
  },
  data: function () {
    return {
      searchText: "",
      shops: [],
    };
  },
};
</script>
