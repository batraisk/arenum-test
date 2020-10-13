<template>
  <Tournament
    v-for="tournament of tournaments"
    v-bind:tournament="tournament"
    v-bind:key="tournament"
  />
  <div v-if="isLoading" class="loader">Загрузка...</div>
</template>
<script>
  import Tournament from '@/components/Tournament'
  export default {
    components: {
      Tournament
    },
    data: function() {
      return {
        tournaments: [],
        start: 0,
        step: 15,
        isLoading: false,
        isEnd: false,
      };
    },
    methods: {
      async getTournaments() {
        if (this.isEnd) return;
        
        this.isLoading = true;
        try {
          const {data} = await this.$api.tournaments.getTournaments(this.start);
          if ((data || []).length === 0) this.isEnd = true
          this.tournaments = [...this.tournaments, ...data];
        } catch (error) {
          console.log(error)
        } finally {
          this.isLoading = false;
        }
      },
      handleScroll() {
        const scrollHeight = document.documentElement.scrollTop + window.innerHeight;
        const bottomWindow = scrollHeight === document.documentElement.offsetHeight;
        if (bottomWindow) {
          this.start += this.step;
          this.getTournaments()
        }
      }
    },
    mounted() {
      this.getTournaments()
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
      window.removeEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style lang="scss">
  @import "../assets/styles/variables";
  
  .loader {
    margin: 16px 0;
    color: $text;
    text-align: center;
  }
</style>
