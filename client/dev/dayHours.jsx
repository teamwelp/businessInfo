import React from 'react';
import styles from './dayHours.css';
import { getTodaysHoursContent, isOpen } from './sidebox-date-helpers';

export default (props) => {
  const getHours = () => {
    if (props.day === undefined) return 'Closed';
    return getTodaysHoursContent(props.day);
  };
  const hours = getHours(props);
  const getIsOpen = () => {
    if (isOpen(props.day)) return 'Open now';
    return '';
  };
  const openStatus = getIsOpen();
  return (
    <div className={styles.row}>
      <div className={styles.day}>{props.day.name}</div>
      <div className={styles.dayHoursBox}>
        <div className={styles.dayHours}>{hours}</div>
        <div className={styles.isOpen}>{openStatus}</div>
      </div>
    </div>
  );
};
