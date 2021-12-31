<template>
<div class="loading">
  <img src="@/assets/loading.png">
  <p class="title">{{ title }}</p>
</div>
<div class="mask"></div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Loading',
  setup () {
    const title = ref('加载中...');
    const setTitle = val => {
      title.value = val;
    }
    return { title, setTitle };

  },
}
</script>

<style lang="scss" scoped>
.loading{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  img{
    width: 80px;
    height: 80px;
  }
  .title{
    text-align: center;
  }
}
.mask{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
}
</style>
