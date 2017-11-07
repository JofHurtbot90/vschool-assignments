var shopper = {
  firstName: 'John',
  lastName: 'Wick',
  age: 36,
  personIsShopping: true,
  fullName: function() {
    return this.firstName + " " + this.lastName

  },
  groceryCart: ['milk', 'eggs', 'bread', 'vegetables']
}
console.log(shopper.fullName());
