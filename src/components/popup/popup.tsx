import React from 'react';
import { Location } from '../../types/types';

type PopupProps = {
  handleCloseButtonClick: () => void;
  location: Location;
}

function Popup({handleCloseButtonClick, location}: PopupProps) {

  return (
    <div className="player-balloon ">
      <span id="balloon_close" />
      <div className="balloon-head">
        <a href="/pub/8085">{location.address}</a>
      </div>
      <div className="balloon-player">
        <div
          // eslint-disable-next-line react/no-unknown-property
          poster="https://s1.moidom-stream.ru/s/public/0000008085_360.jpg?version=de860b425b54cb4855b8687914c3dc17"
          autoPlay
          className="video-js vjs-moidom-skin vjs-big-play-centered noAudio camera_pub-dimensions vjs-controls-enabled vjs-workinghover vjs-v7 vjs-live vjs-playing vjs-has-started vjs-user-inactive"
          tabIndex={-1}
          id="camera_pub"
          role="region"
          lang="ru"
          aria-label="Video Player"
          style={{ outline: 'none' }}
        >
          <video
            id="camera_pub_html5_api"
            tabIndex={-1}
            className="vjs-tech"
            autoPlay
            poster="https://s1.moidom-stream.ru/s/public/0000008085_360.jpg?version=de860b425b54cb4855b8687914c3dc17"
            role="application"
            src=""
          >
            <source
              src="https://s1.moidom-stream.ru/s/public/0000008085.m3u8"
              type="application/x-mpegURL"
            />
          </video>
          <div
            className="vjs-poster"
            tabIndex={-1}
            aria-disabled="false"
            style={{
              backgroundImage:
            'url("https://s1.moidom-stream.ru/s/public/0000008085_360.jpg?version=de860b425b54cb4855b8687914c3dc17")'
            }}
          />
          <div
            className="vjs-text-track-display"
            aria-live="off"
            aria-atomic="true"
          >
            <div style={{ position: 'absolute', inset: 0, margin: '1.5%' }} />
          </div>
          <div className="vjs-loading-spinner" dir="ltr">
            <span className="vjs-control-text">Video Player is loading.</span>
          </div>
          <button
            className="vjs-big-play-button"
            type="button"
            title="Play Video"
            aria-disabled="false"
          >
            <span aria-hidden="true" className="vjs-icon-placeholder" />
            <span className="vjs-control-text" aria-live="polite">
          Play Video
            </span>
          </button>
          <div className="vjs-control-bar" dir="ltr">
            <button
              className="vjs-play-control vjs-control vjs-button vjs-playing"
              type="button"
              title="Pause"
              aria-disabled="false"
            >
              <span aria-hidden="true" className="vjs-icon-placeholder" />
              <span className="vjs-control-text" aria-live="polite">
            Pause
              </span>
            </button>
            <div className="vjs-volume-panel vjs-control vjs-volume-panel-horizontal">
              <button
                className="vjs-mute-control vjs-control vjs-button vjs-vol-3"
                type="button"
                title="Mute"
                aria-disabled="false"
              >
                <span aria-hidden="true" className="vjs-icon-placeholder" />
                <span className="vjs-control-text" aria-live="polite">
              Mute
                </span>
              </button>
              <div className="vjs-volume-control vjs-control vjs-volume-horizontal">
                <div
                  tabIndex={0}
                  className="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal"
                  role="slider"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Volume Level"
                  aria-live="polite"
                  aria-valuetext="100%"
                >
                  <div className="vjs-volume-level">
                    <span className="vjs-control-text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="vjs-current-time vjs-time-control vjs-control">
              <span className="vjs-control-text" role="presentation">
            Current Time&nbsp;
              </span>
              <span
                className="vjs-current-time-display"
                aria-live="off"
                role="presentation"
              >
            0:20
              </span>
            </div>
            <div className="vjs-time-control vjs-time-divider" aria-hidden="true">
              <div>
                <span>/</span>
              </div>
            </div>
            <div className="vjs-duration vjs-time-control vjs-control">
              <span className="vjs-control-text" role="presentation">
            Duration&nbsp;
              </span>
              <span
                className="vjs-duration-display"
                aria-live="off"
                role="presentation"
              >
            -:-:-
              </span>
            </div>
            <div className="vjs-progress-control vjs-control">
              <div
                tabIndex={0}
                className="vjs-progress-holder vjs-slider vjs-slider-horizontal"
                role="slider"
                aria-valuenow={0.0}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progress Bar"
                aria-valuetext="0:00:20 of -:-:-"
              >
                <div className="vjs-load-progress" style={{ width: '0%' }}>
                  <span className="vjs-control-text">
                    <span>Loaded</span>:{' '}
                    <span className="vjs-control-text-loaded-percentage">
                  0.00%
                    </span>
                  </span>
                  <div
                    data-start="9.99"
                    data-end="49.951"
                    style={{ left: '20%', width: '80%' }}
                  />
                </div>
                <div className="vjs-mouse-display">
                  <div className="vjs-time-tooltip" aria-hidden="true" />
                </div>
                <div
                  className="vjs-play-progress vjs-slider-bar"
                  aria-hidden="true"
                  style={{ width: '0%' }}
                >
                  <div
                    className="vjs-time-tooltip"
                    aria-hidden="true"
                    style={{ right: 0 }}
                  >
                0:00:20
                  </div>
                </div>
              </div>
            </div>
            <div className="vjs-live-control vjs-control">
              <div className="vjs-live-display" aria-live="off">
                <span className="vjs-control-text">Stream Type&nbsp;</span>LIVE
              </div>
            </div>
            <button
              className="vjs-seek-to-live-control vjs-control"
              type="button"
              title="Seek to live, currently behind live"
              aria-disabled="false"
            >
              <span aria-hidden="true" className="vjs-icon-placeholder" />
              <span className="vjs-control-text" aria-live="polite">
            Seek to live, currently behind live
              </span>
              <span className="vjs-seek-to-live-text" aria-hidden="true">
            LIVE
              </span>
            </button>
            <div className="vjs-remaining-time vjs-time-control vjs-control">
              <span className="vjs-control-text" role="presentation">
            Remaining Time&nbsp;
              </span>
              <span aria-hidden="true">-</span>
              <span
                className="vjs-remaining-time-display"
                aria-live="off"
                role="presentation"
              >
            -:-:-
              </span>
            </div>
            <div className="vjs-custom-control-spacer vjs-spacer ">&nbsp;</div>
            <div className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
              <div className="vjs-playback-rate-value">1x</div>
              <button
                className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button"
                type="button"
                aria-disabled="false"
                title="Playback Rate"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span aria-hidden="true" className="vjs-icon-placeholder" />
                <span className="vjs-control-text" aria-live="polite">
              Playback Rate
                </span>
              </button>
              <div className="vjs-menu">
                <ul className="vjs-menu-content" role="menu" />
              </div>
            </div>
            <div className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
              <button
                className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button"
                type="button"
                aria-disabled="false"
                title="Chapters"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span aria-hidden="true" className="vjs-icon-placeholder" />
                <span className="vjs-control-text" aria-live="polite">
              Chapters
                </span>
              </button>
              <div className="vjs-menu">
                <ul className="vjs-menu-content" role="menu">
                  <li className="vjs-menu-title" tabIndex={-1}>
                Chapters
                  </li>
                </ul>
              </div>
            </div>
            <div className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
              <button
                className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button"
                type="button"
                aria-disabled="false"
                title="Descriptions"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span aria-hidden="true" className="vjs-icon-placeholder" />
                <span className="vjs-control-text" aria-live="polite">
              Descriptions
                </span>
              </button>
              <div className="vjs-menu">
                <ul className="vjs-menu-content" role="menu">
                  <li
                    className="vjs-menu-item vjs-selected"
                    tabIndex={-1}
                    role="menuitemradio"
                    aria-disabled="false"
                    aria-checked="true"
                  >
                    <span className="vjs-menu-item-text">descriptions off</span>
                    <span className="vjs-control-text" aria-live="polite">
                  , selected
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
              <button
                className="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button"
                type="button"
                aria-disabled="false"
                title="Subtitles"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span aria-hidden="true" className="vjs-icon-placeholder" />
                <span className="vjs-control-text" aria-live="polite">
              Subtitles
                </span>
              </button>
              <div className="vjs-menu">
                <ul className="vjs-menu-content" role="menu">
                  <li
                    className="vjs-menu-item vjs-texttrack-settings"
                    tabIndex={-1}
                    role="menuitem"
                    aria-disabled="false"
                  >
                    <span className="vjs-menu-item-text">subtitles settings</span>
                    <span className="vjs-control-text" aria-live="polite">
                  , opens subtitles settings dialog
                    </span>
                  </li>
                  <li
                    className="vjs-menu-item vjs-selected"
                    tabIndex={-1}
                    role="menuitemradio"
                    aria-disabled="false"
                    aria-checked="true"
                  >
                    <span className="vjs-menu-item-text">subtitles off</span>
                    <span className="vjs-control-text" aria-live="polite">
                  , selected
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
              <button
                className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button"
                type="button"
                aria-disabled="false"
                title="Audio Track"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span aria-hidden="true" className="vjs-icon-placeholder" />
                <span className="vjs-control-text" aria-live="polite">
              Audio Track
                </span>
              </button>
              <div className="vjs-menu">
                <ul className="vjs-menu-content" role="menu">
                  <li
                    className="vjs-menu-item vjs-selected vjs-main-menu-item"
                    tabIndex={-1}
                    role="menuitemradio"
                    aria-disabled="false"
                    aria-checked="true"
                  >
                    <span className="vjs-menu-item-text">default</span>
                    <span className="vjs-control-text" aria-live="polite">
                  , selected
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="vjs-picture-in-picture-control vjs-control vjs-button"
              type="button"
              title="Picture-in-Picture"
              aria-disabled="false"
            >
              <span aria-hidden="true" className="vjs-icon-placeholder" />
              <span className="vjs-control-text" aria-live="polite">
            Picture-in-Picture
              </span>
            </button>
            <button
              className="vjs-fullscreen-control vjs-control vjs-button"
              type="button"
              title="Fullscreen"
              aria-disabled="false"
            >
              <span aria-hidden="true" className="vjs-icon-placeholder" />
              <span className="vjs-control-text" aria-live="polite">
            Fullscreen
              </span>
            </button>
          </div>
          <div
            className="vjs-error-display vjs-modal-dialog vjs-hidden "
            tabIndex={-1}
            aria-describedby="camera_pub_component_4419_description"
            aria-hidden="true"
            aria-label="Modal Window"
            role="dialog"
          >
            <p
              className="vjs-modal-dialog-description vjs-control-text"
              id="camera_pub_component_4419_description"
            >
          This is a modal window.
            </p>
            <div className="vjs-modal-dialog-content" role="document" />
          </div>
          <div
            className="vjs-modal-dialog vjs-hidden  vjs-text-track-settings"
            tabIndex={-1}
            aria-describedby="camera_pub_component_4424_description"
            aria-hidden="true"
            aria-label="Caption Settings Dialog"
            role="dialog"
          >
            <p
              className="vjs-modal-dialog-description vjs-control-text"
              id="camera_pub_component_4424_description"
            >
          Beginning of dialog window. Escape will cancel and close the window.
            </p>
            <div className="vjs-modal-dialog-content" role="document">
              <div className="vjs-track-settings-colors">
                <fieldset className="vjs-fg-color vjs-track-setting">
                  <legend id="captions-text-legend-camera_pub_component_4424">
                Text
                  </legend>
                  <label
                    id="captions-foreground-color-camera_pub_component_4424"
                    className="vjs-label"
                  >
                Color
                  </label>
                  <select aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424">
                    <option
                      id="captions-foreground-color-camera_pub_component_4424-White"
                      value="#FFF"
                      aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424-White"
                    >
                  White
                    </option>
                    <option
                      id="captions-foreground-color-camera_pub_component_4424-Black"
                      value="#000"
                      aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424-Black"
                    >
                  Black
                    </option>
                    <option
                      id="captions-foreground-color-camera_pub_component_4424-Red"
                      value="#F00"
                      aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424-Red"
                    >
                  Red
                    </option>
                    <option
                      id="captions-foreground-color-camera_pub_component_4424-Green"
                      value="#0F0"
                      aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424-Green"
                    >
                  Green
                    </option>
                    <option
                      id="captions-foreground-color-camera_pub_component_4424-Blue"
                      value="#00F"
                      aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424-Blue"
                    >
                  Blue
                    </option>
                    <option
                      id="captions-foreground-color-camera_pub_component_4424-Yellow"
                      value="#FF0"
                      aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424-Yellow"
                    >
                  Yellow
                    </option>
                    <option
                      id="captions-foreground-color-camera_pub_component_4424-Magenta"
                      value="#F0F"
                      aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424-Magenta"
                    >
                  Magenta
                    </option>
                    <option
                      id="captions-foreground-color-camera_pub_component_4424-Cyan"
                      value="#0FF"
                      aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424 captions-foreground-color-camera_pub_component_4424-Cyan"
                    >
                  Cyan
                    </option>
                  </select>
                  <span className="vjs-text-opacity vjs-opacity">
                    <label
                      id="captions-foreground-opacity-camera_pub_component_4424"
                      className="vjs-label"
                    >
                  Transparency
                    </label>
                    <select aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-opacity-camera_pub_component_4424">
                      <option
                        id="captions-foreground-opacity-camera_pub_component_4424-Opaque"
                        value={1}
                        aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-opacity-camera_pub_component_4424 captions-foreground-opacity-camera_pub_component_4424-Opaque"
                      >
                    Opaque
                      </option>
                      <option
                        id="captions-foreground-opacity-camera_pub_component_4424-SemiTransparent"
                        value="0.5"
                        aria-labelledby="captions-text-legend-camera_pub_component_4424 captions-foreground-opacity-camera_pub_component_4424 captions-foreground-opacity-camera_pub_component_4424-SemiTransparent"
                      >
                    Semi-Transparent
                      </option>
                    </select>
                  </span>
                </fieldset>
                <fieldset className="vjs-bg-color vjs-track-setting">
                  <legend id="captions-background-camera_pub_component_4424">
                Background
                  </legend>
                  <label
                    id="captions-background-color-camera_pub_component_4424"
                    className="vjs-label"
                  >
                Color
                  </label>
                  <select aria-labelledby="captions-background-camera_pub_component_4424 captions-background-color-camera_pub_component_4424">
                    <option
                      id="captions-background-color-camera_pub_component_4424-Black"
                      value="#000"
                      aria-labelledby="captions-background-camera_pub_component_4424 captions-background-color-camera_pub_component_4424 captions-background-color-camera_pub_component_4424-Black"
                    >
                  Black
                    </option>
                    <option
                      id="captions-background-color-camera_pub_component_4424-White"
                      value="#FFF"
                      aria-labelledby="captions-background-camera_pub_component_4424 captions-background-color-camera_pub_component_4424 captions-background-color-camera_pub_component_4424-White"
                    >
                  White
                    </option>
                    <option
                      id="captions-background-color-camera_pub_component_4424-Red"
                      value="#F00"
                      aria-labelledby="captions-background-camera_pub_component_4424 captions-background-color-camera_pub_component_4424 captions-background-color-camera_pub_component_4424-Red"
                    >
                  Red
                    </option>
                    <option
                      id="captions-background-color-camera_pub_component_4424-Green"
                      value="#0F0"
                      aria-labelledby="captions-background-camera_pub_component_4424 captions-background-color-camera_pub_component_4424 captions-background-color-camera_pub_component_4424-Green"
                    >
                  Green
                    </option>
                    <option
                      id="captions-background-color-camera_pub_component_4424-Blue"
                      value="#00F"
                      aria-labelledby="captions-background-camera_pub_component_4424 captions-background-color-camera_pub_component_4424 captions-background-color-camera_pub_component_4424-Blue"
                    >
                  Blue
                    </option>
                    <option
                      id="captions-background-color-camera_pub_component_4424-Yellow"
                      value="#FF0"
                      aria-labelledby="captions-background-camera_pub_component_4424 captions-background-color-camera_pub_component_4424 captions-background-color-camera_pub_component_4424-Yellow"
                    >
                  Yellow
                    </option>
                    <option
                      id="captions-background-color-camera_pub_component_4424-Magenta"
                      value="#F0F"
                      aria-labelledby="captions-background-camera_pub_component_4424 captions-background-color-camera_pub_component_4424 captions-background-color-camera_pub_component_4424-Magenta"
                    >
                  Magenta
                    </option>
                    <option
                      id="captions-background-color-camera_pub_component_4424-Cyan"
                      value="#0FF"
                      aria-labelledby="captions-background-camera_pub_component_4424 captions-background-color-camera_pub_component_4424 captions-background-color-camera_pub_component_4424-Cyan"
                    >
                  Cyan
                    </option>
                  </select>
                  <span className="vjs-bg-opacity vjs-opacity">
                    <label
                      id="captions-background-opacity-camera_pub_component_4424"
                      className="vjs-label"
                    >
                  Transparency
                    </label>
                    <select aria-labelledby="captions-background-camera_pub_component_4424 captions-background-opacity-camera_pub_component_4424">
                      <option
                        id="captions-background-opacity-camera_pub_component_4424-Opaque"
                        value={1}
                        aria-labelledby="captions-background-camera_pub_component_4424 captions-background-opacity-camera_pub_component_4424 captions-background-opacity-camera_pub_component_4424-Opaque"
                      >
                    Opaque
                      </option>
                      <option
                        id="captions-background-opacity-camera_pub_component_4424-SemiTransparent"
                        value="0.5"
                        aria-labelledby="captions-background-camera_pub_component_4424 captions-background-opacity-camera_pub_component_4424 captions-background-opacity-camera_pub_component_4424-SemiTransparent"
                      >
                    Semi-Transparent
                      </option>
                      <option
                        id="captions-background-opacity-camera_pub_component_4424-Transparent"
                        value={0}
                        aria-labelledby="captions-background-camera_pub_component_4424 captions-background-opacity-camera_pub_component_4424 captions-background-opacity-camera_pub_component_4424-Transparent"
                      >
                    Transparent
                      </option>
                    </select>
                  </span>
                </fieldset>
                <fieldset className="vjs-window-color vjs-track-setting">
                  <legend id="captions-window-camera_pub_component_4424">
                Window
                  </legend>
                  <label
                    id="captions-window-color-camera_pub_component_4424"
                    className="vjs-label"
                  >
                Color
                  </label>
                  <select aria-labelledby="captions-window-camera_pub_component_4424 captions-window-color-camera_pub_component_4424">
                    <option
                      id="captions-window-color-camera_pub_component_4424-Black"
                      value="#000"
                      aria-labelledby="captions-window-camera_pub_component_4424 captions-window-color-camera_pub_component_4424 captions-window-color-camera_pub_component_4424-Black"
                    >
                  Black
                    </option>
                    <option
                      id="captions-window-color-camera_pub_component_4424-White"
                      value="#FFF"
                      aria-labelledby="captions-window-camera_pub_component_4424 captions-window-color-camera_pub_component_4424 captions-window-color-camera_pub_component_4424-White"
                    >
                  White
                    </option>
                    <option
                      id="captions-window-color-camera_pub_component_4424-Red"
                      value="#F00"
                      aria-labelledby="captions-window-camera_pub_component_4424 captions-window-color-camera_pub_component_4424 captions-window-color-camera_pub_component_4424-Red"
                    >
                  Red
                    </option>
                    <option
                      id="captions-window-color-camera_pub_component_4424-Green"
                      value="#0F0"
                      aria-labelledby="captions-window-camera_pub_component_4424 captions-window-color-camera_pub_component_4424 captions-window-color-camera_pub_component_4424-Green"
                    >
                  Green
                    </option>
                    <option
                      id="captions-window-color-camera_pub_component_4424-Blue"
                      value="#00F"
                      aria-labelledby="captions-window-camera_pub_component_4424 captions-window-color-camera_pub_component_4424 captions-window-color-camera_pub_component_4424-Blue"
                    >
                  Blue
                    </option>
                    <option
                      id="captions-window-color-camera_pub_component_4424-Yellow"
                      value="#FF0"
                      aria-labelledby="captions-window-camera_pub_component_4424 captions-window-color-camera_pub_component_4424 captions-window-color-camera_pub_component_4424-Yellow"
                    >
                  Yellow
                    </option>
                    <option
                      id="captions-window-color-camera_pub_component_4424-Magenta"
                      value="#F0F"
                      aria-labelledby="captions-window-camera_pub_component_4424 captions-window-color-camera_pub_component_4424 captions-window-color-camera_pub_component_4424-Magenta"
                    >
                  Magenta
                    </option>
                    <option
                      id="captions-window-color-camera_pub_component_4424-Cyan"
                      value="#0FF"
                      aria-labelledby="captions-window-camera_pub_component_4424 captions-window-color-camera_pub_component_4424 captions-window-color-camera_pub_component_4424-Cyan"
                    >
                  Cyan
                    </option>
                  </select>
                  <span className="vjs-window-opacity vjs-opacity">
                    <label
                      id="captions-window-opacity-camera_pub_component_4424"
                      className="vjs-label"
                    >
                  Transparency
                    </label>
                    <select aria-labelledby="captions-window-camera_pub_component_4424 captions-window-opacity-camera_pub_component_4424">
                      <option
                        id="captions-window-opacity-camera_pub_component_4424-Transparent"
                        value={0}
                        aria-labelledby="captions-window-camera_pub_component_4424 captions-window-opacity-camera_pub_component_4424 captions-window-opacity-camera_pub_component_4424-Transparent"
                      >
                    Transparent
                      </option>
                      <option
                        id="captions-window-opacity-camera_pub_component_4424-SemiTransparent"
                        value="0.5"
                        aria-labelledby="captions-window-camera_pub_component_4424 captions-window-opacity-camera_pub_component_4424 captions-window-opacity-camera_pub_component_4424-SemiTransparent"
                      >
                    Semi-Transparent
                      </option>
                      <option
                        id="captions-window-opacity-camera_pub_component_4424-Opaque"
                        value={1}
                        aria-labelledby="captions-window-camera_pub_component_4424 captions-window-opacity-camera_pub_component_4424 captions-window-opacity-camera_pub_component_4424-Opaque"
                      >
                    Opaque
                      </option>
                    </select>
                  </span>
                </fieldset>
              </div>
              <div className="vjs-track-settings-font">
                <fieldset className="vjs-font-percent vjs-track-setting">
                  <legend
                    id="captions-font-size-camera_pub_component_4424"
                    className=""
                  >
                Font Size
                  </legend>
                  <select aria-labelledby="captions-font-size-camera_pub_component_4424">
                    <option
                      id="captions-font-size-camera_pub_component_4424-50"
                      value="0.50"
                      aria-labelledby="captions-font-size-camera_pub_component_4424 captions-font-size-camera_pub_component_4424-50"
                    >
                  50%
                    </option>
                    <option
                      id="captions-font-size-camera_pub_component_4424-75"
                      value="0.75"
                      aria-labelledby="captions-font-size-camera_pub_component_4424 captions-font-size-camera_pub_component_4424-75"
                    >
                  75%
                    </option>
                    <option
                      id="captions-font-size-camera_pub_component_4424-100"
                      value={1.0}
                      aria-labelledby="captions-font-size-camera_pub_component_4424 captions-font-size-camera_pub_component_4424-100"
                    >
                  100%
                    </option>
                    <option
                      id="captions-font-size-camera_pub_component_4424-125"
                      value="1.25"
                      aria-labelledby="captions-font-size-camera_pub_component_4424 captions-font-size-camera_pub_component_4424-125"
                    >
                  125%
                    </option>
                    <option
                      id="captions-font-size-camera_pub_component_4424-150"
                      value="1.50"
                      aria-labelledby="captions-font-size-camera_pub_component_4424 captions-font-size-camera_pub_component_4424-150"
                    >
                  150%
                    </option>
                    <option
                      id="captions-font-size-camera_pub_component_4424-175"
                      value="1.75"
                      aria-labelledby="captions-font-size-camera_pub_component_4424 captions-font-size-camera_pub_component_4424-175"
                    >
                  175%
                    </option>
                    <option
                      id="captions-font-size-camera_pub_component_4424-200"
                      value={2.0}
                      aria-labelledby="captions-font-size-camera_pub_component_4424 captions-font-size-camera_pub_component_4424-200"
                    >
                  200%
                    </option>
                    <option
                      id="captions-font-size-camera_pub_component_4424-300"
                      value={3.0}
                      aria-labelledby="captions-font-size-camera_pub_component_4424 captions-font-size-camera_pub_component_4424-300"
                    >
                  300%
                    </option>
                    <option
                      id="captions-font-size-camera_pub_component_4424-400"
                      value={4.0}
                      aria-labelledby="captions-font-size-camera_pub_component_4424 captions-font-size-camera_pub_component_4424-400"
                    >
                  400%
                    </option>
                  </select>
                </fieldset>
                <fieldset className="vjs-edge-style vjs-track-setting">
                  <legend id="camera_pub_component_4424" className="">
                Text Edge Style
                  </legend>
                  <select aria-labelledby="camera_pub_component_4424">
                    <option
                      id="camera_pub_component_4424-None"
                      value="none"
                      aria-labelledby="camera_pub_component_4424 camera_pub_component_4424-None"
                    >
                  None
                    </option>
                    <option
                      id="camera_pub_component_4424-Raised"
                      value="raised"
                      aria-labelledby="camera_pub_component_4424 camera_pub_component_4424-Raised"
                    >
                  Raised
                    </option>
                    <option
                      id="camera_pub_component_4424-Depressed"
                      value="depressed"
                      aria-labelledby="camera_pub_component_4424 camera_pub_component_4424-Depressed"
                    >
                  Depressed
                    </option>
                    <option
                      id="camera_pub_component_4424-Uniform"
                      value="uniform"
                      aria-labelledby="camera_pub_component_4424 camera_pub_component_4424-Uniform"
                    >
                  Uniform
                    </option>
                    <option
                      id="camera_pub_component_4424-Dropshadow"
                      value="dropshadow"
                      aria-labelledby="camera_pub_component_4424 camera_pub_component_4424-Dropshadow"
                    >
                  Dropshadow
                    </option>
                  </select>
                </fieldset>
                <fieldset className="vjs-font-family vjs-track-setting">
                  <legend
                    id="captions-font-family-camera_pub_component_4424"
                    className=""
                  >
                Font Family
                  </legend>
                  <select aria-labelledby="captions-font-family-camera_pub_component_4424">
                    <option
                      id="captions-font-family-camera_pub_component_4424-ProportionalSansSerif"
                      value="proportionalSansSerif"
                      aria-labelledby="captions-font-family-camera_pub_component_4424 captions-font-family-camera_pub_component_4424-ProportionalSansSerif"
                    >
                  Proportional Sans-Serif
                    </option>
                    <option
                      id="captions-font-family-camera_pub_component_4424-MonospaceSansSerif"
                      value="monospaceSansSerif"
                      aria-labelledby="captions-font-family-camera_pub_component_4424 captions-font-family-camera_pub_component_4424-MonospaceSansSerif"
                    >
                  Monospace Sans-Serif
                    </option>
                    <option
                      id="captions-font-family-camera_pub_component_4424-ProportionalSerif"
                      value="proportionalSerif"
                      aria-labelledby="captions-font-family-camera_pub_component_4424 captions-font-family-camera_pub_component_4424-ProportionalSerif"
                    >
                  Proportional Serif
                    </option>
                    <option
                      id="captions-font-family-camera_pub_component_4424-MonospaceSerif"
                      value="monospaceSerif"
                      aria-labelledby="captions-font-family-camera_pub_component_4424 captions-font-family-camera_pub_component_4424-MonospaceSerif"
                    >
                  Monospace Serif
                    </option>
                    <option
                      id="captions-font-family-camera_pub_component_4424-Casual"
                      value="casual"
                      aria-labelledby="captions-font-family-camera_pub_component_4424 captions-font-family-camera_pub_component_4424-Casual"
                    >
                  Casual
                    </option>
                    <option
                      id="captions-font-family-camera_pub_component_4424-Script"
                      value="script"
                      aria-labelledby="captions-font-family-camera_pub_component_4424 captions-font-family-camera_pub_component_4424-Script"
                    >
                  Script
                    </option>
                    <option
                      id="captions-font-family-camera_pub_component_4424-SmallCaps"
                      value="small-caps"
                      aria-labelledby="captions-font-family-camera_pub_component_4424 captions-font-family-camera_pub_component_4424-SmallCaps"
                    >
                  Small Caps
                    </option>
                  </select>
                </fieldset>
              </div>
              <div className="vjs-track-settings-controls">
                <button
                  type="button"
                  className="vjs-default-button"
                  title="restore all settings to the default values"
                >
              Reset
                  <span className="vjs-control-text">
                    {' '}
                restore all settings to the default values
                  </span>
                </button>
                <button type="button" className="vjs-done-button">
              Done
                </button>
              </div>
            </div>
            <button
              className="vjs-close-button vjs-control vjs-button"
              type="button"
              aria-disabled="false"
              title="Close Modal Dialog"
              onClick={handleCloseButtonClick}
            >
              <span aria-hidden="true" className="vjs-icon-placeholder" />
              <span className="vjs-control-text" aria-live="polite">
            Close Modal Dialog
              </span>
            </button>
            <p className="vjs-control-text">End of dialog window.</p>
          </div>
        </div>
      </div>
      <div className="balloon-links">
        <div className="links">
          <a href="/pub/8085/archive">Архив</a>
          <a href="/pub/8085/screen">Снимки</a>
          <a href="/public/videos/8085">Происшествия</a>
          <span
            data-id={8085}
            data-lat="61.784783"
            data-lon="34.395821"
            id="point_rakurs"
          >
        Ракурс камеры
          </span>
        </div>
        <span className="balloon-links share_ico" />
      </div>
      <div className="share_buttons_wrapper" />
      <div style={{ margin: '0px 20px' }}>
        <div id="cl_promo_175">
          <a
            id="cl_promo_175_link"
            href="http://inlab.karelia.pro/url.php?banner_id=3500&area_id=175&url=http%3A%2F%2Fpet.karelia.ru%2F"
            className="partner_citylink"
          >
            <span
              id="cl_promo_175_img"
              style={{
                background:
              'url("https://inlab.karelia.pro/banners/10235/4e84345885f6bccd305cf58f391c4772.jpg")',
                width: 470,
                height: 100
              }}
            />
          </a>
          <a
            id="cl_promo_175_more"
            href="http://inlab.karelia.pro/info.php?banner_id=3500"
          >
        …
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;
