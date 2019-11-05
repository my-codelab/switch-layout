<template>
  <div>
    <h1>
      Dynamic layout switching with Nuxtjs
    </h1>
    <div class="my-5">
      <span class="button mr-4" @click="switchLayout('default')">Default</span>
      <span class="button" @click="switchLayout('fixed')">Fixed</span>
    </div>
    <p>Current layout: {{ layout }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis necessitatibus officia. Ab dolor dolorum eos, est ex ipsam maxime minima minus molestias necessitatibus, nesciunt odio quae reiciendis, totam ut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem hic non omnis quis sapiente totam! A atque deserunt expedita inventore libero nobis perferendis quo totam. Corporis cupiditate sit temporibus.</p>
  </div>
</template>

<script>

export default {
  layout (context) {
    return context.store.state.layout.name
  },
  computed: {
    layout () {
      return this.$store.state.layout.name
    }
  },
  methods: {
    switchLayout (newLayout) {
      this.$store.commit('layout/setName', newLayout)
      this.$router.push({ path: '/', query: { foo: Math.random() } })
    }
  }
}
</script>
