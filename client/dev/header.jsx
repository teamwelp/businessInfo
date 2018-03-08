import FaQuestion from 'react-icons/lib/fa/question-circle';
import FaCheck from 'react-icons/lib/fa/check-circle';
import FaLocation from 'react-icons/lib/fa/map-marker';
import FaLink from 'react-icons/lib/fa/external-link';
import FaPhone from 'react-icons/lib/fa/phone';
import FaCellPhone from 'react-icons/lib/fa/mobile';
import React from 'react';
import dbGet from './dbGet';
import styles from './header.css';

const starterData = { '_id': '5a95c36256028a0cd03c9307', 'carParking': ['Parking Lot', 'Garage, Validated'], 'metatags': ['Soul Food', 'Bars', 'Dinner', 'Brunch'], 'acceptsCreditCards': false, 'bikeParking': true, 'byApptOnly': true, 'claimedByOwner': true, 'goodForKids': true, 'isYelpAdvertiser': true, 'id': 200, 'phoneAreaCode': 415, 'addressNumber': 301, 'healthInspection': 88, 'phoneLineCode': 7940, 'phoneOfficeCode': 421, 'priceRangeLow': 29, 'priceRangeRange': 9, 'priceRangeScale': 1, 'hours': { 'Mon': { 'open': 9, 'close': 18, '_id': '5a95c36256028a0cd03c92ff' }, 'Tue': { 'open': 9, 'close': 18, '_id': '5a95c36256028a0cd03c9300' }, 'Wed': { 'open': 9, 'close': 18, '_id': '5a95c36256028a0cd03c9301' }, 'Thu': { 'open': 9, 'close': 18, '_id': '5a95c36256028a0cd03c9302' }, 'Fri': { 'open': 9, 'close': 18, '_id': '5a95c36256028a0cd03c9303' }, 'Sat': { 'open': 10, 'close': 21, '_id': '5a95c36256028a0cd03c9304' }, 'Sun': { 'open': 10, 'close': 21, '_id': '5a95c36256028a0cd03c9305' }, '_id': '5a95c36256028a0cd03c9306' }, 'businessLink': 'http://olegsburgerpalace.com', 'addressCity': 'San Francisco', 'addressState': 'CA', 'addressStreet': 'Mission Street', 'addressZip': '94103', 'longDescription': 'Nostrud do et commodo adipisicing sunt cupidatat voluptate duis proident est laborum. Culpa reprehenderit incididunt proident magna Lorem adipisicing deserunt quis sint eiusmod tempor esse. Culpa culpa amet exercitation proident velit in culpa eu commodo culpa. Aliquip cillum veniam consectetur laboris quis proident ullamco proident ullamco anim sint labore non elit. Minim sunt cupidatat tempor exercitation consectetur. Ipsum minim velit ex tempor enim elit ad. Duis dolore mollit commodo ea Lorem reprehenderit sint ex eu cillum. Enim voluptate dolore in esse occaecat pariatur anim reprehenderit commodo est pariatur dolor pariatur aliquip. Nulla et amet sunt ex consequat exercitation eiusmod amet non. Quis Lorem non anim deserunt.', 'name': 'Oleg\'s Burger Palace', '__v': 0 };

const calcClaimed = (props) => {
  let claimedContent = 'Unclaimed';
  let claimIcon = <FaQuestion />;
  let claimStyle = styles.unclaimed;
  if (props.data.claimedByOwner) {
    claimedContent = 'Claimed';
    claimIcon = <FaCheck />;
    claimStyle = styles.claimed;
  }
  return {
    claimedContent,
    claimIcon,
    claimStyle,
  };
};
const calcPrice = (props) => {
  let priceScale = '';
  for (let i = 0; i < props.data.priceRangeScale; i += 1) {
    priceScale = priceScale.concat('$');
  }
  return priceScale;
};

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructed');
    this.state = {
      data: starterData,
    };
  }
  componentWillMount() {
    const dbGetThis = dbGet.bind(this);
    dbGetThis();
  }
  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.name}>
            {this.state.data.name}
            &nbsp;
            <div className={styles.claimicon}>{calcClaimed(this.state).claimIcon}</div>
            <div className={calcClaimed(this.state).claimStyle}>
              {calcClaimed(this.state).claimedContent}
            </div>
          </div>
          <div className={styles.bottomHeader}>
            {calcPrice(this.state)}
            <div className={styles.bullet}>&bull;</div>
            <div className={styles.metatags}>{this.state.data.metatags.join(', ')}</div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.address}>
            <div className={styles.grayicon}><FaLocation /></div>
            <div className={styles.addressPhone}>
              {this.state.data.addressNumber} {this.state.data.addressStreet} 
              <br />
              {this.state.data.addressCity}
              , {this.state.data.addressState} {this.state.data.addressZip}
            </div>
          </div>
          <div>
            <div className={styles.grayicon}><FaPhone /></div>
            <div className={styles.addressPhone}>
              ({this.state.data.phoneAreaCode}) {this.state.data.phoneOfficeCode}
              -{this.state.data.phoneLineCode}
            </div>
          </div>
          <div>
            <div className={styles.grayicon}><FaLink /></div>
            <a className={styles.contactLink} href={this.state.data.businessLink}>
              {this.state.data.businessLink}
            </a>
          </div>
          <div>
            <div className={styles.grayicon}><FaCellPhone /></div>
            <a className={styles.contactLink} href="http://www.google.com/">Send to your Phone</a>
          </div>
          <div className={styles.clearBoth} />
        </div>
      </div>
    );
  }
}
