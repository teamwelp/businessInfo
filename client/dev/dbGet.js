import axios from 'axios';

export default function () {
  const url = window.location.href.slice(window.location.href.search('biz') + 4).replace('/', '');
  axios.get(`http://127.0.0.1:9001/id/${url}/`)
    .then((response) => {
      this.setState({ data: response.data[0] });
    })
    .catch((error) => {
      console.log(error);
    });
};
