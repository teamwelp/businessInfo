import React from 'react';
import styles from './dayHours.css';
import { getTodaysHoursContent } from './sidebox-date-helpers';

export default (props) => {
  const getHours = () => {
    if (props.day === undefined) return 'Closed';
    return getTodaysHoursContent(props.day);
  };
  const hours = getHours(props);
  return (
    <div className={styles.row}>
      <div className={styles.day}>{props.day.name}</div>
      <div className={styles.dayHours}>{hours}</div>
    </div>
  );
};
