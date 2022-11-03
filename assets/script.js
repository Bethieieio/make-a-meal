const mainFood = ['Burger', 'Hotdog', 'Chicken', 'Nuggets', 'Kiev',
'Pork', 'Steak', 'Goujons', 'Meatballs', 'Gammon Steak', 'Kebab',
'Sothern Fried Chicken', 'Cheese  & Bacon Chicken'];

const secondaryFood = ['Rice', 'Space Mash', 'Roast Potatoes', 'Chips',
'Waffles', 'Couquets', 'Oven Crunchies', 'Baby Waffles', 'Loaded Potato Skins',
'Hash Browns', 'Pasta', 'Potato Wedges', 'Jacket Potato', 'Garlic Bread']

const tertiaryFood = ['Garlic Mushrooms', 'Baked Beans', 'Mushrooms', 
'Spaghetti Hoops', 'Ravioli', 'Fried Peppers', 'Mixed Veg', 'Mozzerella Dippers', 
'Onion Rings']

const completeMeals = ['Pasta Bolognase', 'Sweet n Sour Chicken', 'Sweet n Sour Pork',
"Shepherd's Pie", 'Cottage Pie', 'Fajitas', 'Lasagne', 'Enchiladas', 'Diet Coke Chicken',
'Feng Shui Pork', 'Pizza', 'Chicken Tikka Masala', 'Butter Chicken', 'Pringle Chicken',
'Pasta Carbonara', 'Stew n Dumplings', 'Tinned Spag Bowl on Toast', 'English Breakfast']

const getRandomNumber

const getMain = () => `${mainFood[Math.floor(Math.random() * mainFood.length)]}`;
const getSecond = () => `${secondaryFood[Math.floor(Math.random() * secondaryFood.length)]}`;
const getThird = () => `${tertiaryFood[Math.floor(Math.random() * tertiaryFood.length)]}`;
const getMeal = () => `${completeMeals[Math.floor(Math.random() * completeMeals.length)]}`;

console.log(getMain())
console.log(getSecond())
console.log(getThird())
console.log(getMeal())