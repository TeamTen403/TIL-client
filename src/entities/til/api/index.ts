import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import _ from 'lodash'

export const postTilogImage = (params: { image: File }) => {
  const formData = new FormData()

  _.forEach(params, (value, key) => {
    if (!!value) {
      formData.append(key, value)
    }
  })

  return axios('http://115.85.180.123:9090/api/tilog/image', {
    method: 'POST',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then(r => r.data as { code: string; data: { fileName: string; url: string } })
}

export const usePostTilogImageMutation = () => {
  return useMutation({ mutationFn: postTilogImage })
}
