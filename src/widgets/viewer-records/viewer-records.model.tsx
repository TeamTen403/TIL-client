import { molecule } from 'bunshi'
import { atom } from 'jotai'

export const ViewerRecordsMol = molecule(() => {
  const isOpenAtom = atom(false)
  return {
    atom: { isOpenAtom },
  }
})
