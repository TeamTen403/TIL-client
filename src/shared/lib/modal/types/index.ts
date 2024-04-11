export type Modal = {
  Component: ModalComponent
  props?: ModalProps
  pathName?: string | null
  isOpen?: boolean
  option?: OpenModalOption
}
export type ModalComponent = React.ComponentType<any & InjectedProps>
export type ModalProps = React.ComponentProps<any & InjectedProps>

export type InjectedProps = { onSubmit?: () => void; onClose?: () => void; isOpen?: boolean }
export type OpenModalOption = { anchor?: string }
