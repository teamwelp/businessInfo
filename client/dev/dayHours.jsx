import React from 'react';
import styles from './dayHours.css';
import { getTodaysHoursContent, isOpen } from './sidebox-date-helpers';

const getHours = (props) => {
  if (props.day === undefined) return 'Closed';
  return getTodaysHoursContent(props.day);
};

const getIsOpen = (props) => {
  const getIsOpenToday = () => {
    let todayInteger = new Date(Date.now()).getDay();
    if (todayInteger === 0) {
      todayInteger = 6;
    } else {
      todayInteger -= 1;
    }
    const sortedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    if (todayInteger === sortedDays.indexOf(props.day.name)) return true;
    return false;
  };
  if (isOpen(props.day) && getIsOpenToday()) return 'Open now';
  return '';
};

export default (props) => {
  return (
    <div className={styles.row}>
      <div className={styles.day}>{props.day.name}</div>
      <div className={styles.dayHoursBox}>
        <div className={styles.dayHours}>{getHours(props)}</div>
        <div className={styles.isOpen}>{getIsOpen(props)}</div>
      </div>
    </div>
  );
};
