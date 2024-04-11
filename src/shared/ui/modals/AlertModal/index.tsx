import Dialogue from './Dialogue'
import ModalBottom from './ModalBottom'

const AlertModal = (props: { onClose?: () => void; message: React.ReactNode }) => {
  return (
    <Dialogue>
      <Dialogue.Header title={props.message} />
      <ModalBottom>
        <ModalBottom.Button variant="primary" onClick={props.onClose}>
          확인
        </ModalBottom.Button>
      </ModalBottom>
    </Dialogue>
  )
}

export default AlertModal
