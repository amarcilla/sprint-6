Vue.component('home', {
    template: ` 
    <!-- style="v-bind:background-image:url('img/.jpg'); background-repeat:no-repeat; background-size: 100%  " -->
    
    <div >        
       <!-- Estem llegint el que ens esta retornant el fill:botons -->      
       <botons  @currentSentence="sentence=$event"></botons>      
        <div v-for="(frase,i) in frases" >                     
          <div id=principal v-if="i=== sentence"  v-bind:style="{ 'background-image': 'url(' + frase.imatge + ')' }">              
              <escena v-if="i=== sentence" :frasesEscena="frases" :seleccion="sentence" @currentImatge="imatge=$event" ></escena>            
          </div>          
        </div>                                
    </div>
    `,
    data() {     
        return {
            frases: [
                {
                    title: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
                    imatge: "img/1.jpg"
                },
                {
                    title: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes",
                    imatge: "img/2.jpg"
                },
                {
                    title: "L'heroi va decidir travessar la porta que el portava a casa",
                    imatge: "img/3.jpg"
                },
                {
                    title: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
                    imatge: "img/4.jpg"
                }
            ],
            sentence: 0,
            imatge:'',
        };
    },
});
