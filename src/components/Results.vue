<template>
  <div>
      <div v-for="item in items" :key="item.trackId">
          <img :src="item.artworkUrl100">
          <p>{{item.trackName}}</p>
          <p>{{item.artistName}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
  name: 'Results'
}
</script>
