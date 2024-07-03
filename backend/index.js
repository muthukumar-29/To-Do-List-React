const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ListModel = require('./Models/List.js')
const { redirect } = require('react-router')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/datalist")
    .then((result) => {
        console.log("Database connected")
    }).catch((err) => { console.log("Failed Database") })

app.get('/get-items', (req, res) => {
    ListModel.find()
        .then(data => res.json(data))
        .catch(err => res.status(500).json("Failed to retrieve Data" + err))
})

app.get('/get-item/:id', async (req, res) => {
    const data = await ListModel.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json("Failed!!!"))
})

app.post('/update-item/:id', async (req, res) => {
    console.log(req.body);
    const data = await ListModel.findByIdAndUpdate(req.params.id, { title: req.body.title, content: req.body.content })
        .then(data => res.json(data))
        .catch(error => res.status(500).send("Failed!!!"))
})

app.post('/delete-item/:id', (req, res) => {
    const data = ListModel.findByIdAndDelete(req.params.id)
        .then(data => res.json(data))
        .catch(error => res.status(500).send("Failed!!!"))
})

app.post('/add', (req, res) => {
    const { title, content } = req.body;
    ListModel.findOne({ title: title })
        .then(list => {
            if (list) {
                res.json("Already this title is used")
            } else {
                ListModel.create({ title: title, content: content })
                    .then((result) => {
                        res.json("Success" + result)

                    }).catch((err) => {
                        res.json("Failed" + err)
                    })
            }
        })
})

app.listen(8080, () =>
    console.log("Server Created")
)