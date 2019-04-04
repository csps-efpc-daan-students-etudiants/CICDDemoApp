import api from '@/services/api';

export default class PurchaseService  {
  public getPurchases() {
    return api().get('purchases');
  }
}


