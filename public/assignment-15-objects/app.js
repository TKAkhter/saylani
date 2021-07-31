var itemsArray = [{
        name: "juice",
        price: 50,
        quantity: "3"
    },
    {
        name: "cookie",
        price: 30,
        quantity: "9"
    },
    {
        name: "shirt",
        price: 880,
        quantity: "1"
    },
    {
        name: "pen",
        price: 100,
        quantity: "2"
    }
];

var totalPrice = 0;

for (const item in itemsArray) {
    totalPrice = totalPrice + itemsArray[item].price;
}
console.log(totalPrice);

var itemsArray = {
    name: 'name',
    email: 'email',
    password: 'password',
    age: 'age',
    gender: 'gender',
    city: 'city',
    country: 'country'
};

console.log(itemsArray.hasOwnProperty('age'));
console.log(itemsArray.hasOwnProperty('country'));
console.log(itemsArray.hasOwnProperty('firstName'));
console.log(itemsArray.hasOwnProperty('lastName'));

function Plan(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
}

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);

function Population(name, gender, address, education, profession) {
    this.name = name;
    this.price = gender;
    this.space = address;
    this.transfer = education;
    this.pages = profession;
}

// const check = (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log(e.target);
//     const form = new FormData(e.target);
//     // const form = new FormData(e.srcElement);
//     // const formula = form.get("formula");
//     console.log(form);
//     return false
// };

function serializeIt(form) {
    return (
      Array.apply(0, form.elements).map(x => 
        (
          (obj => 
            (
              x.type == "radio" ||
              x.type == "checkbox"
            ) ?
              x.checked ? 
                obj
              : 
                null
            :
              obj
          )(
            {
              [x.name]:x.value
            }
          )
        )
      ).filter(x => x)
    );
  }
  
  function check(e) {
    e.preventDefault();
    console.log(document.forms[0].elements);
    console.log(
      JSON.stringify(
        serializeIt(document.forms[0]),
        4, 4, 4
      )
    )
  }