import axios from 'axios';
import { prop, range } from 'ramda';

const call = () =>
  axios
    .get('http://localhost:5283')
    .then(prop('data'))
    .catch(err => err); // le' ignore error


Promise
  .race(range(0,5).map(call))
  .then(console.log)
  .catch(console.error);
