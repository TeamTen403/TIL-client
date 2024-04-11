import { useContext } from 'react'

import { ModalItemContext } from '../ui/modal-item'

export const useModalContext = () => {
  const modalItemContext = useContext(ModalItemContext)

  return {
    ...modalItemContext,
  }
}
