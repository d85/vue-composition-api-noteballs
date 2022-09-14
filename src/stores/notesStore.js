import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia, quibusdam dolor cumque consequatur perferendis reprehenderit dolorem optio sequi provident dolores nulla magnam corrupti eos reiciendis eligendi vitae obcaecati amet?'
        },
        {
          id: 'id2',
          content: 'This is a shorter note! Woo!'
        }
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      const currentDate = new Date().getTime()
      const id = currentDate.toString()

      const note = {
        id,
        content: newNoteContent
      }
      
      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => note.id !== idToDelete)
    }
  }
})