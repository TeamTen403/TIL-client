import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { IJoinData } from '../types'

export const join = async (data: IJoinData) => {
  return axios('http://115.85.180.123:9090/api/tiler/join', { method: 'POST', data: data }).then(r => r.data)
}

export const useJoinMutation = () => {
  return useMutation({ mutationFn: join })
}
