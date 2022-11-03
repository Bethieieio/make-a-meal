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

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getMain = () => `${mainFood[getRandomNumber(mainFood.length)]}`;
const getSecond = () => `${secondaryFood[getRandomNumber(secondaryFood.length)]}`;
const getThird = () => `${tertiaryFood[getRandomNumber(tertiaryFood.length)]}`;
const getMeal = () => `${completeMeals[getRandomNumber(completeMeals.length)]}`;

console.log(getMain())
console.log(getSecond())
console.log(getThird())
console.log(getMeal())

const setMain = () => {
    document.getElementById('main-food').innerText = getMain();
}

const setSecond = () => {
    document.getElementById('second-food').innerText = getSecond();
}

const setThird = () => {
    document.getElementById('third-food').innerText = getThird();
}

const setMeal = () => {
    document.getElementById('comp-meal').innerText = getMeal();
}

document.getElementById('main')
    .addEventListener('click', setMain);

document.getElementById('second')
    .addEventListener('click', setSecond);

document.getElementById('third')
    .addEventListener('click', setThird);

document.getElementById('meal')
    .addEventListener('click', setMeal);