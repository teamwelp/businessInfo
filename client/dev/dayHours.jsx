import React from 'react';
import styles from './dayHours.css';
import { getTodaysHoursContent, isOpen } from './sidebox-date-helpers';

export default (props) => {
  const getHours = () => {
    if (props.day === undefined) return 'Closed';
    return getTodaysHoursContent(props.day);
  };
  const hours = getHours();
  const getIsOpen = () => {
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
