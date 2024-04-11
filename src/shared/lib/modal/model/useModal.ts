import { useMolecule } from 'bunshi/react'
import { PrimitiveAtom, getDefaultStore, useSetAtom } from 'jotai'

import type { InjectedProps, Modal, OpenModalOption } from '../types'
import { ModalMol } from './modal-atoms'
import { useLocation } from 'react-router-dom'

export const useModal = () => {
  const { openedModalAtomsAtom } = useMolecule(ModalMol)
  const locationc = useLocation()
  const defaultStore = getDefaultStore()

  const dispatch = useSetAtom(openedModalAtomsAtom, { store: defaultStore })

  const openModal = <T extends React.ComponentType<any>>(
    Component: T,
    props?: React.ComponentProps<T & InjectedProps>,
    option?: OpenModalOption,
  ) => {
    dispatch({ type: 'insert', value: { Component, props: props, pathName: locationc.pathname } })
  }

  const closeModal = (atom: PrimitiveAtom<Modal>) => {
    dispatch({ type: 'remove', atom: atom })
  }

  return { openModal, closeModal }
}
