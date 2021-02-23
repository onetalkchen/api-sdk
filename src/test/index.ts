import create, { ApiConfig } from '../'
import User from '../modules/User'
// 方式1
ApiConfig.AppID = 'tsy'
ApiConfig.Secret = 'dxzef23d2dxs1'
ApiConfig.Key = '3F3fw24F5ef1sz5'
//可以手动指定Api服务地址，默认为https://v1.api.tansuyun.cn
ApiConfig.Host = 'http://localhost:3252'

// User.AuthApi.login()
