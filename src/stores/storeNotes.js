import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore'
import { db } from '@/js/firebase'

const notesCollectionRef = collection(db, 'notes')

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotes() {
      const unsubscribe = onSnapshot(notesCollectionRef, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content
          }
          notes.push(note)
        });
        this.notes = notes
      });
    },
    async addNote(newNoteContent) {
      const currentDate = new Date().getTime()
      const id = currentDate.toString()

      await setDoc(doc(notesCollectionRef, id), {
        content: newNoteContent
      })

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