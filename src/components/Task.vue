<template>
  <div
    @dblclick="toggleReminder(task.id)"
    class="my-2 card rounded-none w-full bg-base-100 shadow-xl"
    :class="[task.reminder && 'reminder']"
  >
    <div class="card-body">
      <div class="flex justify-between">
        <h2 class="card-title w-[90%]">{{ task.text }}</h2>
        <button @click="deleteTask(task.id)">❌</button>
        <!-- <Button @click="deleteTask(task.id)" title="❌"></Button> -->
      </div>
      <p>{{ task.day }}</p>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue';


const emit = defineEmits(['delete-task', 'toggle-reminder']);

function deleteTask(id) {
  emit('delete-task', id);
}

const toggleReminder = (id) => {
  emit('toggle-reminder', id);
};

defineProps({
  task: {
    id: Number,
    text: String,
    day: String,
    reminder: Boolean,
  },
});
</script>

<style lang="css" scoped>
.reminder {
  border-left: 5px solid green;
}
</style>
