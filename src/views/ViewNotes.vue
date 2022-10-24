<template>
  <div class="notes">

    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
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
      v-for="note in storeNotes.notes"
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
import { useStoreNotes } from '@/stores/storeNotes.js'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const newNote = ref('')
const addEditNoteRef = ref('')

/*
  stores
*/

const storeNotes = useStoreNotes()

/*
  notes
*/

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

/*
  watch characters
*/

useWatchCharacters(newNote)

</script>