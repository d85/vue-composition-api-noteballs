<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ notesStore.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ notesStore.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteballs"
      class="input"
      type="text"
      placeholder="Do you love noteballs?"
      maxLength="100"
      v-autofocus
    />
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue'
import { useNotesStore } from '@/stores/notesStore'
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
  store
*/

const notesStore = useNotesStore()

/*
  love noteballs
*/

const loveNoteballs = ref('')
useWatchCharacters(loveNoteballs)

</script>