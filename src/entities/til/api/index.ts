import { axios } from '@/shared/lib'
import { useMutation, useQuery } from '@tanstack/react-query'

import _ from 'lodash'

export const postTilogImage = async (params: { image: File }) => {
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

export const postTilog = async (data: { title: string; content: string; thumbnail: string; tagId: string }) => {
  return axios('http://115.85.180.123:9090/api/tilog', {
    method: 'POST',
    data: data,
  }).then(
    r =>
      r.data as {
        code: 'string'
        data: {
          id: 0
          title: 'string'
          tilerId: 'string'
          nickname: 'string'
          thumbnailUrl: 'string'
          tagName: 'string'
          likeCount: 0
          regYmdt: '2024-03-30T02:04:28.752Z'
          modYmdt: '2024-03-30T02:04:28.752Z'
          isLiked: true
          isBookmarked: true
        }
      },
  )
}

export const usePostTilogMutation = () => {
  return useMutation({ mutationFn: postTilog })
}

export const getFeed = async () => {
  return axios(`/api/tilog/feed`).then(
    r =>
      r.data as {
        code: 'SUCCESS'
        data: {
          popularList: [
            {
              tilogId: number
              title: string
              tilerEmail: string
              nickname?: string
              thumbnailUrl?: string
              tagName: string
              likeCount: number
              regYmdt: string
              modYmdt: string
              isLiked: boolean
              isBookmarked: boolean
            },
          ]
          tilogList: []
        }
      },
  )
}

export const useGetFeed = () => {
  return useQuery({ queryKey: ['feed'], queryFn: getFeed })
}
