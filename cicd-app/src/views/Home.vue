<template>
  <div>
    <form role="form">
      <TextField text="Username" name="username"/>
      <Password text="Password" name="password"/>
      <button class="btn btn-default" id="login" type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextField from '@/components/TextField.vue'; // @ is an alias to /src
import Password from '@/components/Password.vue'; // @ is an alias to /src

@Component({
  components: {
    TextField,
    Password,
  },
})
export default class Home extends Vue {}
</script>
