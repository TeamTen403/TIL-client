export interface IJoinData {
  email: string
  passwd: string
  nickName: string
  job: string
  authProvider: 'TIL_EMAIL' | 'EMAIL' | 'KAKAO' | 'GOOGLE'
}

export interface ISignInData {
  email: string
  passwd: string
}
