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
    return <span>Today <b>{getTodaysHoursContent(props.todaysHours)}</b></span>;
  }
  return <span><b>Closed today</b></span>;
};

const isOpen = (todaysHours) => {
  if (!todaysHours) return false;
  const today = new Date(Date.now());
  const open = new Date(today.getFullYear(), today.getMonth(), today.getDate(), todaysHours.open);
  const close = new Date(today.getFullYear(), today.getMonth(), today.getDate(), todaysHours.close);
  if (today.valueOf() >= open.valueOf() && today.valueOf() <= close.valueOf()) {
    return true;
  }
  return false;
};

export { getTodaysHours, getTodaysHoursContent, RenderHoursToday, isOpen };
