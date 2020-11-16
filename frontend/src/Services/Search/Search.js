import axios from 'axios';
import isPalindrome from '../../Utils/Palindromo';

export default function Search(val){
  return axios({
    method: 'GET',
    url: `/api/productos?search=${val}`
  }).then((resp) => {
    const Arr = [];
    if (resp.data) {
      resp.data.map((item) => {
        if (isPalindrome(item.brand)) {
          let data = item;
          data.isPalindrome = true;
          data.hasDiscount = true;
          data.discount = (item.price / 2);
          data.discountPercentage = 50;
          return Arr.push(data);
        } else {
          let data = item;
          data.isPalindrome = false;
          data.hasDiscount = false;
          return Arr.push(data);
        }
      })
      return Arr;
    }
    return Arr;
  })
    .catch((error) => error);
}