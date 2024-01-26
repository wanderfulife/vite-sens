<template>
  <div class="form-group">
    <input class="form-control" type="text" v-model="searchTerm" @input="showDropdown = true" placeholder="Nom Gare" />

    <ul v-if="showDropdown && filteredGares.length" class="gare-dropdown">
      <li v-for="(item, index) in filteredGares" :key="`${item['Code UIC']}-${index}`" @click="selectGare(item)">
        {{ item['Nom Gare'] }}
      </li>
    </ul>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import gares from "./output.json";

const searchTerm = ref('');
const showDropdown = ref(false);

const selectGare = (item) => {
  searchTerm.value = item['Nom Gare'];
  showDropdown.value = false;
};

const filteredGares = computed(() => {
  if (!searchTerm.value) {
    return [];
  }
  return gares.filter(item => {
    const nomGare = item['Nom Gare'] ? item['Nom Gare'].toLowerCase() : '';
    return nomGare.includes(searchTerm.value.toLowerCase());
  });
});
</script>


