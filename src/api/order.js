import axios from 'axios';
import { API_BASE_URL } from '@/config';

export default function order() {
  this.formError = {};
  this.formErrorMessage = '';

  axios
    .post(`${API_BASE_URL}/api/orders`, {
      ...this.formData,
    }, {
      params: {
        userAccessKey: this.$store.state.userAccessKey,
      },
    })
    .then(() => {
      this.$store.commit('resetCart');
    })
    .catch((error) => {
      this.formError = error.response.data.error.request || {};
      this.formErrorMessage = error.response.data.error.message;
    });
}
