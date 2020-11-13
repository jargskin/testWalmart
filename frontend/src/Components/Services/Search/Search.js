import axios from 'axios';

export default function Search(val){
  return axios({
    method: 'GET',
    url: `/api/productos?search=${val}`
  }).then((resp) => resp.data)
    .catch((error) => error);
}