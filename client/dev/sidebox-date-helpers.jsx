import React from 'react';

const getTodaysHours = (hours) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date(Date.now());
  const day = daysOfWeek[today.getDay()];
  if (hours[day].open) return hours[day];
  return false;
};

const getTodaysHoursContent = (todaysHours) => {
  if (!todaysHours) return false;
  let { open, close } = todaysHours;
  let openSuffix = 'am';
  let closeSuffix = 'am';
  if (open > 12) {
    open -= 12;
    openSuffix = 'pm';
  }
  if (close > 12) {
    close -= 12;
    closeSuffix = 'pm';
  }
  return `${open}:00 ${openSuffix} - ${close}:00 ${closeSuffix}`;
};

const RenderHoursToday = (props) => {
  if (props.todaysHours) {
    const hoursTodayContent = getTodaysHoursContent(props.todaysHours);
    return <span>Today <em>{hoursTodayContent}</em></span>;
  }
  return <span>Closed today</span>;
};

export { getTodaysHours, getTodaysHoursContent, RenderHoursToday };
