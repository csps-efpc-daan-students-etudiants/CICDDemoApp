<template>
  <div>
    <div class="container">
    <form role="form">
      <TextField text="Name" name="item"/>
      <TextField text="Value" name="value"/>
      <button class="btn btn-default" id="purchase" type="submit">Purchase</button>
    </form>
    </div>
    <ul class="lst-spcd" 
        v-for="p in purchased" 
        v-bind:key="p.item">
      <li> <strong>{{ p.item}}</strong> <span class="text-right">{{ p.value }}</span> x{{p.quantity}} = {{ p.value * p.quantity}} </li>
    </ul>
    <hr>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TextField from '@/components/TextField.vue'; // @ is an alias to /src
import Api from '../services/api';

interface PurchaseItem {
  item: string;
  value: number;
  quantity: number;
}

@Component({
  components: {
    TextField,
  },
})
export default class Home extends Vue {

  public purchased: PurchaseItem[] = [];

  public data() {
    return {
      purchased: [],
    };
  }
  public mounted() {

    Api().get('/purchases').then((result) => {

      result.data.forEach((i: any) => {
        this.purchased.push({
          item : i.item,
          value: parseInt(i.value, 10),
          quantity: parseInt(i.quantity, 10),
        });
      });
    }).catch((reason) => {
      throw reason;
    });

  }
}
</script>
