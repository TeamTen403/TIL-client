import axios from 'axios'
import { ISignInData } from '..'
import { useMutation } from '@tanstack/react-query'

export const signin = async (data: ISignInData) => {
  return axios('http://115.85.180.123:9090/api/tiler/login', { method: 'POST', data: data }).then(r => r.data)
}

export const useSigninMutation = () => {
  return useMutation({ mutationFn: signin })
}
