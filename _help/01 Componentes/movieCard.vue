<!-- fichero para desarrollar.. necesitaremos webpack para usarlo (lo 'descompila') -->
<template>
  <div>
    <img width="100" v-bind:src="image" v-bind:alt="title" />
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
  export default {
    name: "movie-card",
    //components: Si tinguessim components dins del movie card, o indicaríem aquí.
    props: {
      image: String,
      title: String,
    },
  };
</script>

<!-- scoped, nos permite aislar los estilos del resto de componentes y de la aplicación.-->
<!-- De esta manera no tenemos que preocuparnos de nombres de clases o de estilar elementos como el <h2> porque únicamente se le dará el estilo al elemento <h2> de éste componente, dejando el resto de elementos <h2> que pueda haber en el resto de aplicación con el estilo que tengan o el de por defecto.-->

<style scoped>
  h2 {
    font-size: 18pt;
  }
</style>