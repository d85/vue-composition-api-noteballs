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
      v-for="note in notes"
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

const newNote = ref('')
const newNoteRef = ref(null)

/*
notes
*/

const notes = ref([
  {
    id: 'id1',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia, quibusdam dolor cumque consequatur perferendis reprehenderit dolorem optio sequi provident dolores nulla magnam corrupti eos reiciendis eligendi vitae obcaecati amet?'
  },
  {
    id: 'id2',
    content: 'This is a shorter note! Woo!'
  },
])

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

</script>