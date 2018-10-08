<template>
<div>
  <div class="field">
    <label class="label is-pulled-left">Name</label>
    <div class="control">
      <input class="input" type="text" v-model="newHorse.name" placeholder="e.g Alex Smith">
    </div>
  </div>
<label class="label is-pulled-left">Description</label>
<textarea class="textarea" v-model="newHorse.description" placeholder="Description" rows="20"></textarea>
<label class="label is-pulled-left">Photo</label>
<textarea class="textarea" v-model="newHorse.photo" placeholder="Photo Link" rows="1"></textarea>
<label class="label is-pulled-left">Video</label>
<textarea class="textarea" v-model="newHorse.video" placeholder="Video Link" rows="1"></textarea>
<a @click="addHorse()" class="button is-primary is-pulled-right">Submit</a>
</div>
</template>

<script>
import HorseService from '@/services/HorseService'
export default {
  data () {
    return {
      newHorse: {
          name: '',
          description: '',
          photo: '',
          video: ''
      }
    }
  },
  methods: {
    async addHorse () {
      console.log('hello')
        await HorseService.putHorses({
          name: this.newHorse.name,
          description: this.newHorse.description,
          photo: this.newHorse.photo,
          video: this.newHorse.video
        })
    }
  }
}
</script>
