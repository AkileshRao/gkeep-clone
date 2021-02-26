import axios from 'axios'

const setNotes = () => {
    const data = {
        query: `
            query {
                notes{
                    id
                    title
                    description
                    isPinned
                    color
                }
            }
        `,
    }
    return helper(data)
}

const addNote = ({ title, description }) => {
    const data = {
        query: `
            mutation {
                addNote(title:"${title}", description:"${description}"){
                    id
                    title
                    description
                    isPinned
                    color
                }
            }
        `,
    }
    return helper(data)
}

const deleteNote = (id) => {
    const data = {
        query: `
            mutation{
                deleteNote(id:"${id}")
            }
        `
    }
    return helper(data)
}

const editNote = (note) => {
    const data = {
        query: `
            mutation{
                editNote(id:"${note.id}", title:"${note.title}", description:"${note.description}"){
                    id
                    title
                    description
                }
            }
        `
    }
    return helper(data)
}

const changeColor = (id, color) => {
    const data = {
        query: `
            mutation{
                changeColor(id:"${id}", color:"${color}")
            }
        `
    }
    return helper(data)
}

const setIsPinned = (id, isPinned) => {
    const data = {
        query: `
            mutation{
                setIsPinned(id:"${id}", isPinned:${isPinned})
            }
        `
    }
    return helper(data)
}

const helper = (data) => {
    return axios({
        url: process.env.VUE_APP_URL,
        method: 'post',
        data: data
    })
}

export { setNotes, addNote, deleteNote, changeColor, setIsPinned, editNote }