import Vue from 'vue'
import Vuex from 'vuex'
import { setNotes, addNote, deleteNote, editNote, changeColor, setIsPinned } from './api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        notes: [],
        unPinnedNotes: [],
        pinnedNotes: [],
        mode: 'light'
    },
    getters: {
        notes(state) {
            return state.notes
        },
        pinnedNotes(state) {
            return state.notes.filter(note => note.isPinned === true)
        },
        unpinnedNotes(state) {
            return state.notes.filter(note => note.isPinned === false)
        },
        mode(state) {
            return state.mode
        }
    },
    mutations: {
        SET_NOTES(state, notes) {
            state.notes = notes
        },
        ADD_NOTE(state, note) {
            state.notes = [...state.notes, note]
        },
        EDIT_NOTE(state, note) {
            state.notes[state.notes.indexOf(note)] = note;
        },
        DELETE_NOTE(state, id) {
            state.notes = state.notes.filter(note => note.id != id)
        },
        SET_IS_PINNED(state, { id, isPinned }) {
            let updatedNote = state.notes.find(note => note.id == id)
            updatedNote.isPinned = isPinned;
        },
        CHANGE_COLOR(state, { id, color }) {
            let updatedNote = state.notes.find(note => note.id == id)
            updatedNote.color = color;
        },
        SET_MODE(state, mode) {
            state.mode = mode
        }
    },
    actions: {
        async setNotes(context) {
            const res = await setNotes();
            context.commit('SET_NOTES', res.data.data.notes);
        },
        async addNote(context, note) {
            const res = await addNote(note);
            context.commit('ADD_NOTE', res.data.data.addNote);
        },
        async deleteNote(context, id) {
            const res = await deleteNote(id);
            context.commit('DELETE_NOTE', res.data.data.deleteNote)

        },
        async editNote(context, note) {
            const res = await editNote(note);
            context.commit('EDIT_NOTE', res.data.data.editNote)
        },
        async changeColor(context, { id, color }) {
            const res = await changeColor(id, color);
            context.commit('CHANGE_COLOR', { id, color: res.data.data.changeColor })
        },
        async setIsPinned(context, { id, isPinned }) {
            const res = await setIsPinned(id, isPinned);
            context.commit('SET_IS_PINNED', { id, isPinned: res.data.data.setIsPinned })
        }
    },
})

