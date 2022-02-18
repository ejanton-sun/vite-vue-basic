<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">{{ title }}</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><slot></slot></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped></style>
