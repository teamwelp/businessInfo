import React from 'react';
import DayHours from './dayHours';
import styles from './sideHours.css';


export default (props) => {
  const sortedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const sortedDayHours = sortedDays.map((day) => {
    props.data.hours[day].name = day;
    return props.data.hours[day];
  });
  const rows = sortedDayHours.map((day) => {
    return <DayHours key={day.name} day={day} />;
  });
  return (
    <div className={styles.sidehours}>
      <div className={styles.hoursHeader}>Hours</div>
      <div className={styles.hoursTable}>
        {rows}
      </div>
    </div>
  );
};
