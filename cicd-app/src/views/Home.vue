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
        v-bind:key="p.name">
      <li> <strong>{{ p.name }}</strong> <span class="text-right">{{ p.value }}</span> x{{p.amount}} = {{ p.value * p.amount}} </li>
    </ul>
    <hr>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TextField from '@/components/TextField.vue'; // @ is an alias to /src

interface Item { 
  name: string,
  value: number
  amount: number
}

@Component({
  components: {
    TextField,
  },
})
export default class Home extends Vue {
  @Prop() purchased: Item[] = [{
    name: "Gum",
    value: 1,
    amount: 1
  },{
    name: "Chocolate Bar",
    value: 2,
    amount: 10
  },{
    name: "Gold Bar",
    value: 5,
    amount: 3
  }];
}
</script>
