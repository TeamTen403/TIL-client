// import { SlugPageParams, UsernamePageParams } from './react-router.types'

export const pathKeys = {
  root: '/',
  challenge() {
    return pathKeys.root.concat('challenge/')
  },
  mypage() {
    return pathKeys.root.concat('my-page/')
  },
  write() {
    return pathKeys.root.concat('write/')
  },
  feed() {
    return pathKeys.root.concat('feed/')
  },
  home() {
    return pathKeys.root
  },
  page404() {
    return pathKeys.root.concat('404/')
  },
  option() {
    return pathKeys.write().concat('option')
  },
}
