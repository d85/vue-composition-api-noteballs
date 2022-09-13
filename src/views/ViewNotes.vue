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
  notesStore.addNote(newNote.value)

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