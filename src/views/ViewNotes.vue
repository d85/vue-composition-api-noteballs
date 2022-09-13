<template>
  <div class="notes">

    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <NoteItem
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
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
import { useNotesStore } from '@/stores/notesStore.js'

const newNote = ref('')
const newNoteRef = ref(null)

/*
  stores
*/

const notesStore = useNotesStore()

const addNote = () => {
  let currentDate = new Date().getTime()
  let id = currentDate.toString()

  const note = {
    id,
    content: newNote.value
  }
  
  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
}

/*
  delete note
*/

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter(note => note.id !== idToDelete)
}

</script>