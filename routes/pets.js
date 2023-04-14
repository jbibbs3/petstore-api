var express = require('express');
var router = express.Router();
const fs = require('fs');

const PETS_FILE = './data/pets.json';

/* GET users listing. */
router.get('/', function (req, res, next) {
    fs.readFile(PETS_FILE, 'utf8', (err, data) => {
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
    fs.readFile(PETS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;

        }
        //converts pets.json to a js array
        const pets = JSON.parse(data);

         // template for incoming new pet object
        const newPet = {
            id: (pets.length + 1),
            breed: req.body.breed,
            birthdate: req.body.birthdate
        }
         //pushes new pet object into pets array
        pets.push(newPet)

         //writes our new array to the json file after stringifying it/converting back to json
        fs.writeFile(PETS_FILE, JSON.stringify(pets), err => {
            if (err) {
                console.error(err);
                res.status(500).send('There was a problem writing the file')
                return;
                
            }
            res.json(newPet)  //respond with json version of newPet object

        })
    })


})


module.exports = router;