import { createScope, molecule } from 'bunshi/react'
import { atom } from 'jotai'
import { splitAtom } from 'jotai/utils'

import type { Modal, ModalComponent, ModalProps } from '../types'

export const ModalScope = createScope({})
export const ModalMol = molecule((_, scope) => {
  scope(ModalScope)
  const openedModalsAtom = atom<Array<Modal>>([])
  const openedModalAtomsAtom = splitAtom(openedModalsAtom)

  const openModalAtom = atom(null, (_get, set, modalComponent: ModalComponent, props: ModalProps, loc?: string) => {
    set(openedModalsAtom, modals => [...modals, { Component: modalComponent, props: props, loc: loc }])
  })

  const closeModalAtom = atom(null, (_get, set, Component: ModalComponent) => {
    set(openedModalsAtom, modals => modals.filter(modal => modal.Component !== Component))
  })

  return { openedModalsAtom, openedModalAtomsAtom, openModalAtom, closeModalAtom }
})
