<template>
  <div>
    <h2>This is a Vue 3 component!!</h2>
    <button @click="increase">Clicked {{ count }} times.</button>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { get } from '../utils/django-variables';

export default {
  setup() {
    const djangoVariables = get('header_title', 'header_title2');
    console.log(djangoVariables);

    const count = ref(0);
    const increase = () => {
      count.value++;
    };

    return {
      count,
      increase
    };
  }
};
</script>
