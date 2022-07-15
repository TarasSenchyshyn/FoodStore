import axios from 'axios';

import {baseURL} from '../constants/baseURL';

export default axios.create({
  baseURL,
});
