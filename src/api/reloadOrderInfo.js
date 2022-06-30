import axios from 'axios';
import { API_BASE_URL } from '@/config';

export default function reloadOrderInfo() {
  const orderId = this.$store.state.orderInfo.id;
  return axios
    .get(`${API_BASE_URL}/api/orders/${orderId}`, {
      params: {
        userAccessKey: this.$store.state.userAccessKey,
      },
    })
    .then(() => { this.getInfo(); });
}
