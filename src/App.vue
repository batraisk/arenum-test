<template>
  <div class="container">
    <TournamentsList />
  </div>
</template>

<script>
import TournamentsList from '@/components/TournamentsList'
export default {
  name: 'App',
  components: {
    TournamentsList
  }
}
</script>

<style lang="scss">
  @import "assets/styles/fonts.css";
  
  .container {
    margin-right: auto;
    margin-left: auto;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Graphik, serif;
    background: black;
  }
  
  @media (min-width: 576px) { 
    .container {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 768px;
    }
  }
</style>
