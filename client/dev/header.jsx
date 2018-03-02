import FaQuestion from 'react-icons/lib/fa/question-circle';
import FaCheck from 'react-icons/lib/fa/check-circle';
import React from 'react';
import styles from './header.css';

export default function (props) {
  let claimedContent = 'Unclaimed';
  let claimIcon = <FaQuestion />;
  let claimStyle = styles.unclaimed;
  if (props.data.claimedByOwner) {
    claimedContent = 'Claimed';
    claimIcon = <FaCheck />;
    claimStyle = styles.claimed;
  }
  let priceScale = '';
  for (let i = 0; i < props.data.priceRangeScale; i += 1) {
    priceScale = priceScale.concat('$');
  }
  return (
    <div className={styles.header}>
      <div className={styles.name}>{props.data.name}</div>
      <div className={styles.claimdiv}>
        <div className={styles.claimicon}>{claimIcon}</div>
        <div className={claimStyle}>{claimedContent}</div>
      </div>
      <div className={styles.bottomHeader}>
        {priceScale}
        <div className={styles.bullet}>&bull;</div>
        <div className={styles.metatags}>{props.data.metatags.join(', ')}</div>
      </div>
    </div>
  );
}
