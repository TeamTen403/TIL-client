import { confirmAlert as c, type ReactConfirmAlertProps } from 'react-confirm-alert' //
const defaultOptions = {
  title: 'Title',
  message: 'Message',
  buttons: [
    {
      label: 'Yes',
      onClick: () => alert('Click Yes'),
    },
    {
      label: 'No',
      onClick: () => alert('Click No'),
    },
  ],
  closeOnEscape: true,
  closeOnClickOutside: true,
  keyCodeForClose: [8, 32],
  willUnmount: () => {},
  afterClose: () => {},
  onClickOutside: () => {},
  onKeypress: () => {},
  onKeypressEscape: () => {},
  overlayClassName: 'overlay-custom-class-name',
}

export const confirmAlert = ({ options = defaultOptions }: { options: ReactConfirmAlertProps }) => c(options)
