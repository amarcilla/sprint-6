Vue.component('home', {
    template: ` 
    <div class="">
    <h2>Component Home</h2>
    <botons></botons>
    <escena :frasesEscena="frases"></escena>
    </div>
    `,
    data() {     
        return {
            frases: [
                {title: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"},
                {title: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes"},
                {title: "L'heroi va decidir travessar la porta que el portava a casa"},
                {title: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."}
            ]
        };
    },
});