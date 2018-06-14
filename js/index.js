new Vue ({
  el : '#app',
  data : {
    title : 'Vue Example Using CSS',
    attachRed : false
  },
  computed : {
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed,
      }
    }
  }
})
