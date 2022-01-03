Vue.component('escena', {

    template: //html
    `
    <div>    
     <ul class="list-group">
       <li 
          v-for="(frase,i) in frasesEscena" 
          :Key="i"
          :class="{active: i=== seleccion } "
        class="list-group-item rounded-pill p-1 m-2 border-1 " >
        {{ frase.title }}
       </li>
    </ul>    
    </div>
    `,   
    props: ['frasesEscena','seleccion','num'],                  
    beforeMount() {
      // Abans de mostrar les frases, anem a possar el fons.
      console.log(this.seleccion);
      let pantalla = document.querySelector('body');        
      pantalla.style.background = "url('img/"+ (parseInt(this.seleccion) + 1  ) +".jpg')";
    }
},)
