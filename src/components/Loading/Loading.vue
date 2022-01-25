<template>
<div class="loading" v-show="isShow">
  <img :src="src">
  <p class="title">{{ title }}</p>
</div>
<div class="mask" v-show="isShow"></div>
</template>

<script>
import { toRefs, reactive } from 'vue';

export default {
  name: 'Loading',
  setup () {
    // const title = ref('');
    // const src = '';
    // const isShow = ref(false);
    const options = reactive({
      title: '',
      src: '',
      isShow: false,
      show: ''
    });
    options.show = (val, imgSrc, duration) => {
      options.title = val;
      options.src = imgSrc;
      options.isShow = true;
      setTimeout(() => {
        options.isShow = false;
      }, duration)
    }


    return { ...toRefs(options) };

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
.myRelative {
  position: relative;
}
</style>
