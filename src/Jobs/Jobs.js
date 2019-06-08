import React, { useState, useEffect } from 'react';
import { YMaps, Map } from 'react-yandex-maps';

import styles from './jobs.css';
import mapJpeg from './map.jpg';
import mapWebP from './map.webp';


const DEFAULT_STATE = {
  center: [51.656771, 39.205142],
  zoom: 14,
};


const Jobs = () => {
  const [ jobList, setJobList ] = useState([]);
  const [ isDataSuccessLoaded, setIsDataSuccessLoaded ] = useState(false);
  const [ jobsState, setJobsState ] = useState({});

  useEffect(() => {
    import('../data/jobList')
      .then(data => {
        const list = data.default;
        const state = list.reduce((result, job) => {
          result[job.id] = {
            isMenuVisible: false,
            isPrintPressed: false,
          };

          return result;
        }, {});

        setJobList(list);
        setJobsState(state);
        setIsDataSuccessLoaded(true);
      });
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
          console.log({ state });

          return (
            <li key={index} className={styles.job}>
              <article 
                className={styles.item}
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
                <button>Скрыть</button>
                <button>
                  {state.isPrintPressed ? "Напечатано" : "Печать" }
                </button>
              </form>
            </li>
          );
        })}
      </ul>
      <picture className={styles.picture}>
        <source src={mapWebP} type="image/web" />
        <img src={mapJpeg} />
      </picture>
      {isDataSuccessLoaded && (
        <div className={styles.map}>
          {/*<YMaps>
            <Map 
              defaultState={DEFAULT_STATE}
              width={window.innerWidth * 0.6}
              height={window.innerHeight}
            />
          </YMaps>*/}
        </div>
      )}
    </section>
  );
};

export default React.memo(Jobs, () => true);
