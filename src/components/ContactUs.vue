<template>
<div class="tile">
      <div class="tile is-6 is-parent">
        <article class="tile is-child box">
          <div class="content">
            <GmapMap

            :center="AnKatCoordinates"
            :zoom="7"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
        >
            <GmapMarker
                :key="index"
                :position="AnKatCoordinates"
                :clickable="true"
                :draggable="true"
                @click="center=AnKatCoordinates"
            />
        </GmapMap>
        <p>Address: Wilmington, OH</p>
        <p>Phone Number: 555-555-5555</p>
          </div>
        </article>
      </div>

        <div class="tile">
      <div class="tile is-12 is-parent">
        <article class="tile is-child box">
          <div class="content">
               <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
            </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
        <label class="label">Subject</label>
        <div class="control">
            <div class="select">
            <select>
                <option>Select dropdown</option>
                <option>With options</option>
            </select>
            </div>
        </div>
        </div>

        <div class="field">
        <label class="label">Message</label>
        <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
        </div>

        <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
        <div class="control">
            <button class="button is-text">Cancel</button>
        </div>
        </div>
          </div>
        </article>
      </div>

    </div>
    </article>
</div>
</template>


<script>
export default {
    data: {
        AnKatCoordinates: {lat:41.495857, lng:-81.2160987},
    }
}
</script>
<style>

</style>