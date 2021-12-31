Vue.component('botons', {
  template: //html
    `
    <div class="row p-3 m-3">           
      <div class="col-6"><button v-if="seleccion>0" type="button" @click="prev()" class="btn-lg w-100">Anterior</button> </div>
      <div class="col-6"><button v-if="seleccion!=num-1" type="button" @click="next()" class="btn-lg w-100">Següent</button>  </div>         
    </div>
    `,
  props: ['seleccion','num'],
  methods: {
    next() {                    
        let pantalla = document.querySelector('body');        
        pantalla.style.background = "url('img/"+ (parseInt(this.seleccion) + 1 ) +".jpg')";
        this.current++;
        
        this.$emit('currentSentence', this.current);
    },
    prev() {      
      let pantalla = document.querySelector('body');        
      pantalla.style.background = "url('img/"+ (parseInt(this.seleccion) + 1 ) +".jpg')";
      this.current--;
      this.$emit('currentSentence', this.current);
    }
  },
  data: function () {
    return {
      current: '',
      seleccion: '',
      num:''
    }
  }
})