'use client'

import { animated, useTransition } from '@react-spring/web'
import { useMolecule } from 'bunshi/react'
import { getDefaultStore, useAtomValue } from 'jotai'
import { createPortal } from 'react-dom'

import { ModalMol } from '../model/modal-atoms'
import { ModalItem } from './modal-item'

/**
 * Renders the global modal component.
 *
 * @return {JSX.Element | null} The global modal component if the modal element is present, otherwise null.
 */
export const Modal = (): JSX.Element | null => {
  const mol = useMolecule(ModalMol)

  const modalElement = document?.getElementById('modal')
  console.log('%csrc/shared/lib/modal/ui/modal.tsx:20 modalElement', 'color: #007acc;', modalElement)
  const defaultStore = getDefaultStore()
  const openedModals = useAtomValue(mol.openedModalAtomsAtom, { store: defaultStore })
  console.log('%csrc/shared/lib/modal/ui/modal.tsx:23 openedModals', 'color: #007acc;', openedModals)
  const transition = useTransition(openedModals, {
    keys: atom => `${atom}`,
    from: { transform: 'translate3d(0,100%,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0%,0)', opacity: 0.5 },
    leave: { transform: 'translate3d(0,100%,0)', opacity: 0 },
  })

  console.log('%csrc/shared/lib/modal/ui/modal.tsx:31 transition', 'color: #007acc;', transition);

  if (modalElement) {
    return (
      <>
        {createPortal(
          <>
            {transition(
              ({ transform, opacity }, atom) =>
                atom && (
                  <div>
                    <animated.div
                      className={'fixed top-0 h-full w-full bg-[#000000]'}
                      style={{ zIndex: 999, opacity: opacity.to(value => value) }}
                    />
                    <animated.div
                      className={'fixed top-0 z-[999] flex h-full w-full justify-center'}
                      style={{ transform: transform.to(value => value) }}
                    >
                      <ModalItem modalAtom={atom} key={`${atom}`} />
                    </animated.div>
                  </div>
                ),
            )}
          </>,
          modalElement,
        )}
      </>
    )
  }
  return null
}
