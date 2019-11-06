<template>
  <div>
    <h1>
      Dynamic layout switching with Nuxtjs
    </h1>
    <p>Click button to switch the layout:</p>
    <div>
      <span class="button mr-4" @click="switchLayout('default')">
        {{ layout === 'default' ? '✓' : '' }} Default
      </span>
      <span class="button" @click="switchLayout('fixed')">
        {{ layout === 'fixed' ? '✓' : '' }} Fixed
      </span>
    </div>
    <p class="mt-8">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis necessitatibus officia. Ab dolor dolorum eos, est ex ipsam maxime minima minus molestias necessitatibus, nesciunt odio quae reiciendis, totam ut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem hic non omnis quis sapiente totam! A atque deserunt expedita inventore libero nobis perferendis quo totam. Corporis cupiditate sit temporibus.
    </p>
    <p class="mt-8">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis necessitatibus officia. Ab dolor dolorum eos, est ex ipsam maxime minima minus molestias necessitatibus, nesciunt odio quae reiciendis, totam ut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem hic non omnis quis sapiente totam! A atque deserunt expedita inventore libero nobis perferendis quo totam. Corporis cupiditate sit temporibus.
    </p>
  </div>
</template>

<script>

export default {
  layout (context) {
    // read layout name from vuex store
    return context.store.state.layout.name
  },
  computed: {
    layout () {
      return this.$store.state.layout.name
    }
  },
  methods: {
    switchLayout (newLayout) {
      // write layout name to vuex store
      this.$store.commit('layout/setName', newLayout)
      // to change the layout the page have to be reloaded
      this.$router.push({ path: '/', query: { foo: Math.random() } })
    }
  }
}
</script>
