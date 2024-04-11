import axios from 'axios'
import { ISignInData } from '..'
import { useMutation } from '@tanstack/react-query'

export const signin = async (data: ISignInData): Promise<{ data: { token: string } }> => {
  return axios('http://115.85.180.123:9090/api/tiler/sign-in', { method: 'POST', data: data }).then(r => r.data)
}

export const useSigninMutation = () => {
  return useMutation({
    mutationFn: signin,
    onSuccess: data => {
      localStorage.setItem('token', data.data.token)
    },
  })
}
