import request from '@/utils/request'

export function fetchList(page) {
    return request({
        url: '/post/list',
        method: 'post',
        data: {
            current: page.pageNo,
            size: page.pageSize,
            article: page.article,
        },
    })
}

export function fetchFocus() {
    return request({
        url: '/focus/list',
        method: 'get',
        params: {}
    })
}

export function fetchCategory() {
    return request({
        url: '/category',
        method: 'get',
        params: {}
    })
}

export function fetchTags() {
    return request({
        url: '/tags',
        method: 'get',
        params: {}
    })
}

export function fetchSocial() {
    return request({
        url: '/social',
        method: 'get',
        params: {}
    });
}

export function fetchSiteInfo() {
    return request({
        url: '/site',
        method: 'get',
        params: {}
    })
}

