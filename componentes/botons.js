Vue.component('botons', {
    template: //html
    `    
    <div class="p-3 m-3 ">    
      <button @click="prev()">Anterior</button>
      <button @click="next()">Següent</button>  
    </div>
    `,   
    props: ['frasesEscena','sentencia'],    
    methods: {
      next(){
        this.back = false;
        this.current++;
        this.$emit('currentSentence', this.current)
      },
      prev(){
        this.back = true;
        this.current--;
        this.$emit('currentSentence', this.current)
      }
    },
    data: function(){
      return{
        current: ''
      }
    }
})