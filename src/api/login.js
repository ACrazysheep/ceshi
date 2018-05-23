import request from '@/utils/request'
import { loginApi, userInfoApi } from './apipath'

export function login(username, password) {
    return request({
        url: loginApi,
        method: 'post',
        data: {
            username,
            password
        }
    })
}

export function getInfo(token) {
    return request({
        url: userInfoApi,
        method: 'get',
        params: { token }
    })
}

// export function logout() {
//     return request({
//         url: logoutApi,
//         method: 'post'
//     })
// }