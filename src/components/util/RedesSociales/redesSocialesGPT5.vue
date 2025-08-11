<template>
  <div class="flex gap-4 items-center">
    <a
      v-for="(social, index) in links"
      :key="index"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      class="transition-transform duration-200 hover:scale-110"
      :title="social.name"
    >
      <Icon
        :name="social.icon"
        :style="{ color: social.color || defaultColor, fontSize: size + 'px' }"
      />
    </a>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

// Props configurables
defineProps({
  links: {
    type: Array,
    required: true,
    default: () => []
  },
  size: {
    type: Number,
    default: 28
  },
  defaultColor: {
    type: String,
    default: '#555'
  }
})
</script>
