<template>

  <div id="app">

    <router-view />

  </div>

</template>

<style>
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Open+Sans:wght@300;400;500;600;700&display=swap');

:root{
  --fonte-padrao-conforta: 'Comfortaa', cursive;
  --fonte-padrao-open: 'Open Sans', sans-serif;
  --cor-letra-titulo: #483698;
  --cor-letra-fundo: #ffe766;
  --cor-letra-danger: #dc3545;
  --cor-letra: #282828;
  --cor-select: #8a8a8a

}

html body{
  background-color: #ffe766;
}
*{
  margin: 0;
}
</style>
