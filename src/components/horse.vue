<template>
<div class="hero-head">
<div class="tile is-ancestor horseAncestor">
  <div class="tile is-vertical is-10">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child box"  v-for="(eachhorse, id) in horse">
          <!-- Put any content you want -->
          <div class="content">
            <p class="title">{{eachhorse.name}}</p>
            <p class="is-pulled-left">{{eachhorse.description}}</p>
            <figure class="image" v-if="eachhorse.photo">
            <img v-if="eachhorse.photo" :src="eachhorse.photo">
            </figure>
            <figure class="image" v-if="eachhorse.video">
              <iframe width="560" height="315"
              :src="'https://www.youtube.com/embed/' + eachhorse.video"
              frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen></iframe>
            </figure>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import HorseService from '@/services/HorseService'
export default {
  name: 'horses',
  data () {
    return {
      horse: []
    }
  },
  mounted () {
    this.getHorses()
  },
  methods: {
    async getHorses () {
      try {
        const response = await HorseService.fetchHorses()
        this.horse = response.data.Horse
      } catch (e){
        alert('Error Loading Media')
        console.log(e)
      }

    }
  }
}
</script>

<style>
.horseAncestor {
  padding-top: 5px;
  padding-bottom: 5%;
  padding-left: 15%;
  padding-right: 5%;
}
</style>