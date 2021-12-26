//Creamos el componente <movie-card> e instanciamos la aplicación de Vue. 
//Primero debemos crear el componente para que el código se interprete correctamente. Si instanciamos antes la app de Vue y luego el componente tendremos errores porque Vue no lo reconocerá.

/*Para crear un componente tenemos que usar la función Vue.component que recibe un string con el nombre de nuestro componente, que será el nombre que tendrá el elemento en el DOM, y un objeto de configuración que contendrá el nombre de las props, el template, datos, métodos, etc...*/

/*El componente recibirá como propiedades una image y un title, y su aspecto en el DOM será el de un <div> que contiene un elemento <img> que mostrará la imagen y otro h2 que mostrará el título de la película.

Para ver el componente en acción, podemos hacer varias cosas. Como primera opción, podemos insertar el componente <movie-card> en el HTML dentro del <div id="app"> dónde tenemos instanciado Vue.*/

Vue.component("movie-card", {
    props: ["image", "title"],
    template: `
      <div>
        <img width="100" v-bind:src="image" v-bind:alt="title"/>
        <h2>{{ title }}</h2>  
      </div>
    `,
  });

  new Vue({
    el: "#app",
    data: {
      movies: [
        {
          title: "Regreso al Futuro",
          image:
            "http://es.web.img3.acsta.net/pictures/14/04/03/13/45/034916.jpg",
        },
        {
          title: "Matrix",
          image:
            "http://t0.gstatic.com/images?q=tbn:ANd9GcQq3pIz-aKgkmYX1dJ-EL-AlHSPcOO7wdqRIJ5gJy9qNinXpmle",
        },
        {
          title: "Interestellar",
          image:
            "http://t1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
        },
      ],
    },
    template: `
    <div>
      <movie-card v-for="(movie, index) in movies"
        :key="index"
        :title="movie.title"
        :image="movie.image">
      </movie-card>
    </div>
  `,
  });