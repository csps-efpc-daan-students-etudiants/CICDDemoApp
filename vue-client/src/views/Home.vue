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
      <ul class="lst-spcd list-unstyled" v-for="p in tasks" v-bind:key="p.item">
        <li v-on:click="toggleTask(p.id,!p.completed)">
          <div v-if="p.completed">
            <s><strong>{{ p.name}}</strong></s>
          </div>
          <div v-else>
            <strong>{{ p.name}}</strong>
          </div>
        </li>
      </ul>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Api from '../services/api';

interface Task {
  id: number;
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
          id: i.id,
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
      name: this.name,
      completed: false,
    };

    try {
      const response = await Api().post('/task', task);
      task.id = parseInt(response.data, 10);
      this.tasks.push(task);
    } catch (reason) {
      throw reason;
    }

  }

  public async toggleTask(id: number, state: boolean) {
    try {
      const response = await Api().post('/toggleTask', { id, state});
      this.tasks.find((i: Task) => i.id === id)!.completed = state;
    } catch (reason) {
      throw reason;
    }

  }
}
</script>
