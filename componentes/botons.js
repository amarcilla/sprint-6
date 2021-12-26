Vue.component('botons', {
    template: //html
    `
    <div >
    <h4>Botons</h4>    
      <button @click="prev()" >prev</button>
      <button @click="next()" >next</button>
    </div>
    `,   
    props: ['back', 'currentSentence'],
    
      methods: {
        next(){
          this.back = false;
          this.currentSentence++;
        },
        prev(){
          this.back = true;
          this.currentSentence--;
        }
      },
    }
)