
import { LeafletMouseEvent } from 'leaflet';
import { useState } from 'react';
import Map from '../components/map/map';
import Popup from '../components/popup/popup';
import { Location } from '../types/types';

function Main() {

  const myLocations: Location[] = [
    {
      id: 1,
      address: 'ул. Ватутина, 28',
      coords: [
        61.781797,
        34.329478
      ]
    },
    {
      id: 2,
      address: 'ул. Ватутина, 26',
      coords: [
        61.782350,
        34.329442
      ]
    }
  ];

  const locations: Location[] = [
    {
      id: 3,
      address: 'ул. Чапаева, 44',
      coords: [
        61.783733,
        34.322489
      ]
    },
    {
      id: 4,
      address: 'ул. Правды, 1',
      coords: [
        61.782776,
        34.385416
      ]
    },
    {
      id: 5,
      address: 'наб. Древлянская, 22А',
      coords: [
        61.779883,
        34.357146
      ]
    },
    {
      id: 6,
      address: 'ул. Паустовского, 11Б',
      coords: [
        61.758055,
        34.326334
      ]
    },
    {
      id: 7,
      address: 'ул. Генерала Судакова, 7',
      coords: [
        61.753304,
        34.363066
      ]
    },
    {
      id: 8,
      address: 'ул. Генерала Фролова, 14',
      coords: [
        61.765173,
        34.370971
      ]
    },
    {
      id: 9,
      address: 'ул. Ригачина, 44',
      coords: [
        61.777910,
        34.408315
      ]
    },
    {
      id: 10,
      address: 'ул. Свирская, 11',
      coords: [
        61.777139,
        34.405359
      ]
    },
    {
      id: 11,
      address: 'ул. Антонова, 2',
      coords: [
        61.762410,
        34.429793
      ]
    },
    {
      id: 12,
      address: 'ул. Судостроительная, 30',
      coords: [
        61.751426,
        34.454694
      ]
    },
    {
      id: 13,
      address: 'ул. Птицефабрика, 15',
      coords: [
        61.725824,
        34.439620
      ]
    },
    {
      id: 14,
      address: 'пер. Фёдора Глинки, 9',
      coords: [
        61.764756,
        34.405601
      ]
    },
    {
      id: 15,
      address: 'ул. Ульянова, 8А',
      coords: [
        61.767484,
        34.395468
      ]
    },
    {
      id: 16,
      address: 'ул. Ровио, 15',
      coords: [
        61.762056,
        34.369926
      ]
    },
    {
      id: 17,
      address: 'ул. Труда, 3',
      coords: [
        61.848473,
        34.341295
      ]
    },
    {
      id: 18,
      address: 'ш. Соломенское, 9',
      coords: [
        61.826923,
        34.301971
      ]
    },
    {
      id: 19,
      address: 'пр-кт. Октябрьский, 63',
      coords: [
        61.807714,
        34.319808
      ]
    },
    {
      id: 20,
      address: 'ул. Береговая, 2к1',
      coords: [
        61.811853,
        34.328023
      ]
    },
    {
      id: 21,
      address: 'пер. Озерный, 2',
      coords: [
        61.800080,
        34.361279
      ]
    },
    {
      id: 22,
      address: 'ул. Советская, 35',
      coords: [
        61.802983,
        34.322803
      ]
    },
    {
      id: 23,
      address: 'ул. Шотмана, 34',
      coords: [
        61.794004,
        34.338467
      ]
    },
    {
      id: 24,
      address: 'ул. Профсоюзов, 27',
      coords: [
        61.796233,
        34.308870
      ]
    },
    {
      id: 25,
      address: 'ул. Архипова, 20',
      coords: [
        61.785506,
        34.305780
      ]
    },
    {
      id: 26,
      address: 'ул. Сулажгорская, 61',
      coords: [
        61.813294,
        34.264601
      ]
    },
    {
      id: 27,
      address: 'ул. Жуковского, 63А',
      coords: [
        61.811067,
        34.272255
      ]
    },
    {
      id: 28,
      address: 'ул. Кутузова, 55',
      coords: [
        61.803837,
        34.312194
      ]
    },
    {
      id: 29,
      address: 'ул. Солнечная, 13',
      coords: [
        61.773586,
        34.296950
      ]
    },
    {
      id: 30,
      address: 'пр. Владимира Баскова, 2',
      coords: [
        61.768407,
        34.294902
      ]
    },
  ];

  const [location, setLocation] = useState<Location | undefined>(undefined);
  const [isActivePopup, setIsActivePopup] = useState(false);
  const [instaAccess, setInstaAccess] = useState(false);

  const handleSelectedMarkerChange = ({latlng}: LeafletMouseEvent) => {
    const checkedLocation: Location | undefined = locations.find((it) => it.coords[0] === latlng.lat && it.coords[1] === latlng.lng);
    setLocation(checkedLocation as Location);
    setIsActivePopup(true);
    setInstaAccess(false);
  };

  const handleNearestMarkerChange = ({latlng}: LeafletMouseEvent) => {
    const checkedLocation: Location | undefined = myLocations.find((it) => it.coords[0] === latlng.lat && it.coords[1] === latlng.lng);
    setLocation(checkedLocation as Location);
    setIsActivePopup(true);
    setInstaAccess(true);
  };

  const handleCloseButtonClick = () => {
    setIsActivePopup(false);
    setLocation(undefined);
  };

  return (
    <div className="App">
      <div className="content">
        <div>
          <div className="App-wrapper">
            <header className="App-header">
              <div className="App-header_top">
                <ul className="links links-left">
                  <li className="list__item">
                    <a href="#">О проекте</a>
                  </li>
                </ul>
                <div className="Logo-center">
                  <a className="logo-link" href="#" />
                </div>
                <ul className="links links-right">
                  <li className="list__item entrance">
                    <a className="auth" href="# ">
                  Вход по коду
                    </a>
                  </li>
                  <li className="list__item">
                    <div
                      id="cl_widget_links"
                      className="cl_links_class"
                      style={{ width: 50, height: 50 }}
                    >
                      <span id="cl_widget_links_key">
                        <svg className="key" viewBox="0 0 18 18">
                          <circle cx={3} cy={3} r={2} />
                          <circle cx={3} cy={9} r={2} />
                          <circle cx={3} cy={15} r={2} />
                          <circle cx={9} cy={3} r={2} />
                          <circle cx={9} cy={9} r={2} />
                          <circle cx={9} cy={15} r={2} />
                          <circle cx={15} cy={3} r={2} />
                          <circle cx={15} cy={9} r={2} />
                          <circle cx={15} cy={15} r={2} />
                        </svg>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="App-header_bottom">
                <ul className="links links-center nearby_cameras">
                  <li className="list__item">
                    <a href="#">Мои камеры</a>
                  </li>
                  <li className="list__item">
                    <a href="#" className="active" aria-current="page">Дворовые</a>
                  </li>
                  <li className="list__item">
                    <a href="#">
                  Публичные
                    </a>
                  </li>
                  <li className="list__item">
                    <a href="#">Проект в действии</a>
                  </li>
                  <li className="list__item">
                    <a href="#">Ищу свидетелей!</a>
                  </li>
                  <li className="list__item">
                    <a href="#">Умные датчики</a>
                  </li>
                </ul>
              </div>
            </header>
          </div>
        </div>
        <div />
        <div>
          <div className="content-wrapper wide map">
            <div style={{zIndex: 999}}>
              <div className="content-navigate">
                <div className="content-navigate__city">Петрозаводск</div>
                <div className="content-navigate__search">
                  <input
                    id="search"
                    autoComplete="off"
                    placeholder="Искать камеру по названию или улице"
                  />
                  <button className="search">Искать</button>
                </div>
                <div className="content-navigate__switch">
                  <a className="active" aria-current="page" href="#">
                На карте
                  </a>
                  <a href="#">Список</a>
                </div>
                {(isActivePopup && location) ? <Popup handleCloseButtonClick={handleCloseButtonClick} location={location} instaAccess={instaAccess}/> : ''}
              </div>
            </div>
            <div className="yandex-map">
              <div style={{ width: 1903, height: 800 }}>
                <Map locations={locations} myLocations={myLocations} handleSelectedMarkerChange={handleSelectedMarkerChange} handleNearestMarkerChange={handleNearestMarkerChange} selectedLocationId={location?.id}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-wrapper">
        <footer className="App-footer">
          <div className="App-footer__wrapper">
            <a className="camera-link" href="#">
          Для организаций
            </a>
            <a className="copyright" href="#" rel="noopener noreferrer">
          2023 © Сергей Волчков & Евгения Жилина
            </a>
          </div>
        </footer>
      </div>
      <div />
    </div>
  );
}

export default Main;
