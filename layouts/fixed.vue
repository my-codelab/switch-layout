<template>
  <div class="container p-20 h-full bg-white mx-auto">
    <nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'bg-gray-200 h-full'
      }
    }
  }
}
</script>
