
import { LeafletMouseEvent } from 'leaflet';
import { useState } from 'react';
import Map from '../components/map/map';
import Popup from '../components/popup/popup';
import { Location } from '../types/types';

function Main() {

  const locations: Location[] = [
    {
      id: 1,
      address: 'Аллея 100 летия Комсомола, м. Политехническая',
      coords: [
        60.022639880785924,
        30.365151487500537
      ]
    },
    {
      id: 2,
      address: 'Большой Смоленский пр., м. Елизаровская',
      coords: [
        59.89808568733451,
        30.412126503541884
      ]
    },
  ];

  const [location, setLocation] = useState<Location | undefined>(undefined);
  const [isActivePopup, setIsActivePopup] = useState(false);

  const handleSelectedMarkerChange = ({latlng}: LeafletMouseEvent) => {
    const checkedLocation: Location | undefined = locations.find((it) => it.coords[0] === latlng.lat && it.coords[1] === latlng.lng);
    setLocation(checkedLocation as Location);
    setIsActivePopup(true);
  };

  const handleCloseButtonClick = () => {
    setIsActivePopup(false);
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
                  Вход
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
                {(isActivePopup && location) ? <Popup handleCloseButtonClick={handleCloseButtonClick} location={location}/> : ''}
              </div>
            </div>
            <div className="yandex-map">
              <div style={{ width: 1903, height: 800 }}>
                <Map locations={locations} handleSelectedMarkerChange={handleSelectedMarkerChange} selectedLocationId={location?.id}/>
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
          2023 © Инлаб.Про
            </a>
          </div>
        </footer>
      </div>
      <div />
    </div>
  );
}

export default Main;
