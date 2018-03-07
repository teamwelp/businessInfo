import React from 'react';
import FaClock from 'react-icons/lib/fa/clock-o';
import MdMenu from 'react-icons/lib/md/local-restaurant';
import { getTodaysHours, RenderHoursToday, isOpen } from './sidebox-date-helpers.jsx';
import styles from './sidebox.css';

const calcOpen = (props) => {
  let clockIcon = styles.clockOpen;
  let openNowStyle = styles.openNow;
  let openNowContent = 'Open now';
  const todaysHours = getTodaysHours(props.data.hours);
  if (!todaysHours || !isOpen(todaysHours)) {
    clockIcon = styles.clockClosed;
    openNowStyle = styles.closedNow;
    openNowContent = 'Closed now';
  }
  return {
    clockIcon,
    openNowStyle,
    openNowContent,
    todaysHours,
  };
};
const calcPrice = (props) => {
  let priceIconRed = '';
  let priceIconGray = '';
  for (let i = 0; i < 4; i += 1) {
    if (i < props.data.priceRangeScale) {
      priceIconRed = `${priceIconRed}$`;
    } else {
      priceIconGray = `${priceIconGray}$`;
    }
  }
  const priceRange = `$${props.data.priceRangeLow}-${props.data.priceRangeLow + props.data.priceRangeRange}`;
  return {
    priceIconRed,
    priceIconGray,
    priceRange,
  };
};

export default (props) => {
  return (
    <div className={styles.sidebox}>
      <div className={styles.categoryBox}>
        <FaClock className={`${styles.icon} ${calcOpen(props).clockIcon}`} />
        <div className={`${styles.contentBox} ${styles.column}`}>
          <span className={styles.hoursToday}>
            <RenderHoursToday todaysHours={calcOpen(props).todaysHours} />
          </span>
          <span className={calcOpen(props).openNowStyle}>
            <b>{calcOpen(props).openNowContent}</b>
          </span>
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
            <div className={styles.priceIconRed}>{calcPrice(props).priceIconRed}</div>
            <div className={styles.priceIconGray}>{calcPrice(props).priceIconGray}</div>
          </div>
        </div>
        <span className={styles.contentBox}>Price Range&nbsp;&nbsp;<b>{calcPrice(props).priceRange}</b></span>
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
