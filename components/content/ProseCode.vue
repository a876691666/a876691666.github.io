<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <span
    class="bg-gray-100 dark:bg-gray-800 py-0.5 px-1 border border-gray-200 dark:border-gray-700 rounded-md leading-[26px] box-border"
  >
    <slot />
  </span>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
