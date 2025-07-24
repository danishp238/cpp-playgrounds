import GroceryGame from '/src/assets/blogs/grocery-game.html?raw'
import GroceryGameAddition from '/src/assets/blogs/grocery-game-addition.html?raw'
import GroceryGameGui from '/src/assets/blogs/grocery-game-gui.html?raw'
import HighwayDriver from "/src/assets/blogs/highway-driver.html?raw"
import HighwayDriverAddition from "/src/assets/blogs/highway-driver-addition.html?raw"
import HighwayDriverGui from "/src/assets/blogs/highway-driver-gui.html?raw"
import CarparkingGame from "/src/assets/blogs/car-parking-game.html?raw"
import FarmFrenzy from "/src/assets/blogs/farm-frenzy.html?raw"
import FarmFrenzyGui from "/src/assets/blogs/farm-frenzy-gui.html?raw"
import BuffetRush from "/src/assets/blogs/buffet-rush.html?raw"
import BuffetRushGui from "/src/assets/blogs/buffet-rush-gui.html?raw"


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
    content: HighwayDriver,
    customReadMore: [
      {
        title: "Speed, Skill & Code: The Making of a Highway Driver Game",
        excerpt: `Ever wondered how the simple thrill of dodging traffic in a game mirrors real-life driving? In this deep dive, we explore Highway Driver—a deceptively simple game that captures the chaos, strategy, and reflexes of the open road. From real-world driving psychology to game design secrets, we’ll break down:
        ✅ How highway survival games train your brain (faster reactions, better focus)
        ✅ Clever game mechanics inspired by actual driving challenges (lane-switching, speed fatigue, tunnel vision)
      ✅ Behind-the-scenes coding & design choices (why obstacles spawn just right)
      ✅ Fun upgrades to turn a basic prototype into a full-fledged game (weather, AI traffic, boss chases!)

      Whether you're a gamer, developer, or just love the open road, this post shifts gears between entertainment, education, and pure coding adrenaline. Ready to hit the highway? Let’s go! 🚗💨`,
        slug: 'highway-driver-making',
        content: HighwayDriverAddition,
        image: new URL('/images/highway-driver-addition.jpeg', import.meta.url).href
      },

      {
        title: "Adding graphics to your game",
        excerpt: "Your Highway Driver game already has a basic graphical UI using SFML rectangles and text, but now let’s talk about enhancing the GUI (Graphical User Interface) with visual polish, usability, and menus — just like a complete arcade-style game.",
        slug: "highway-driver-gui",
        image: new URL('/images/highway-driver-gui.jpeg', import.meta.url).href,
        content: HighwayDriverGui
      }
    ]
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
  {
    id: 4,
    title: 'Farm Frenzy: Harvest Grow',
    slug: 'farm-frenzy',
    description: `👨‍🌾 You're a farmer who must:
    🌱 Plant crops
  🐄 Feed animals
  🧺 Harvest and sell products
  🌾 Expand your farm
  💡 All while managing time, money, and resources wisely.`,
    image: new URL('/images/farm-frenzy.jpeg', import.meta.url).href,
    date: 'Posted on June 17, 2025 – 8:00 AM',
    content: FarmFrenzy,
    customReadMore: [
      {
        title:"Building Farm Frenzy: A GUI-Based Farm Game in C++ with SFML",
        slug:"farm-frenzy-with-gui",
        excerpt: `What if you could bring the joy of farming to your screen using just C++ and a bit of graphics? Welcome to
        Farm Frenzy, a simple but engaging GUI-based farm simulation game developed in C++ using
            the SFML (Simple and Fast Multimedia Library)`,
        image: new URL('/images/farm-frenzy-gui.jpeg', import.meta.url).href,
        content: FarmFrenzyGui
      }
    ]
  },

  {
    title: "🥗🎮 Buffet Rush – A C++ Game Based on a Buffet Experience",
    slug: "buffet-rush",
    excerpt:`"Buffet Rush" is a fun, text-based or SFML-powered graphical C++ game where the player acts as a customer in a buffet. The goal is to build the perfect meal tray under time and nutritional constraints—while also managing cost, calories, and customer satisfaction.`,
    image: new URL('/images/buffet.jpeg', import.meta.url).href,
    content: BuffetRush,
    customReadMore: [
      {
        title: "🥗 Buffet Rush: A Tasty Game in C++ with GUI (SFML)",
        slug: "buffet-rush-with-gui",
        excerpt: "Have you ever imagined what a buffet would look like if it turned into a fast-paced game? Welcome to Buffet Rush, a light-hearted yet educational C++ game powered by SFML, where you dodge unhealthy snacks and rack up your nutrition score!",
        image: new URL('/images/buffet-gui.jpeg', import.meta.url).href,
        content: BuffetRushGui
      }
    ]
  }
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