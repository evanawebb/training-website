<template>
<div class="tile is-parent">
    <article class="tile is-child notification is-danger">
    <p class="title">Contact Us</p>
    <p class="subtitle">Aligned with the right tile</p>
    <div class="content">
        <GmapMap
            :center="{lat:10, lng:10}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
        >
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            />
        </GmapMap>
    </div>
    </article>
</div>
</template>


<script>

</script>
<style>

</style>