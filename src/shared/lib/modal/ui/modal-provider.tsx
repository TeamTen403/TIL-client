import { ScopeProvider } from 'bunshi/react'

import { ModalScope } from '../model/modal-atoms'
import { Modal } from './modal'

export const ModalProvider = ({ children }: React.PropsWithChildren<any>) => {
  return (
    <ScopeProvider scope={ModalScope} uniqueValue>
      {children}
      <Modal />
    </ScopeProvider>
  )
}
