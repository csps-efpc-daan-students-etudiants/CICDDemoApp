<template>
  <div class="form-group">
    <label> {{ text }} </label>
    <input type="textbox" :id="name" class="form-control"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TextField extends Vue {
  @Prop() private name!: string;
  @Prop() private text!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
