<template>
  <div>
    <div v-if="!handleClickStatus" class="music163-bt" @click="handleClick()">
      <span>网易云音乐</span>
    </div>
    <div v-else class="music163">
      <div class="music163-close" @click="handleClickStatus = false">关闭</div>
      <iframe src="//music.163.com/outchain/player?type=0&id=78044620&auto=0&height=430" width="320"
              height="250"
      ></iframe>

    </div>
  </div>
</template>
<script>
export default {
  name: "menuTree",
  data() {
    return{
      handleClickStatus: false,
    }
  },
  methods: {
    handleClick(){
      this.handleClickStatus = true
    }
  }
}
</script>

<style scoped lang="less">
.music163-bt{
  background-color: #d05a4b;
  border-radius: 5px;
  bottom: 309px;
  color: #fff;
  font-size: 12px;
  left: 0;
  margin-left: -45px;
  padding: 5px 4px 5px 5px;
  position: fixed;
  transition: margin-left 1s;
  width: 64px;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  float: right;
  text-align: right;
  cursor: pointer;
}
.music163-bt:hover {
  margin-left: -25px;
}
.music163 {
  position: fixed;
  border: 0px;
  left: 0%;
  bottom: 310px;
  z-index: 2;
}
.music163-close {
  background-color: #fff;
  border-radius: 50%;
  color: #d05a4b;
  font-size: 12px;
  height: 12px;
  line-height: 12px;
  margin-left: -5px;
  margin-top: -5px;
  padding: 5px;
  position: absolute;
  right: 0;
  top: 0;
  width: 12px;
  cursor: pointer;
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