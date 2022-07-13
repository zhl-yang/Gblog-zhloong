import request from '@/utils/request'


export function fetchFriend() {
  return request({
    url: '/friend',
    method: 'get',
    params: {}
  })
}


export function addFriend(friend) {
  return request({
    url: '/friend',
    method: 'put',
    data: friend
  })
}
