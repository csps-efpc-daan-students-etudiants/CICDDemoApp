<template>
  <div>
    <form role="form">
      <TextField text="Username" name="username"/>
      <TextField text="Password" name="password"/>
      <button class="btn btn-default" v-on:click="" type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextField from '@/components/TextField.vue'; // @ is an alias to /src

@Component({
  components: {
    TextField,
  },
})
export default class Home extends Vue {}
</script>
