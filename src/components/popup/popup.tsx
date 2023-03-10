import React, { useEffect, useState } from 'react';
import { Location } from '../../types/types';
import Player from '../player/player';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MySuccessModal from '../success-modal/success-modal';
import MySuccessShortModal from '../succes-short-modal/success-short-modal';

type PopupProps = {
  handleCloseButtonClick: () => void;
  location: Location;
  instaAccess: boolean;
}


function Popup({handleCloseButtonClick, location, instaAccess}: PopupProps) {

  const [access, setAccess] = useState(false);
  const [dialog1, setDialog1] = useState(false);
  const [dialog2, setDialog2] = useState(false);
  const [dialog3, setDialog3] = useState(false);
  const [isNotFullAccess, setIsNotFullAccess] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [shortModalShow, setShortModalShow] = useState(false);

  useEffect(() => {
    setAccess(false);
    setDialog1(true);
    setDialog2(false);
    setDialog3(false);
    setIsNotFullAccess(false);

    if(instaAccess) {
      setAccess(true);
      setDialog1(false);
    }
  }, [location, instaAccess]);

  return (
    <>
      <MySuccessModal
        show={modalShow}
        onHide={() => {setModalShow(false);}}
      />
      <MySuccessShortModal
        show={shortModalShow}
        onHide={() => {setShortModalShow(false);}}
      />
      <div className="player-balloon">
        <span id="balloon_close" onClick={handleCloseButtonClick} />
        <div className="balloon-head mt-2">
          <a href="#">Дворовая камера: {location.address}</a>
        </div>
        {access ? <Player /> : ''}
        <div style={{ margin: '20px 20px' }}>
          {dialog1 ?
            <div className="d-grid gap-2">
              <img src={`./media/cameras/${location.id}.jpg`} alt='Камера' width={470}></img>
              <Button variant="primary" size="lg" className="mt-2" onClick={() => { setDialog1(false); setDialog2(true);} }>Постоянный доступ</Button>{' '}
              <Button variant="primary" size="lg" onClick={() => { setDialog1(false); setDialog2(true); setIsNotFullAccess(true);} }>Временный доступ</Button>{' '}
            </div>
            : ''}
          {dialog2 ?
            <Form>
              <Form.Group className="mb-3 mt-5">
                <Form.Label>Как вас зовут?</Form.Label>
                <Form.Control type="text" placeholder="Введите имя" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ваш телефон</Form.Label>
                <Form.Control type="tel" placeholder="+7(900)987-65-43" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Согласен на обработку персональных данных" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={() => { setDialog2(false); setDialog3(true);} }>
                Отправить
              </Button>
            </Form>
            : ''}
          {dialog3 ?
            <Form>
              <Form.Group className="mb-3 mt-5">
                <Form.Label>Введите код из смс</Form.Label>
                <Form.Control type="text" placeholder="Ваш код" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    setDialog3(false);
                    setAccess(true);
                    if(!isNotFullAccess) {
                      setModalShow(true);
                    } else {
                      setShortModalShow(true);
                    }
                  }}
                >
                  Подтвердить
                </Button>
              </div>
            </Form>
            : ''}
        </div>
      </div>
    </>
  );
}

export default Popup;
