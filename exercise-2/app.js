new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alertMe: function () {
      alert('Alert!')
    },
    textValue: function (event) {
      this.value = event.target.value
    }
  }
})
