Vue.component('botons', {
    template: //html
    `    
    <div >
    <h4>Botons</h4>    
      <button @click="current--">prev</button>
      <button @click="current++" >next</button>  
      {{current}}    
    </div>
    `,   
    props: ['frasesEscena','sentencia'],    
    data(){
      return{
        current: 2
      }
    },
        mounted(){
        this.$emit('currentSentence', this.current)
      }
})