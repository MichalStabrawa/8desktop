


Vue.use(VueScrollTo)


var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      data: function() {

        return { visible: false }
        
      }
    }
  })