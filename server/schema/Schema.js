const { buildSchema } = require('graphql');

const schema = buildSchema(`
  
  type Query {
    note(id : ID!) : Note
    notes : [Note]!
  }

  type Mutation {
    addNote(title: String!, description: String) : Note!
    editNote(id: ID!, title: String, description : String) : SemiNote
    deleteNote(id: ID!) : ID!
    changeColor(id: ID!, color : String!) : String!
    setIsPinned(id: ID!, isPinned: Boolean!) : Boolean!
  }

  type Note {
    id: ID!
    title : String!
    description: String
    color : String
    isPinned : Boolean
  }

  type SemiNote{
    id: ID
    title : String
    description : String
  }

`);

module.exports = { schema }