<template>
  <button @click="onClickHandle()" :class="class">{{ title }}</button>
</template>

<script setup>
defineProps({
  title: String,
  class: String,
  onClickHandle: Function
})

</script>

<style lang="scss" scoped></style>
