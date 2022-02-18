<template>
  <form @submit="onSubmit">
    <div class="grid gap-y-1 py-4">
      <div class="form-control w-full">
        <label class="input-group w-full">
          <span class="w-1/3">Text</span>
          <input
            type="text"
            placeholder="info@site.com"
            class="input input-bordered w-full"
            name="text"
            v-model="text"
          />
        </label>
      </div>
      <div class="form-control w-full">
        <label class="input-group w-full">
          <span class="w-1/3">Date</span>
          <input
            type="text"
            placeholder="asd"
            class="input input-bordered w-full"
            name="day"
            v-model="day"
          />
        </label>
      </div>
      <div class="form-control w-full">
        <label class="input-group w-full">
          <span class="w-1/3">Reminder</span>
          <input
            type="checkbox"
            name="reminder"
            v-model="reminder"
            class="toggle input input-bordered"
          />
        </label>
      </div>
      <div class="form-control w-full">
        <input
          type="submit"
          value="Save Task"
          class="btn btn-primary text-white"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const emits = defineEmits(['add-task']);

const text = ref('');
const day = ref('');
const reminder = ref(false);

const onSubmit = (e) => {
  e.preventDefault();
  if (!text.value) {
    alert('Please insert task');
    return;
  }

  const newTask = {
    id: Math.floor(Math.random() * 100000),
    text: text.value,
    day: day.value,
    reminder: reminder.value,
  };
  emits('add-task', newTask);

  text.value = '';
  day.value = '';
  reminder.value = false;
};
</script>

<style lang="scss" scoped></style>
