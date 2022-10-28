import { defineStore } from 'pinia'
import { 
  collection, onSnapshot, 
  doc, deleteDoc, updateDoc, addDoc,
  query, orderBy 
} from 'firebase/firestore'
import { db } from '@/js/firebase'

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
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
      const date = currentDate.toString()

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date
      });
    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete))
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content
      })
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