import { PrimitiveAtom, useAtomValue } from 'jotai'

import React, { createContext, useEffect } from 'react'

import { useModal } from '../model'
import type { Modal } from '../types'
import { useLocation } from 'react-router-dom'

/**
 * Generates the comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {Object} modalProps - The properties for the modal.
 * @param {PrimitiveAtom<Modal>} modalProps.modalAtom - The atom for the modal.
 * @return {JSX.Element | null} The rendered modal item or null.
 */

export const ModalItemContext = createContext<{ onClose: () => void; handleSubmit: (data?: any) => void }>({
  onClose: () => {},
  handleSubmit: () => {},
})

export const ModalItem = (modalProps: { modalAtom: PrimitiveAtom<Modal> }) => {
  // const location = useLocation()

  const { modalAtom } = modalProps
  const modal = useAtomValue(modalAtom)
  console.log('%csrc/shared/lib/modal/ui/modal-item.tsx:27 modal', 'color: #007acc;', modal)
  const { onSubmit, ...restProps } = modal.props || {}

  const Component = modal.Component

  const { closeModal } = useModal()

  const onClose = () => {
    closeModal(modalAtom)
    modal.props?.onClose?.()
  }

  const handleSubmit = (data?: any) => {
    closeModal(modalAtom)
    onSubmit?.(data)
  }

  // useEffect(() => {
  //   if (location.pathname != modal.pathName) {
  //     onClose()
  //   }
  // }, [location.pathname == modal.pathName])

  return (
    <ModalItemContext.Provider value={{ onClose, handleSubmit }}>
      <Component {...restProps} onClose={onClose} onSubmit={handleSubmit} />
    </ModalItemContext.Provider>
  )
}
