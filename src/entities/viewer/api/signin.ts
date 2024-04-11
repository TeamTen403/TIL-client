import { axios } from '@/shared/lib'
import { ISignInData } from '..'
import { useMutation } from '@tanstack/react-query'

export const signin = async (data: ISignInData): Promise<{ data: { token: string } }> => {
  return axios('api/tiler/sign-in', { method: 'POST', data: data }).then(r => r.data)
}

export const useSigninMutation = () => {
  return useMutation({
    mutationFn: signin,
    onSuccess: data => {
      localStorage.setItem('token', data.data.token)
    },
  })
}
