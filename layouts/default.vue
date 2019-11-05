<template>
  <div class="p-20 bg-white">
    <nuxt />
  </div>
</template>

<script>

export default {
  head () {
    return {
      bodyAttrs: {
        class: 'bg-gray-200'
      }
    }
  }
}
</script>
