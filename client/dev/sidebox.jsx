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
  let priceIconRed = '';
  let priceIconGray = '';
  for (let i = 0; i < 4; i += 1) {
    if (i < props.data.priceRangeScale) {
      priceIconRed = `${priceIconRed}$`;
    } else {
      priceIconGray = `${priceIconGray}$`;
    }
  }
  let priceRange = `$${props.data.priceRangeLow}-${props.data.priceRangeLow + props.data.priceRangeRange}`;
  return (
    <div className={styles.sidebox}>
      <div className={styles.categoryBox}>
        <FaClock className={`${styles.icon} ${clockIcon}`} />
        <div className={`${styles.contentBox} ${styles.column}`}>
          <span className={styles.hoursToday}><RenderHoursToday todaysHours={todaysHours} /></span>
          <span className={openNowStyle}><b>{openNowContent}</b></span>
        </div>
      </div>
      <span className={styles.hl} />
      <div className={styles.categoryBox}>
        <MdMenu className={styles.icon} />
        <div className={styles.contentBox}>
          <a className={styles.boldLink} href="https://www.yelp.com/menu/gary-danko-san-francisco">Full menu</a>
        </div>
      </div>
      <span className={styles.hl} />
      <div className={styles.categoryBox}>
        <div className={styles.icon}>
          <div className={styles.priceIcon}>
            <div className={styles.priceIconRed}>{priceIconRed}</div>
            <div className={styles.priceIconGray}>{priceIconGray}</div>
          </div>
        </div>
        <span className={styles.contentBox}>Price Range&nbsp;&nbsp;<b>{priceRange}</b></span>
      </div>
      <span className={styles.hl} />
      <div className={styles.categoryBox}>
        <div className={`${styles.icon} ${styles.flexCenter}`}>
          <div className={styles.healthIcon}>{props.data.healthInspection}</div>
        </div>
        <div className={styles.contentBox}>
          <a className={styles.boldLink} href="https://www.yelp.com/inspections/gary-danko-san-francisco">Health Inspection</a>
          <span className={styles.healthtext}>&nbsp;{props.data.healthInspection} out of 100</span>
        </div>
      </div>
    </div>
  );
};
