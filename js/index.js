new Vue ({
  el : '#app',
  data : {
    title : 'Vue Example Using CSS',
    attachRed : false,
    color : 'green',
    width : 100
  },
  computed : {
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed,
      }
    },
    myStyle() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
})
