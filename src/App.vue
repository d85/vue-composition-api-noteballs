<template> 
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView/>
  </div>
</template>

<script setup>
/*
  imports
*/

import { onMounted } from 'vue'
import NavBar from '@/components/layout/NavBar.vue'
import { useNotesStore } from '@/stores/notesStore'

/*
  store
*/

const notesStore = useNotesStore()

/*
  mounted
*/

onMounted(() => {
  notesStore.getNotes()
})
</script>

<style>
@import 'bulma/css/bulma.min.css';

</style>