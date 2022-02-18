<template>
  <div class="flex-1 w-1/2 mx-auto py-10 relative h-screen">
    <Header title="Todo">
      <Button
        :onClickHandle="onClick"
        :title="showAddTaskDescription[showAddTask]"
        class="btn btn-outline btn-primary"
      />
    </Header>
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
   <Tasks
        @toggle-reminder="toggleReminder"
        @delete-task="deleteTask"
        :tasks="tasks"
        class=""
      />
    <Footer />
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Button from './components/Button.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';
import { ref, onMounted } from 'vue';

const BE_URL = import.meta.env.VITE_APP_BE_URL;

const tasks = ref([]);
onMounted(async () => {
  tasks.value = await fetchTasks();
});
const showAddTask = ref(false);

const showAddTaskDescription = {
  true: 'Close',
  false: 'Add task',
};

const deleteTask = async (id) => {
  if (confirm('You want to delete this?')) {
    const res = await fetch(`${BE_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });

    res.status === 200
      ? (tasks.value = tasks.value.filter((task) => task.id !== id))
      : alert('Error Deleting task');
  }
};

const toggleReminder = async (id) => {
  const task = await fetchTask(id);
  const updatetask = { ...task, reminder: !task.reminder };

  const res = await fetch(`${BE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatetask),
  });

  const data = await res.json();

  tasks.value = tasks.value.map((task) =>
    task.id === id ? { ...task, reminder: data.reminder } : task
  );
};

const onClick = () => {
  showAddTask.value = !showAddTask.value;
};

const addTask = async (task) => {
  const res = await fetch(`${BE_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  const data = await res.json();

  tasks.value = [...tasks.value, data];
};

const fetchTasks = async () => {
  const res = await fetch(`${BE_URL}/tasks`);
  const data = await res.json();

  return data;
};

const fetchTask = async (id) => {
  const res = await fetch(`${BE_URL}/tasks/${id}`);
  const data = await res.json();

  return data;
};
</script>
