<template>
  <div>
    <iframe class="music163" src="//music.163.com/outchain/player?type=0&id=78044620&auto=0&height=430" width="320"
            height="250"
    ></iframe>
<!--    <iframe class="live2dHtml" src="//qcloudtest-1255546925.cos.ap-guangzhou.myqcloud.com/live2d.html" width="320"-->
<!--            height="250"></iframe>-->
  </div>
</template>

<style scoped lang="less">

.music163 {
  position: fixed;
  border: 0px;
  left: 0%;
  bottom: 0px;
  z-index: 2;
}
.live2dHtml{
  height: 500px;
  position: fixed;
  z-index: 3;
  bottom: 240px;
}

/******/
@media (max-width: 800px) {
  .music163{
    display: none;
  }
  .live2dHtml{
    display: none;
  }
}
</style>