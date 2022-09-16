<template>
  <div class="notes">

    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <NoteItem
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note"
    >
    </NoteItem>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue'
import NoteItem from '@/components/notes/NoteItem.vue'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useNotesStore } from '@/stores/notesStore.js'

const newNote = ref('')
const addEditNoteRef = ref('')

/*
  stores
*/

const notesStore = useNotesStore()

const addNote = () => {
  notesStore.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

</script>