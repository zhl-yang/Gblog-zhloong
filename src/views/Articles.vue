<template>
  <div class="articles">
    <banner></banner>
    <div class="site-content animate">
      <!-- 文章目录 -->
      <div id="article-menus">
        <menu-tree :menus="menus" child-label="child"></menu-tree>
      </div>
      <main class="site-main" id="top-select">
        <article class="hentry">
          <!-- 文章头部 -->
          <header class="entry-header">
            <!-- 标题输出 -->
            <h1 class="entry-title">{{ article.title }}</h1>
            <hr>
            <div class="breadcrumbs">
              <div id="crumbs">最后更新时间：{{ article.createTime }}</div>
            </div>
          </header>
          <img class="entry-banner" :src="article.banner"/>
          <!-- 正文输出 -->
          <div class="entry-content" v-highlight>
            <div v-html="article.contentHtml"></div>
          </div>

          <!-- 文章底部 -->
          <section-title>
            <footer class="post-footer">
              <!-- 阅读次数 -->
              <div class="post-like">
                <i class="iconfont iconeyes"></i>
                <span class="count">{{ article.viewNum }}</span>
              </div>
              <!--              <div class="donate" @click="showDonate=!showDonate">-->
              <!--                <span>赏</span>-->
              <!--                <ul class="donate_inner" :class="{'show':showDonate}">-->
              <!--                  <li class="wedonate"><img src="http://cdn.fengziy.cn/gblog/wexin_pay.png">-->
              <!--                    <p>微信</p></li>-->
              <!--                  <li class="alidonate"><img src="http://cdn.fengziy.cn/gblog/ali_pay.jpg">-->
              <!--                    <p>支付宝</p></li>-->
              <!--                </ul>-->
              <!--              </div>-->
              <div class="post-tags" v-if="tags.length">
                <i class="iconfont iconcategory"></i>
                <router-link v-for="item in tags" :key="item.tagName" :to="`/tags/${item.id}/${item.tagName}`">
                  {{ item.tagName }}
                </router-link>
              </div>
            </footer>
          </section-title>

          <!--声明-->
          <div class="open-message">
            <p>声明：本博客的数据由个人上传，不代表本博客立在任何一个观点上，也不代表本博客对任何一个人的观点。</p>
            <p>转载：转载请注明原文链接 - <a :href="getLocationHref" target="_blank">{{ article.title }} </a></p>
          </div>
          <!--评论-->
          <div class="comments">
            <comment
                v-for="(c, index) in comments"
                :key="c.id"
                :comment="c"
                :article-id="article.id"
                :index="index"
                :root-comment-counts="comments.length"
            ></comment>
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/banner'
import sectionTitle from '@/components/section-title'
import comment from '@/components/comment'
import menuTree from '@/components/menu-tree'
import {viewArticle} from '../api/article'
import {getCommentsByArticle} from '../api/comment'

export default {
  name: 'articles',
  data() {
    return {
      showDonate: false,
      comments: [],
      menus: [],
      article: {
        id: '',
        title: '',
        commentNum: 0,
        viewNum: 0,
        summary: '',
        createTime: '',
        content: '',
      },
      tags: [],
    }
  },
  components: {
    Banner,
    sectionTitle,
    comment,
    menuTree
  },
  computed: {
    getLocationHref() {
      let href = window.location.href
      return href;
    }
  },
  methods: {
    getComment(id) {
      getCommentsByArticle(id)
          .then((data) => {
            this.comments = data.data
          })
          .catch((error) => {
            if (error !== 'error') {
              alert('评论加载失败')
            }
          })
    },

    /**
     * 获取文章详情
     */
    getArticle(id) {
      let that = this
      viewArticle(id)
          .then((data) => {
            Object.assign(that.article, data.data.archives)
            Object.assign(that.tags, data.data.tags)
          })
          .catch((error) => {
            if (error !== 'error') {
              that.$message({
                type: 'error',
                message: '文章加载失败',
                showClose: true,
              })
            }
          })
    },
    goTop(){
      setTimeout(() => {
        let toDocument = document.querySelector('#top-select')
        toDocument.scrollIntoView({ behavior:'smooth' })
      }, 1500)
    }

  },
  mounted() {
    let params = this.$route.params
    this.getArticle(params.id)
    this.getComment(params.id)
    this.goTop()
  },
}
</script>
<style scoped lang="less">
.site-content {
  position: relative;

  .site-main {
    padding: 80px 0 0 0;
  }
}

#article-menus {
  position: sticky;
  top: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .1);
  border-radius: 3px;
  padding: 15px;
  width: 300px;
  transform: translateX(-120%) translateY(150px);
  font-size: 14px;
  display: none;
}

article.hentry {
  word-break: break-all;
  word-wrap: break-word;

  .entry-header {
    .entry-title {
      font-size: 23px;
      font-weight: 600;
      color: #737373;
      margin: 0.67em 0;


      &:before {
        content: "#";
        margin-right: 6px;
        color: #d82e16;
        font-size: 20px;
        font-weight: 600;
      }
    }

    hr {
      height: 1px;
      border: 0;
      background: #EFEFEF;
      margin: 15px 0;
    }

    .breadcrumbs {
      font-size: 14px;
      color: #D2D2D2;
      text-decoration: none;
      margin-bottom: 30px;
    }
  }

  .entry-banner {
    margin: 0 auto;
    width: 100%;
  }

  .entry-content {

  }

  footer.post-footer {
    width: 100%;
    padding: 20px 10px;
    margin-top: 30px;
    height: 65px;
    position: relative;

    i {
      font-size: 18px;
      margin-right: 5px;
    }

    .post-like {
      float: right;
      margin: 7px 0 0 20px;
    }

    .post-share {
      float: right;
      list-style: none;
      margin-right: 20px;
    }

    .donate {
      float: left;
      line-height: 36px;
      border-radius: 100%;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      border: 1px solid #2B2B2B;

      &:hover {
        border: 1px solid goldenrod;

        span {
          color: goldenrod;
        }
      }

      span {
        color: #2B2B2B;
        padding: 10px;
        position: relative;
        cursor: pointer;
      }

      .donate_inner {
        display: none;
        margin: 0;
        list-style: none;
        position: absolute;
        left: 80px;
        top: -40px;
        background: #FFF;
        padding: 10px;
        border: 1px solid #ddd;
        box-shadow: 0 2px 6px rgba(0, 0, 0, .08);
        border-radius: 3px;

        &.show {
          display: block;
        }

        li {
          float: left;
        }

        img {
          width: 100px;
        }

        p {
          text-align: center;
          font-size: 15px;
          color: #D2D2D2;
          line-height: 1rem;
        }
      }

      .donate_inner:after, .donate_inner:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 45%;
        margin-left: -8px;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid #fff;
      }

      .donate_inner:before {
        left: -1px;
        border-right: 8px solid #ddd;
      }

    }

    .post-tags {
      font-size: 15px;
      color: #10de13;
      letter-spacing: 1px;
      font-weight: 800;
      border: 4px;

      a {
        background-color: #edf8f2;
        margin: 10px;
        height: 20px;
        line-height: 19px;
        padding: 7px 6px;
        border-color: #daf1e6;
        border-radius: 5px;
      }

      a:hover {
        color: #ff6d6d;
      }
    }
  }

  .open-message {
    margin: 50px 0;
    position: relative;
    background: #2B2B2B;
    padding: 10px 30px;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;

    &:after {
      content: "";
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #2B2B2B;
      position: absolute;
      top: -8px;
      left: 48%;
    }

    p {
      margin: 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    a {
      color: #A0DAD0;
      padding: 0 5px;
    }
  }
}

@media (max-width: 800px) {
  #article-menus {
    display: none;
  }
}
</style>
