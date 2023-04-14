var express = require('express');
var router = express.Router();
const fs = require('fs');

const COMPANY_FILE = './data/company.json';

/* GET users listing. */
router.get('/', function (req, res, next) {
    fs.readFile(COMPANY_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;

        }
        res.json(JSON.parse(data));
        // const newPets = {
        //     id: (pets.length + 1).toString(),
        //     name: req.body.params,
        // }
    })
});

     //Post a new pet

router.post('/', (req, res) => {
    fs.readFile(COMPANY_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;

        }
        //converts company.json to a js array
        const company = JSON.parse(data);

         // template for incoming new pet object
        const newCom = {
            id: (company.length + 1),
            company: req.body.company,
            email: req.body.email
        }
         //pushes new pet object into pets array
        company.push(newCom)

         //writes our new array to the json file after stringifying it/converting back to json
        fs.writeFile(COMPANY_FILE, JSON.stringify(company), err => {
            if (err) {
                console.error(err);
                res.status(500).send('There was a problem writing the file')
                return;
                
            }
            res.json(newCom)  //respond with json version of newPet object

        })
    })


})


module.exports = router;