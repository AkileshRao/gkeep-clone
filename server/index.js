const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { schema } = require('./schema/Schema')
const { root } = require('./resolvers/Resolver')
const schedule = require('node-schedule');
const cors = require('cors')
const { dataStore } = require('./firebase-config')

const PORT = process.env.PORT || 5000
const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));



const job = schedule.scheduleJob('* 0 * * *', async function () {
    const notes = []
    const snapshot = await dataStore.collection('notes').get();
    snapshot.forEach(note => notes.push({ id: note.id, ...note.data() }));
    notes.map(async note => {
        await dataStore.collection('notes').doc(note.id).delete()
    })
});

app.listen(PORT, () => console.log(`Now browse to ${PORT}/graphql`));