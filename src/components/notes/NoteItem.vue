<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">{{ note.content }}</div>
      <div class="columns is-mobile has-text-grey-light mt-2">
        <small class="column">{{ dateFormatted }}</small>
        <small class="column has-text-right">{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/edit-note/${note.id}`"
        class="card-footer-item"
        href="#"
      >
        Edit
      </RouterLink>
      <a
        @click.prevent="modals.deleteNote = true"
        class="card-footer-item"
        href="#"
      >
        Delete
      </a>
    </footer>
    <ModalDeleteNote 
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
/*
  imports
*/

import { computed, reactive } from 'vue'
import { useDateFormat } from '@vueuse/core'
import ModalDeleteNote from '@/components/notes/ModalDeleteNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'

/*
  props
*/

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/*
  store
*/

const storeNotes = useStoreNotes()

/*
  date formatted
*/
const dateFormatted = computed(() => {
  const date = new Date(parseInt(props.note.date))
  const formattedDate = useDateFormat(date, 'DD-MM-YYYY @ HH:mm')
  return formattedDate.value
})

/*
  character length
*/

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

/*
  modals
*/

const modals = reactive({
  deleteNote: false
})

</script>