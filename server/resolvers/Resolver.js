const { dataStore } = require('../firebase-config')

const root = {
    note: ({ id }) => notes.find(note => note.id == id),
    notes: async () => {
        const notes = []
        const snapshot = await dataStore.collection('notes').get();
        snapshot.forEach(note => notes.push({ id: note.id, ...note.data() }));
        return notes;
    },
    addNote: async ({ title, description }) => {
        const newNoteRef = await dataStore.collection('notes').doc()
        const note = { id: newNoteRef.id, title, description, color: "transparent", isPinned: false }
        await newNoteRef.set(note)
        return note
    },
    editNote: async ({ id, ...args }) => {
        await dataStore.collection('notes').doc(id).update({ ...args });
        return { id: id, ...args }
    },
    deleteNote: async ({ id }) => {
        await dataStore.collection('notes').doc(id).delete()
        return id;
    },
    changeColor: async ({ id, color }) => {
        await dataStore.collection('notes').doc(id).update({ color: color });
        return color;
    },
    setIsPinned: async ({ id, isPinned }) => {
        await dataStore.collection('notes').doc(id).update({ isPinned: isPinned });
        return isPinned;
    },
};

module.exports = { root }