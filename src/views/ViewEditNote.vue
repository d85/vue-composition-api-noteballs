<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="$router.back()"
          class="button is-link is-light mr-2"
        >
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>

/*
  imports
*/

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useNotesStore } from '@/stores/notesStore'

/*
  router
*/

const route = useRoute()
console.log(route.params.id)

/*
  store
*/

const notesStore = useNotesStore()

/*
  note
*/

const noteContent = ref('')
noteContent.value = notesStore.getNoteContent(route.params.id)

/*
  save clicked
*/

const handleSaveClicked = () => {
  notesStore.updateNote(route.params.id, noteContent.value)
}

</script>