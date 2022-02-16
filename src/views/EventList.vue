<template>
  <div class="event-list">
    <h1>Events Listing</h1>
    <router-link :to="{ name: 'event-show', params: { id: 'Siemaneczko' } }"
      >Show event No.1
    </router-link>
    <router-link :to="{ name: 'event-show', params: { id: 'Co tam?' } }"
      >Show event No.2
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.event-list a {
  display: block;
  text-decoration: none;
  font-size: 20px;
  line-height: 2rem;
  letter-spacing: 1px;
  color: rgb(33, 33, 175);
}

.event-list a:hover {
  color: #42b983;
}
</style>
