<template>
  <vue3-simple-typeahead
    id="typeahead_id"
    placeholder="Start writing..."
    :items="def"
    :minInputLength="1"
  >
  </vue3-simple-typeahead>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
import SimpleTypeahead from 'vue3-simple-typeahead';
// import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css' //Optional default CSS
import { items } from '../utils/constant.js';

export default {
  name: 'Typehead',
  components: {
    SimpleTypeahead,
  },
  setup() {
    const def = computed(() => items);

    return {
      def,
    };
  },
};
</script>

<style lang="css" scoped>
:deep div.simple-typeahead-list {
  height: 200px;
  position: absolute;
  @apply mt-1 pt-3 pb-1 px-[14px] bg-gray-100 border border-gray-300 rounded-[5px] w-[489px] z-10;
}

</style>
