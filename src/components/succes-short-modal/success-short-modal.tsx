import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type MySuccessShortModalProps = {
  show: boolean;
  onHide: () => void;
};

function MySuccessShortModal(props: MySuccessShortModalProps) {
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
        <h4>Приятного просмотра!</h4>
        <p>
          Мы предоставили вам доступ к этой камере на целые сутки!<br/>
          Также вам доступен архив камеры за последние 3 дня!<br/>
          Если вы хотите иметь постоянный доступ к камере и архив за целую неделю,<br/>
          звоните 8 (921) 4-555-777!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Смотреть</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MySuccessShortModal;
