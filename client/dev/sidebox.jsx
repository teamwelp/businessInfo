import React from 'react';
import FaClock from 'react-icons/lib/fa/clock-o';
import MdMenu from 'react-icons/lib/md/local-restaurant';
import { getTodaysHours, RenderHoursToday } from './sidebox-date-helpers.jsx';
import styles from './sidebox.css';

export default (props) => {
  let clockIcon = styles.clockOpen;
  let openNowStyle = styles.openNow;
  let openNowContent = 'Open now';
  const todaysHours = getTodaysHours(props.data.hours);
  if (!todaysHours) {
    clockIcon = styles.clockClosed;
    openNowStyle = styles.closedNow;
    openNowContent = 'Closed now';
  }
  let todayStart = 0;
  let priceIcon = '';
  let priceRange = '';
  return (
    <div className={styles.sidebox}>
      <div className={styles.categoryBox}>
        <FaClock className={`${styles.icon} ${clockIcon}`} />
        <div className={styles.contentBox}>
          <span className={styles.hoursToday}><RenderHoursToday todaysHours={todaysHours} /></span>
          <span className={openNowStyle}><b>{openNowContent}</b></span>
        </div>
      </div>
      <div className={styles.categoryBox}>
        <MdMenu className={styles.icon} />
        <div className={styles.contentBox}>
          <a href="https://www.yelp.com/menu/gary-danko-san-francisco" className={styles.menu}>Full menu</a>
        </div>
      </div>
      <div className={styles.categoryBox}>
        <div className={styles.icon}>{priceIcon}</div>
        <span className={styles.contentBox}>Price Range <b>{priceRange}</b></span>
      </div>
      <div className={styles.categoryBox}>
        <div className={styles.healthIcon}>{props.data.healthInspection}</div>
        <div className={styles.contentBox}>
          <a className={styles.boldLink} href="https://www.yelp.com/inspections/gary-danko-san-francisco">Health Inspection</a>
          <span className={styles.healthtext}>{props.data.healthInspection} out of 100</span>
        </div>
      </div>
    </div>
  );
};
