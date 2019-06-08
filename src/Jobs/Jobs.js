import React, { useState, useEffect } from 'react';
import { YMaps, Map } from 'react-yandex-maps';


const DEFAULT_STATE = {
  center: [51.656771, 39.205142],
  zoom: 14,
};


const Jobs = () => {
  const [ jobList, setJobList ] = useState([]);

  useEffect(() => {
    import('../data/jobList').then(data => {
      const list = data.default;

      setJobList(list);
    });
  });

  return (
    <section>
      <h1>Список работодателей</h1>
      <ul>
        {jobList.map(job => {
          return null;
        })}
      </ul>
      <YMaps>
        {/*<Map defaultState={DEFAULT_STATE} />*/}
      </YMaps>
    </section>
  );
};

export default Jobs;
