import { default as _axios, AxiosInstance } from 'axios'

const axiosInstance = (function () {
  let instance: AxiosInstance

  function init() {
    instance = _axios.create({ withCredentials: true, baseURL: 'https://tilog.life/' })
  }

  return {
    getInstance: function () {
      if (!instance) init()
      return instance
    },
  }
})()

const axios = axiosInstance.getInstance()

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
})

export { axios }
