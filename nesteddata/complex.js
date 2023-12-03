const complexObject = {
    "user": {
      "id": 12345,
      "name": {
        "first": "John",
        "last": "Doe"
      },
      "email": "johndoe@example.com",
      "address": {
        "street": "123 Main Street",
        "city": "Anytown",
        "state": "CA",
        "zip": "90210"
      },
      "phone": {
        "home": "123-456-7890",
        "mobile": "987-654-3210"
      },
      "preferences": {
        "language": "en",
        "theme": "dark",
        "newsletter": true
      }
    },
    "orders": [
      {
        "id": 1,
        "date": "2023-10-04",
        "items": [
          {
            "id": 1,
            "name": "Product A",
            "price": 10.99,
            "quantity": 2
          },
          {
            "id": 2,
            "name": "Product B",
            "price": 15.99,
            "quantity": 1
          }
        ]
      },
      {
        "id": 2,
        "date": "2023-11-01",
        "items": [
          {
            "id": 3,
            "name": "Product C",
            "price": 20.99,
            "quantity": 1
          }
        ]
      }
    ],
    "wishlist": [
      {
        "id": 4,
        "name": "Product D",
        "price": 29.99
      },
      {
        "id": 5,
        "name": "Product E",
        "price": 39.99
      }
    ],
    "reviews": [
      {
        "id": 1,
        "product": "Product A",
        "rating": 5,
        "comment": "This product is amazing!"
      },
      {
        "id": 2,
        "product": "Product B",
        "rating": 4,
        "comment": "This product is good, but could be better."
      }
    ],
    "subscriptions": [
      {
        "id": 1,
        "plan": "Monthly",
        "price": 19.99,
        "active": true
      },
      {
        "id": 2,
        "plan": "Annual",
        "price": 199.99,
        "active": false
      }
    ],
    "settings": {
      "notifications": true,
      "privacy": {
        "public": true,
        "friends": false,
        "family": true
      }
    }
  };


console.log(complexObject.user.address.street)
console.log(complexObject.subscriptions[1].price)