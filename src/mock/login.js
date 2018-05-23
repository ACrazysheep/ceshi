import Mock from 'mockjs'
import { param2Obj } from '@/utils'

export default {
    loginByUsername: config => {
        const { username } = JSON.parse(config.body)
        return loginMap[username]
    },
    getUserInfo: config => {
        const { token } = param2Obj(config.url)
        return userMap[token]
    }
}


const loginMap = {
    admin: Mock.mock({
        "code": 0,
        "data": {
            "token": "admin"
        }
    }),
    cfo: Mock.mock({
        "code": 0,
        "data": {
            "token": "cfo"
        }
    }),

    other: Mock.mock({
        "code": 0,
        "data": {
            "token": "other"
        }
    })
}

const userMap = {
    admin: Mock.mock({
        "code": 0,
        "data": {
            'roles': ['basicinfo', 'financialinfo', 'gamelist'],
            "name": "admin",
        },
    }),
    cfo: Mock.mock({
        "code": 0,
        "data": {
            'roles': ['basicinfo', 'financialinfo'],
            "name": "cfo",
        },
        'status|1': ['0', '1', '2'],
    }),
    other: Mock.mock({
        "code": 0,
        "data": {
            'roles': ['basicinfo', 'gamelist'],
            "name": "other",
        },
    }),
}