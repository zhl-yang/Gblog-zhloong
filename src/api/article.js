import request from '@/utils/request'

export function getArticles(page) {
  return request({
    url: '/article/list',
    method: 'post',
    data: {
      current: page.pageNo,
      size: page.pageSize,
      article: page.article,
    },
  })
}

export function getHotArtices() {
  return request({
    url: '/article/hot',
    method: 'get',
  })
}

export function getNewArtices() {
  return request({
    url: '/article/new',
    method: 'get',
  })
}

export function viewArticle(id) {
  return request({
    url: `/article/view/${id}`,
    method: 'get',
  })
}

export function removeArticle(id) {
  return request({
    url: `/article/delete/${id}`,
    method: 'get',
  })
}

export function getArticleById(id) {
  return request({
    url: `/article/${id}`,
    method: 'get',
  })
}

export function publishArticle(article) {
  return request({
    url: '/article/publish',
    method: 'post',
    data: article,
  })
}

export function listArchives() {
  return request({
    url: '/article/archives',
    method: 'get',
  })
}

/*
 * 以下俩接口暂时未用到
 * 可通过/article/list接口实现
 */
export function getArticlesByCategory(id) {
  return request({
    url: `/article/category/${id}`,
    method: 'get',
  })
}

export function getArticlesByTag(id) {
  return request({
    url: `/article/tag/${id}`,
    method: 'get',
  })
}
