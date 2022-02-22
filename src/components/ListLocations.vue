<template>
   <div v-for="loc in locations" :key="loc.id">
    <div class="single">
      <div class="thumbnail">
        <img :src="loc.locationUrl">
      </div>
      <div class="info">
        <h3>{{ loc.title }}</h3>
        <p>created by {{ loc.userName }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    props: ['locations'],
}
</script>

<style>

</style>