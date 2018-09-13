<template>
</template>

<script>
import HorseService from '@/services/HorseService'
export default {
  name: 'horses',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getHorses()
  },
  methods: {
    async getHorses () {
      const response = await HorseService.fetchPosts()
      this.horse = response.data
    }
  }
}
</script>
