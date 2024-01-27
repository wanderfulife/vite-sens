<template>
  <div class="form-group">
    <input class="form-control" list="gareList" type="text" v-model="searchTerm" placeholder="Nom Gare"
      @input="updateGare" />

  <datalist id="gareList">
    <option v-for="item in filteredGares" :key="item['Code UIC']" :value="item['Nom Gare']">{{ item['Nom Gare'] }}</option>
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
  return gares.filter(item => {
    const nomGare = item['Nom Gare']?.toLowerCase() ?? '';
    return nomGare.includes(searchTerm.value.toLowerCase());
  });
});
</script>
