import GroceryGame from '/src/assets/blogs/grocery-game.html?raw'
import GroceryGameAddition from '/src/assets/blogs/grocery-game-addition.html?raw'
import GroceryGameGui from '/src/assets/blogs/grocery-game-gui.html?raw'
import HighwayDriver from "/src/assets/blogs/highway-driver.html?raw"
import CarparkingGame from "/src/assets/blogs/car-parking-game.html?raw"


const projects = [
  {
    id: 1,
    title: 'Recipe Rush: Online Grocery Ordering Game',
    slug: 'recipe-rush',
    description: `
                It's a fun text-based simulation game teaching decision-making, budgeting, and basic input/output in C++ — great for beginners.`,
    image: new URL('/images/grocery-game-img.jpeg', import.meta.url).href,
    date: 'Posted on June 15, 2025 – 10:00 AM',
    content: GroceryGame,
    customReadMore: [
      {
        title: "Fun Meets Function: Grocery Games, Tips, and Surprising Facts",
        excerpt: "Scenario 1: Last-Minute Dinner Party You're hosting guests tonight and plan to cook Spaghetti Marinara. You have 20 minutes to order groceries before the cutoff for...",
        image: new URL('/images/grocery-game-fun.jpeg', import.meta.url).href,
        slug: "fun-meets-function",
        content: GroceryGameAddition
      },
      {
        title: "Let's add a Graphical User Interface (GUI) to your Recipe Rush: Online Grocery Ordering Game",
        excerpt: "With SFML, your game will look like: A window showing recipe selection. Grocery items displayed with names & prices as buttons. A side panel with your current cart and budget. Clickable buttons to add",
        image: new URL('/images/grocery-game-gui.jpeg', import.meta.url).href,
        slug: "adding-gui-to-recipe-rush",
        content: GroceryGameGui
      },
    ]
  },
  {
    id: 2,
    title: 'Highway Driver: A Complete SFML Racing Game',
    slug: "highway-driver",
    description: 'Highway Driver, you control a car speeding down a highway while avoiding incoming traffic. The longer you survive, the higher your score.',
    image: new URL('/images/highway-driver.jpeg', import.meta.url).href,
    date: 'Posted on June 16, 2025 – 3:30 PM',
    content: HighwayDriver
  },
  {
    id: 3,
    title: 'Car Parking Master',
    slug: 'car-parking-master',
    description: 'you control a car in a crowded parking lot. Your goal is to navigate through obstacles and park in the designated spot without collisions.',
    image: new URL('/images/car-parking.jpeg', import.meta.url).href,
    date: 'Posted on June 17, 2025 – 8:00 AM',
    content: CarparkingGame
  },
  // {
  //   id: 4,
  //   title: 'Basic FPS Engine',
  //   description: 'FPS engine with OpenGL and C++ fundamentals.',
  //   image: new URL('/images/fps-engine-game.jpeg', import.meta.url).href,
  //   date: 'Posted on June 18, 2025 – 5:00 PM',
  // },
  // {
  //   id: 5,
  //   title: 'C++ Puzzle Game',
  //   description: 'Addictive puzzle game with scoring and levels.',
  //   image: new URL('/images/puzzle-game.jpg', import.meta.url).href,
  //   date: 'Posted on June 19, 2025 – 2:45 PM',
  // },
]

export default projects