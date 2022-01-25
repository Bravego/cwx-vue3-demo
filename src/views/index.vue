<template>
<div class="test">
  <loading ref="loading"></loading>
</div>

</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  name: 'index',
  setup () {
    const title = ref('加载中...')
    const loading = ref(true);
    const imgSrc = require('@/assets/loading.png');

  // onMounted(() => {
  //   setTimeout(() => {
  //     loading.value = false;
  //     console.log('111');
  //   }, 1000)
  // })

    return { title, imgSrc, loading }
  },
  mounted () {
    this.$refs.loading.show(this.title, this.imgSrc, 2000);
  }
}
</script>

<style scoped>
    .test{
        height: 500px;
    }

</style>
