<template>
  <div id="app">
    <router-view></router-view>
    <AppFooter></AppFooter> 
  </div>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import AppFooter from '@/components/business/AppFooter.vue';
@Component({
  components: {
    AppFooter,
  },
})
export default class App extends Vue {
}
</script>


<style lang="stylus">
body
 margin 0
 padding 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
