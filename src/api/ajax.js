import axios from 'axios'
import qs from 'qs'

/****** 创建axios实例 ******/
const service = axios.create({
    baseURL: '',  // api的base_url
    timeout: 5000  // 请求超时时间
});
service.interceptors.request.ues(function (config) {
    config.method === 'post'
        ? config.data = qs.stringify({ ...config.data })
        : config.params = { ...config.params };
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    return config
}, error => {  //请求错误处理
    
    Promise.reject(error)
});


/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => {  //成功请求到数据
        //这里根据后端提供的数据进行对应的处理
        if (response.data.result === 'TRUE') {
            return response.data;
        } else {
           
        }
    },
    error => {  //响应错误处理
    
        return Promise.reject(error)
    }
);
export default service