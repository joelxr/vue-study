new Vue({
  el: '#exercise',
  data: {
    value: 0
  },
  watch: {
    value: function (value) {
      var vm = this
      setTimeout(function () {
        vm.value = 0
      }, 5000)
    }
  },
  computed: {
    result: function () {
      return this.value >= 37 ? 'done' : 'not there yet'
    }
  }
})
