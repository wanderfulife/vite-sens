<template>
  <div class="form-group">
    <input class="form-control" list="gareList" type="text" v-model="searchTerm" placeholder="Nom Gare" @input="updateGare" />
    <datalist id="gareList">
      <option v-for="item in filteredGares" :key="item['Code UIC']" :value="item['Nom Gare']">{{ item['Nom Gare'] }}
      </option>
    </datalist>

  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import gares from './output.json';

const props = defineProps({
  modelValue: String
});
const emit = defineEmits(['update:modelValue']);

const searchTerm = ref(props.modelValue);

watch(searchTerm, (newValue) => {
  emit('update:modelValue', newValue);
});

const filteredGares = computed(() => {
  const searchLower = searchTerm.value.toLowerCase();
  const uniqueGares = new Map();

  for (const item of gares) {
    const nomGare = item['Nom Gare']?.toLowerCase() ?? '';
    if (nomGare.includes(searchLower)) {
      uniqueGares.set(item['Nom Gare'], item);
    }
  }

  return Array.from(uniqueGares.values());
});
</script>
