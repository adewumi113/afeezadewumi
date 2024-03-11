// Add event listener to button
document.querySelector('button').addEventListener('click', function() {
    // Check if date has been selected
    const dateSelected = document.querySelector('input').value;
    if (dateSelected) {
      getSpecial();
    } else {
      alert('Please select a date!');
    }
  });
  
  function getSpecial() {
    let menu = {
        meals: [
            { name: 'Rice', price: 4 },
            { name: 'Chicken', price: 8 },
            { name: 'Salmon', price: 12 },
            { name: 'Pasta', price: 10 },
            { name: 'Steak', price: 15 },
            { name: 'Burger', price: 7 },
            { name: 'Pizza', price: 9 },
            { name: 'Tacos', price: 11 },
            { name: 'Sushi', price: 16 },
            { name: 'Fish and Chips', price: 13 },
            { name: 'Pad Thai', price: 12 },
            { name: 'Spaghetti', price: 10 },
            { name: 'Lasagna', price: 14 },
            { name: 'Burrito', price: 9 },
            { name: 'Hot Dog', price: 5 },
            { name: 'Nachos', price: 8 },
            { name: 'Stir Fry', price: 11 },
            { name: 'Fajitas', price: 12 },
            { name: 'Quesadilla', price: 7 },
            { name: 'Curry', price: 13 },
            { name: 'Kebab', price: 10 },
            { name: 'Enchiladas', price: 8 },
            { name: 'Shepherd’s Pie', price: 14 },
            { name: 'Beef Stew', price: 15 },
            { name: 'Chili', price: 12 },
            { name: 'Meatloaf', price: 11 },
            { name: 'Roast Chicken', price: 16 },
            { name: 'Pulled Pork', price: 13 },
            { name: 'Biryani', price: 11 },
            { name: 'Fish Curry', price: 12 },
            { name: 'Pork Chops', price: 14 },
            { name: 'Beef Ribs', price: 17 },
            { name: 'Fish Tacos', price: 10 },
            { name: 'Ceviche', price: 9 },
            { name: 'Shrimp Scampi', price: 15 },
            { name: 'Clam Chowder', price: 11 },
            { name: 'Seafood Paella', price: 20 },
            { name: 'Soba Noodles', price: 12 },
            { name: 'Tuna Salad', price: 8 },
            { name: 'Caesar Salad', price: 7 },
            { name: 'Greek Salad', price: 9 },
            { name: 'Caprese Salad', price: 10 },
            { name: 'Wedge Salad', price: 8 },
            { name: 'Spinach Salad', price: 6 },
            { name: 'Cobb Salad', price: 11 },
            { name: 'Egg Salad Sandwich', price: 5 },
            { name: 'BLT Sandwich', price: 7 },
            { name: 'Grilled Cheese Sandwich', price: 6 },
            { name: 'Tuna Melt Sandwich', price: 8 },
            { name: 'Club Sandwich', price: 9 },
            { name: 'Ham and Cheese Sandwich', price: 5 },
            { name: 'Philly Cheesesteak', price: 10 }
          
            ],
      _meal: '',
      _price: 0,
      set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
          return (this._meal = mealToCheck);
        }
      },
      set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
          return (this._price = priceToCheck);
        }
      },
      setTodaysSpecial() {
        const randomIndex = Math.floor(Math.random() * this.meals.length);
        const special = this.meals[randomIndex];
        this._meal = special.name;
        this._price = special.price;
      },
      get todaysSpecial() {
        if (this._meal && this._price) {
          return `Today’s Special is ${this._meal} for $${this._price}.`;
        } else {
          return 'Meal or price was not set correctly!';
        }
      },
    };
    
    menu.setTodaysSpecial();
    document.querySelector('h2').innerText = menu.todaysSpecial;
  }
  



