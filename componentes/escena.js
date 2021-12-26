Vue.component('escena', {

    template: //html
    `
    <div >
    <h4>Escena</h4>    
     <ul class="list-group">
       <li v-for="frase in frasesEscena" class="list-group-item rounded-pill p-1 m-2 border-1" >
        {{ frase.title }}
       </li>
    </ul>
    </div>
    `,   
    props: ['frasesEscena']
    },

)
