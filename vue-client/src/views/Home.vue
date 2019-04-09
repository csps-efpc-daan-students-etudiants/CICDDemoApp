<template>
  <div>
    <div class="container">
      <form role="form">
        <div class="form-group">
          <label for="name">Name</label>
        <input type="textbox" id="name" v-model="name" class="form-control">
        </div>

        <button class="btn btn-default" id="addTask" type="submit" v-on:click.prevent="addItem">Add to List</button>
      </form>
    </div>
    <p>
      <ul class="lst-spcd" v-for="p in tasks" v-bind:key="p.item">
        <li>
          <strong>{{ p.name}}</strong> Completed {{ p.completed}}
        </li>
      </ul>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Api from '../services/api';

interface Task {
  name: string;
  completed: boolean;
}

@Component
export default class Home extends Vue {
  public tasks: Task[] = [];
  public name: string = '';

  public data() {
    return {
      tasks: [],
      name: '',
    };
  }

  public async mounted() {
    try {
      const result = await Api().get('/tasks');

      result.data.forEach((i: Task) => {
        this.tasks.push({
          name: i.name,
          completed: i.completed,
        });
      });
    } catch (reason) {
      throw reason;
    }
  }

  public async addItem(e: any) {
    try {
      const response = await Api().post('/task', {
        name: this.name,
        completed: false,
      });
      this.tasks.push({name: this.name, completed: false});
    } catch (reason) {
      throw reason;
    }

  }
}
</script>
