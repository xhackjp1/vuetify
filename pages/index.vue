<template>
  <div>
    
    <section>
      <v-layout column align-center justify-center class="white--text">
        <img src="JS基礎講座.png" alt="Vuetify.js" min-height="200" />
        <h1 class="black--text my-5 display-1 text-center">JavaScriptを徹底マスターする30日間</h1>
      </v-layout>
    </section>

    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">JavaScriptの基礎をマスターするための、コーディング道場</h2>
          </div>
        </v-flex>
                <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">
              この講座は、JavaScriptの基礎をしっかりと身に付けたい人に向けたオンライン講座です。<br>
              30日間でJavaScriptの基礎を学びます。
              </h2>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-layout column align-center justify-center>
        <v-btn class="my-2" color="blue" dark large href="/pre-made-themes"><span class="white--text">申し込む</span></v-btn>
      </v-layout>
    </section>

    <section>
       <v-layout column wrap class="my-12" align-center>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">プログラミング</div>
                  </v-card-title>
                  <v-card-text>
                    プログラミングの基礎を学びます。JavaScriptに焦点を絞って解説しますが、「本質の理解」ができるように
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">JavaScript</div>
                  </v-card-title>
                  <v-card-text>
                    jQuery Vue.js React.js Angular.js Node.js Vuetify.js Three.js etc ...
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">アルゴリズム</div>
                  </v-card-title>
                  <v-card-text>
                    プログラミングの言語の知識ではなく、システムを組み上げるための知識も学びます
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-layout column align-center justify-center>
        <v-btn class="my-2" color="blue" dark large href="/pre-made-themes"><span class="white--text">申し込む</span></v-btn>
      </v-layout>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm4>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">株式会社X-HACK</div>
              </v-card-title>
              <v-card-text>
                スマホ向けアプリケーションの開発
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.</v-card-text>
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>777-867-5309</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Chicago, US</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>john@vuetifyjs.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>