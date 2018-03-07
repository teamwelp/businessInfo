import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './index.css';
import Header from './header';
import Sidebox from './sidebox';
import SideHours from './sideHours';

const starterData = { '_id': '5a95c36256028a0cd03c9307', 'carParking': ['Parking Lot', 'Garage, Validated'], 'metatags': ['Soul Food', 'Bars', 'Dinner', 'Brunch'], 'acceptsCreditCards': false, 'bikeParking': true, 'byApptOnly': true, 'claimedByOwner': true, 'goodForKids': true, 'isYelpAdvertiser': true, 'id': 200, 'phoneAreaCode': 415, 'addressNumber': 301, 'healthInspection': 88, 'phoneLineCode': 7940, 'phoneOfficeCode': 421, 'priceRangeLow': 29, 'priceRangeRange': 9, 'priceRangeScale': 1, 'hours': { 'Mon': { 'open': 9, 'close': 18, '_id': '5a95c36256028a0cd03c92ff' }, 'Tue': { 'open': 9, 'close': 18, '_id': '5a95c36256028a0cd03c9300' }, 'Wed': { 'open': 9, 'close': 18, '_id': '5a95c36256028a0cd03c9301' }, 'Thu': { 'open': 9, 'close': 18, '_id': '5a95c36256028a0cd03c9302' }, 'Fri': { 'open': 9, 'close': 18, '_id': '5a95c36256028a0cd03c9303' }, 'Sat': { 'open': 10, 'close': 21, '_id': '5a95c36256028a0cd03c9304' }, 'Sun': { 'open': 10, 'close': 21, '_id': '5a95c36256028a0cd03c9305' }, '_id': '5a95c36256028a0cd03c9306' }, 'businessLink': 'http://olegsburgerpalace.com', 'addressCity': 'San Francisco', 'addressState': 'CA', 'addressStreet': 'Mission Street', 'addressZip': '94103', 'longDescription': 'Nostrud do et commodo adipisicing sunt cupidatat voluptate duis proident est laborum. Culpa reprehenderit incididunt proident magna Lorem adipisicing deserunt quis sint eiusmod tempor esse. Culpa culpa amet exercitation proident velit in culpa eu commodo culpa. Aliquip cillum veniam consectetur laboris quis proident ullamco proident ullamco anim sint labore non elit. Minim sunt cupidatat tempor exercitation consectetur. Ipsum minim velit ex tempor enim elit ad. Duis dolore mollit commodo ea Lorem reprehenderit sint ex eu cillum. Enim voluptate dolore in esse occaecat pariatur anim reprehenderit commodo est pariatur dolor pariatur aliquip. Nulla et amet sunt ex consequat exercitation eiusmod amet non. Quis Lorem non anim deserunt.', 'name': 'Oleg\'s Burger Palace', '__v': 0 };

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: starterData,
    };
  }
  componentWillMount() {
    let url = document.location.href.split('/');
    url = url[url.length - 2];
    axios.get(`http://127.0.0.1:3000/id/${url}/`)
      .then((response) => {
        this.setState({ data: response.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Header data={this.state.data} />
        <div className={styles.sidebar}>
          <Sidebox data={this.state.data} />
          <SideHours data={this.state.data} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
