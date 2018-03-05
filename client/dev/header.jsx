import FaQuestion from 'react-icons/lib/fa/question-circle';
import FaCheck from 'react-icons/lib/fa/check-circle';
import FaLocation from 'react-icons/lib/fa/map-marker';
import FaLink from 'react-icons/lib/fa/external-link';
import FaPhone from 'react-icons/lib/fa/phone';
import FaCellPhone from 'react-icons/lib/fa/mobile';
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
    <div>
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
      <div className={styles.contact}>
        <div className={styles.address}>
          <div className={styles.grayicon}><FaLocation /></div>
          <div className={styles.addressBox}>
            {props.data.addressNumber} {props.data.addressStreet} 
            <br />
            {props.data.addressCity}, {props.data.addressState} {props.data.addressZip}
          </div>
        </div>
        <div>
          <div className={styles.grayicon}><FaPhone /></div>
          <div className={styles.addressBox}>
            ({props.data.phoneAreaCode}) {props.data.phoneOfficeCode}-{props.data.phoneLineCode}
          </div>
        </div>
        <div>
          <div className={styles.grayicon}><FaLink /></div>
          <a className={styles.contactLink} href={props.data.businessLink}>
            {props.data.businessLink}
          </a>
        </div>
        <div>
          <div className={styles.grayicon}><FaCellPhone /></div>
          <a className={styles.contactLink} href="#">Send to your Phone</a>
        </div>
        <div className={styles.clearBoth} />
      </div>
    </div>
  );
}