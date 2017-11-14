import Vue from 'vue';
import Editor from './editor.vue';

new Vue({
  el: '#app',
  template: '<editor/>',
  components: { editor: Editor }
});
