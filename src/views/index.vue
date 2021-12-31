<template>
<div v-loading="loading">

</div>

</template>

<script>
  import { ref, onMounted } from 'vue';
  export default {
    name: 'index',
    setup () {
      const loading = ref(true);

      onMounted(() => {
        setTimeout(() => {
          loading.value = false;
          console.log('111');
        }, 1000)
      })

      return { loading }
    }
  }
</script>

<style scoped>

</style>
