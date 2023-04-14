## COR Pet Dog API

This is an API that contains a list of dogs and the companies that sell them.

Here are the request methods:

`/pets` - GET
- Returns a list of the dogs

`/baskets/:id` - GET
- Returns a single basket by its id
- example response from `/baskets/2`:
```
    {
            "id": "2",
            "name": "Vegetable Basket",
            "contents": [
                "carrot",
                "broccoli",
                "spinach"
            ],
            "priceInDollars": 15.99
    }
```

`/baskets` - POST
- Accepts a `basket` object
- example object:

```
{
        "id": "2",
        "name": "Vegetable Basket",
        "contents": [
            "carrot",
            "broccoli",
            "spinach"
        ],
        "priceInDollars": 15.99
    }
```