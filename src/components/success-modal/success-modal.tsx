import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type MySuccessModalProps = {
  show: boolean;
  onHide: () => void;
};

function MySuccessModal(props: MySuccessModalProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4>Мы скоро свяжемся с вами!</h4>
        <p>
          ...а пока вы ждете нашего звонка мы предоставили вам доступ к этой камере на целые сутки!<br/>
          Также вам доступен архив камеры за последние 3 дня!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Смотреть</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MySuccessModal;
