<template>
  <div class="tournament">
    <div class="tournament__image">
      <img :src="`${ tournament.tournamentData.cardImage }?width=300&height=300`" alt="">
    </div>
    <div class="tournament__content">
      <div class="timing">{{ startedAt }}</div>
      <div class="name">
        <img :src="image" alt="" class="payment-type-icon"> {{tournament.tournamentData.name}}
      </div>
      <div class="hint">{{ hint }}</div>
    </div>
  </div>
</template>
<script>
  import moment from "moment"
  import free from '@/assets/images/free.svg';
  import ticket from '@/assets/images/ticket.svg';
  
  export default {
    props: {
      tournament: {
        type: Object,
        required: true
      }
    },
    data: function() {
      return {
        cardImage: `${this.tournament.cardImage}?width=300&height=300`,
        startedAt: moment(this.tournament.tournamentData.startedAt).locale('ru').format('D MMMM [, в ] H:mm'),
        hint: [
          this.tournament.tournamentData.tournamentType.gameMode, 
          `${this.tournament.tournamentData.participateCount}/${this.tournament.tournamentData.maxUsers}`,
          `Приз.фонд ${this.tournament.tournamentData.prizeTable.reduce((accum, value) => accum + value, 0).toLocaleString('ru-RU')} руб.`,
        ].join(' • '),
      };
    },
    computed: {
      image() {
        return this.tournament.tournamentData.paymentType === 'free' ? free : ticket;
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";
  $logo-container-width: 96px;
  
  .tournament {
    $root: &;
    
    background: black;
    cursor: pointer;
    height: 96px;
    
    & > div {
      display: inline-block;
    } 
    
    &__image {
      float: left;
      padding: 18px 16px 18px 20px;
      
      img {
        border: 1px solid $border;
        border-radius: 8px;
        box-sizing: border-box;
        float: left;
        height: 60px;
        object-fit: cover;
        width: 60px;
      }
    }
    
    &__content {
      box-shadow: 0 .5px 0 $border;
      height: 100%;
      width: calc(100% - #{$logo-container-width});

      #{$root}:hover & {
        box-shadow: 0 .5px 0 $hovered-border;
      }
      
      .payment-type-icon {
        float: left;
        margin-right: 6px;
        margin-top: 5px;
      }

      .timing {
        color: $text;
        line-height: 14px;
        font-size: 11px;
        font-weight: 500;
        margin-top: 20px;
        letter-spacing: .2px;
        text-transform: uppercase;
      }
      .name {
        color: $text;
        font-size: 17px;
        font-weight: 500;
        letter-spacing: -.2px;
        line-height: 24px;
      }
      .hint {
        color: $hint;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: -.2px;
        line-height: 20px;
      }
    }
  }
</style>
