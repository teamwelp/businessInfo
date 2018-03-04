import React from 'react';
import FaClock from 'react-icons/lib/fa/clock-o';
import MdMenu from 'react-icons/lib/md/local-restaurant';
// import { getTodaysHours, getTodaysHoursContent, RenderHoursToday } from './sidebox-date-helpers';
import styles from './sidebox.css';

export default (props) => {
  let clockIcon = styles.clockOpen;
  if (isClosed()) {
    clockIcon = styles.clockClosed;
  }
  let todayStart = 0;
  let openNowStyle = styles.openNow;
  let openNowContent = '';
  let priceIcon = '';
  let priceRange = '';
  return (
    <div className={styles.sidebox}>
      <div className={styles.hoursTodayBox}>
        <FaClock className={clockIcon} />
        <div className={styles.contentBox}>
          <span className={styles.hoursToday}>{hoursTodayContent}</span>
          <span className={openNowStyle}>{openNowContent}</span>
        </div>
      </div>
      <div className={styles.menuBox}>
        <MdMenu className={styles.menuIcon} />
        <div className={styles.contentBox}>
          <a href="https://www.yelp.com/menu/gary-danko-san-francisco" className={styles.menu}>Full menu</a>
        </div>
      </div>
      <div className={styles.priceBox}>
        <div className={styles.priceIcon}>{priceIcon}</div>
        <span className={styles.contentBox}>Price Range <em>{priceRange}</em></span>
      </div>
      <div className={styles.health}>
        <div className={styles.healthIcon}>{props.data.healthInspection}</div>
        <div className={styles.contentBox}>
          <a className={styles.boldLink} href="https://www.yelp.com/inspections/gary-danko-san-francisco">Health Inspection</a>
          <span className={styles.healthtext}>{props.data.healthInspection} out of 100</span>
        </div>
      </div>
    </div>
  );
};
