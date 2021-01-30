const express = require("express")
const app = express()
const elements = require("./data.json").elements
const _ = require('lodash')

Array.prototype.paginate = function (page = 1, limit = this.length) {

    page = Number(page)
    limit = Number(limit)
    page--
    if (this.slice(page * limit, page * limit + limit).length > 0 || this.length > 0) return this.slice(page * limit, page * limit + limit)
    else return {
        error: "not found."
    }
}

function queryParams(params, array = elements) {

    if (params['filter']) {
        _.forEach(params['filter'], function (key, value) {
            array = array.filter(element => element[value] == key)
        })
    }

    if (params['sort_by']) _.sortBy(array, [array.sort_by, 'number'])
    if (params['reverse'] == 'true') _.reverse(array)
    return array.paginate(params.page, params.limit)

}

app.get('/', async (req, res) => {
    res.json(queryParams(req.query))
})

app.get('/period/:period', (req, res) => {
    res.json(queryParams(req.query, elements.filter(element => element.period == req.params.period)))
})

app.get('/random', (req, res) => {
    res.json(elements[Math.floor(Math.random() * elements.length - 1)])
})

app.get('/phase/:phase', (req, res) => {
    res.json(queryParams(req.query, elements.filter(element => element.phase == req.params.phase)))
})

app.get('/name/:name', (req, res) => {
    res.json(elements.filter(element => element.name == req.params.name).paginate(1, 1))
})

app.get('/number/:number', (req, res) => {
    res.json(elements.filter(element => element.number == req.params.number).paginate(1, 1))
})

app.get('/symbol/:symbol', (req, res) => {
    res.json(elements.filter(element => element.symbol == req.params.symbol).paginate(1, 1))
})

app.get('/category/:name', (req, res) => {
    res.json(elements.filter(element => element.category == req.params.name).paginate(1, 1))
})

app.get('/spectral/:element', (req, res) => {

    if (req.params.element.length <= 2 && elements.find(element => element.symbol == req.params.element).spectral_img != null) {

        res.redirect(elements.find(element => element.symbol == req.params.element).spectral_img)

    } else if (req.params.element.length > 3 && elements.find(element => element.name == req.params.element).spectral_img != null) {

        res.redirect(elements.find(element => element.name == req.params.element).spectral_img)

    } else {
        res.json({
            error: 'not found'
        })
    }
})

app.listen(3000, async () => {
    console.log("App listening at localhost:3000")
})
