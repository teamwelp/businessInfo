import React from 'react';
import DayHours from './dayHours';
import styles from './sideHours.css';

const calcDays = (props) => {
  const sortedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const newProps = Object.assign({}, props);
  return sortedDays.map((day) => {
    newProps.data.hours[day].name = day;
    return newProps.data.hours[day];
  });
};

const mapDayHours = (days) => {
  return days.map(day => <DayHours key={day.name} day={day} />);
};

export default (props) => {
  return (
    <div className={styles.sidehours}>
      <div className={styles.hoursHeader}>Hours</div>
      <div className={styles.hoursTable}>
        {mapDayHours(calcDays(props))}
      </div>
    </div>
  );
};
