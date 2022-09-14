<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">{{ note.content }}</div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }}</small>
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
        @click.prevent="notesStore.deleteNote(note.id)"
        class="card-footer-item"
        href="#"
      >
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
/*
  imports
*/

import { computed } from "vue";
import { useNotesStore } from "@/stores/notesStore"

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

const notesStore = useNotesStore()

/*
  character length
*/

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

</script>