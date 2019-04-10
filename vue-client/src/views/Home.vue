<template>
  <form role="form">

    <div class="container">
      <h2>Add a Task</h2>
        <div class="form-group">
          <label for="name">Name</label>
        <input type="textbox" id="name" v-model="name" class="form-control">
        </div>

        <button class="btn btn-default" id="addTask" type="submit" v-on:click.prevent="addItem">Add to List</button>
    </div>
    
    <div class="container">
      <h2>Task List</h2>
      <ul class="lst-spcd list-unstyled" v-for="p in tasks" v-bind:key="p.item">
        <li >
          <button v-on:click.prevent="toggleTask(p.uniqueid,!p.completed)" type="button" class="btn btn-link">
            <div v-if="p.completed">
              <s><strong><span class="wb-inv">Toggle </span>{{ p.name}}</strong></s>
            </div>
            <div v-else>
              <span class="wb-inv">Toggle </span>{{ p.name}}</strong>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </form>

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Api from '../services/api';
import {v4 as uuid} from 'uuid';

interface Task {
  uniqueid: string;
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
          uniqueid: i.uniqueid,
          name: i.name,
          completed: i.completed,
        });
      });
    } catch (reason) {
      throw reason;
    }

  }

  public async addItem(e: any) {
    const task = {
      id: 0,
      uniqueid: uuid(),
      name: this.name,
      completed: false,
    };

    try {
      const response = await Api().post('/task', task);
      this.tasks.push(task);
    } catch (reason) {
      throw reason;
    }

  }

  public async toggleTask(id: string, state: boolean) {
    try {
      const response = await Api().post('/toggleTask', { id, state});
      this.tasks.find((i: Task) => i.uniqueid === id)!.completed = state;
    } catch (reason) {
      throw reason;
    }

  }
}
</script>
