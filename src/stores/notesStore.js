import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/js/firebase'

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotes() {
      const querySnapshot = await getDocs(collection(db, 'notes'))
      querySnapshot.forEach((doc) => {
        let note = {
          id: doc.id,
          content: doc.data().content
        }
        this.notes.push(note)
      })
    },
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
    },
    updateNote(id, content) {
      const index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.find(note => note.id === id).content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach(note => count += note.content.length)
      return count
    }
  }
})