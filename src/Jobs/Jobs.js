import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import classNames from 'classnames';

import styles from './jobs.css';
import mapJpeg from './map.jpg';
import mapWebP from './map.webp';


let mapRef = null;

const Jobs = () => {
  const [ jobList, setJobList ] = useState([]);
  const [ isDataSuccessLoaded, setIsDataSuccessLoaded ] = useState(false);
  const [ jobsState, setJobsState ] = useState({});
  const [ mapOptions, setMapOptions ] = useState({
    center: [51.656771, 39.205142],
    zoom: 14,
  });

  useEffect(() => {
    import('../data/jobList')
      .then(data => {
        const list = data.default;
        const state = list.reduce((result, job) => {
          result[job.id] = {
            isMenuVisible: true,
            isPrintPressed: false,
          };

          return result;
        }, {});

        setJobList(list);
        setJobsState(state);
        setIsDataSuccessLoaded(true);
      });
    
    const intervalId = setInterval(() => {
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (!isDataSuccessLoaded) {
    return null;
  }

  return (
    <section className={styles.root}>
      <h1 className={styles.header}>Список работодателей</h1>
      <ul className={styles.list}>
        {jobList.map((job, index) => {
          const phoneLink = (job.phone || '').replace(/[^0-9]/i, '');
          const { id } = job;
          const state = jobsState[id];

          if (!state.isMenuVisible) {
            return null;
          }

          return (
            <li
              key={index}
              className={classNames({
                [styles.job]: true,
                [styles.hiding]: !state.isMenuVisible,
              })}
            >
              <article
                className={styles.item}
                onClick={() => {
                  const data = {...mapOptions};

                  if (mapRef) {
                    mapRef.setCenter(job.coordinates, 16);
                  }

                  data.center = job.coordinates;
                  setMapOptions(data);
                }}
              >
                <h3 className={styles.name}>
                  Компания <span className={styles.bold}>{job.name}</span>
                </h3>
                <address className={styles.address}>по адресу <span className={styles.bold}>{job.address} </span></address>
                <p className={styles.vacancy}>предлагает работу <span className={styles.bold}>{job.vacancy} </span></p>
                <p className={styles.tel}>
                  обращаться по телефону <a href={`tel:${phoneLink}`} className={styles.phone}>{job.phone}</a>
                </p>
              </article>
              <form 
                onSubmit={event => event.preventDefault()}
                className={styles.form}
              >
                <button
                  onClick={() => {
                    const data = {...jobsState};

                    data[id].isMenuVisible = false;
                    setJobsState(data);
                  }}
                >
                  Скрыть
                </button>
                <button
                  disabled={state.isPrintPressed}
                  className={styles.print}
                  onClick={() => {
                    if (state.isPrintPressed) {
                      return;
                    }

                    const data = {...jobsState};

                    data[id].isPrintPressed = true;
                    setJobsState(data);
                  }}
                >
                  {state.isPrintPressed ? "Напечатано" : "Печать" }
                </button>
              </form>
            </li>
          );
        })}
      </ul>
      <picture className={styles.picture}>
        <source srcSet={mapWebP} type="image/webp" />
        <img src={mapJpeg} />
      </picture>
      {isDataSuccessLoaded && false && (
        <div className={styles.map}>
          <YMaps>
            <Map 
              defaultState={mapOptions}
              instanceRef={ref => mapRef = ref}
              width={window.innerWidth * 0.6}
              height={window.innerHeight}
            >
              {jobList.map(job => {
                return (
                  <Placemark
                    geometry={job.coordinates}
                  />
                );
              })}
            </Map>
          </YMaps>
        </div>
      )}
    </section>
  );
};

export default React.memo(Jobs, () => true);
