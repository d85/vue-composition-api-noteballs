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

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-success"
      max="100"
    />
    <template
      v-else>
      <NoteItem
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
      />
      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered
        has-text-grey-light is family-monospace py-6"
      >
        No notes here yet...
      </div>
    </template>
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
  store
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