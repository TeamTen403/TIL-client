import { useMutation } from '@tanstack/react-query'

import { IJoinData } from '../types'
import { axios } from '@/shared/lib'

export const join = async (data: IJoinData) => {
  return axios('api/tiler/join', { method: 'POST', data: data }).then(r => r.data)
}

export const useJoinMutation = () => {
  return useMutation({ mutationFn: join })
}
