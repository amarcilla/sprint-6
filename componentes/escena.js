Vue.component('escena', {

    template: //html
    `
    <div  >
    <h4>Escena</h4>    
     <ul class="list-group">
       <li 
          v-for="(frase,i) in frasesEscena" 
          :Key="i"
          :class="{active: i=== seleccion } "
        class="list-group-item rounded-pill p-1 m-2 border-1 " >
        {{ frase.title }}
        <img width="100" v-bind:src="frase.imatge" v-bind:alt="frase.title"/>          
       </li>
    </ul>
    seleccion: {{ seleccion }}   
    </div>
    `,   
    props: ['frasesEscena','seleccion']
    },
)
