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
import Jeep from "/src/assets/blogs/jeep.html?raw"
import Echo from "/src/assets/blogs/echo.html?raw"
import RainfallReclaimer from "/src/assets/blogs/rainfall-reclaimer.html?raw"
import RainRise from "/src/assets/blogs/rain-rise.html?raw"
import VerticalGarden from "/src/assets/blogs/vertical-garden.html?raw"
import Picnic from "/src/assets/blogs/picnic.html?raw"
import PicnicPart1 from "/src/assets/blogs/picnic-part1.html?raw"
import RainfallRescue from "/src/assets/blogs/rainfall-rescue.html?raw"
import FloodGuard from "/src/assets/blogs/floodguard.html?raw"
import MuggyRush from "/src/assets/blogs/muggy-rush.html?raw"
import RainCatcher from '@/components/RainCatcher.vue'
import JeepGame from '@/components/JeepGame.vue'
import BeachCatch from '@/components/BeachCatch.vue'


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
    id:3,
    title: "Car Parking Master",
    slug: "car-parking-master",
    description: "you control a car in a crowded parking lot. Your goal is to navigate through obstacles and park in the designated spot without collisions.",
    image: new URL('/images/car-parking.jpeg', import.meta.url).href,
    content: CarparkingGame
  },
  // {
  //   id: 3,
  //   title: 'Car Parking Master',
  //   slug: 'car-parking-master',
  //   description: 'you control a car in a crowded parking lot. Your goal is to navigate through obstacles and park in the designated spot without collisions.',
  //   image: new URL('/images/car-parking.jpeg', import.meta.url).href,
  //   date: 'Posted on June 17, 2025 – 8:00 AM',
  //   content: CarparkingGame
  // },
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
    description:`"Buffet Rush" is a fun, text-based or SFML-powered graphical C++ game where the player acts as a customer in a buffet. The goal is to build the perfect meal tray under time and nutritional constraints—while also managing cost, calories, and customer satisfaction.`,
    image: new URL('/images/buffet.jpeg', import.meta.url).href,
    content: BuffetRush,
    customReadMore: [
      {
        title: "🥗 Buffet Rush: A Tasty Game in C++ with GUI (SFML)",
        slug: "buffet-rush-with-gui",
        description: "Have you ever imagined what a buffet would look like if it turned into a fast-paced game? Welcome to Buffet Rush, a light-hearted yet educational C++ game powered by SFML, where you dodge unhealthy snacks and rack up your nutrition score!",
        image: new URL('/images/buffet-gui.jpeg', import.meta.url).href,
        content: BuffetRushGui
      }
    ]
  },

  {
    title: "🚙 Jeep Adventure Game in C++ (with GUI + Weather Effects)",
    slug: "jeep-adventure-game",
    description: "This is a graphical C++ game using SFML, where you control a Jeep driving on a rainy road. Your goal is to avoid falling obstacles, stay visible in the rain, and survive long enough to earn points.",
    image: new URL('/images/jeep.jpeg', import.meta.url).href,
    content: Jeep,
    component: JeepGame
  },

  {
    title: "Echoes of Gaia",
    slug: "echoes-of-gaia",
    description: "A next-gen C++ game demo using real-time ray tracing, AI NPCs, and physics simulation.",
    image: new URL('/images/echo.jpeg', import.meta.url).href,
    content: Echo
  },

  {
    title: "🌧️ Rainfall Reclaimer: EcoFrontline",
    slug: "rainfall-reclaimer",
    description: "Set in a near-future world suffering from extreme rainfall, acid rain, and rising floods, you play as an AI-assisted meteorological operative using drones, robots, and water recycling stations to monitor, mitigate, and survive climate chaos.",
    image: new URL('/images/rainfall-reclamation.jpeg', import.meta.url).href,
    content: RainfallReclaimer,
    component: RainCatcher
  },

  {
    title: "RainRise: Waterkeepers of Tomorrow",
    slug: "rain-rise",
    description: `"RainRise" is a futuristic open-world environmental simulation game where players act as Rainwater Engineers using advanced drones, AI sensors, water-routing bots, and bio-tech filtration systems to conserve rainwater, purify it, and sustain eco-settlements.`,
    image: new URL('/images/rain-rise.jpg', import.meta.url).href,
    content: RainRise,
    customReadMore: [
      {
        title: "🌱 Feature: Vertical Garden & Hydroponics System",
        slug: "vertical-garden-and-hydroponics-system",
        excerpt: "Let’s now build the Vertical Garden & Hydroponics System using Unreal Engine 5 logic and code structure (C++ + Blueprint style), tied to rainwater conservation gameplay.",
        content: VerticalGarden,
        image: new URL('/images/vertical-garden.jpg', import.meta.url).href
      }
    ]
  },

  {
    title:"Picnic Panic: Nature Adventure",
    slug: "picnic-panic",
    description: "A vibrant 2.5D or 3D picnic simulation-adventure game where players must set up and protect their picnic in a dynamic environment, facing challenges like weather changes, animals, time constraints, and item collection.",
    image: new URL('/images/picnic-panic.jpeg', import.meta.url).href,
    content: Picnic,
    component: BeachCatch,
    customReadMore: [
      {
        title: `🎮 Picnic Panic: Nature Adventure
        A Modern Seasonal Picnic Game in Unreal Engine 5 using C++ Part 1`,
        slug: "picnic-panic-part1",
        excerpt: `Imagine setting up your picnic on a sunny spring day… until squirrels steal your food, bees buzz around, or snow suddenly starts falling in winter mode.
        This guide includes full C++ classes, explanations, and modular game logic that you can expand on.`,
        image: new URL('/images/picnic-panic-1.jpeg', import.meta.url).href,
        content: PicnicPart1
      }
    ]
  },

  {
    title: "Rainfall Rescue – Building a Fun SFML C++ Game",
    slug: "rainfall-rescue",
    description: `Have you ever wished you could control the rain? In this exciting C++ project, we’re doing just that – building Rainfall Rescue, a 2D arcade-style game where players catch pure rain and avoid acid drops.`,
    image: new URL('/images/rainfall-rescue.jpeg', import.meta.url).href,
    content: RainfallRescue
  },
  {
    title: "FloodGuard (UE5 C++): Rescue Boat vs. Rising Waters",
    slug: "floodguard",
    description: `Dynamic flood level that rises over time (configurable curve/speed).

A physics-driven rescue boat with simplified, performant buoyancy over a flat water plane.

Pickups (survivors) scattered on rooftops; collect them for score.

Basic HUD via on-screen debug messages (easy to swap for UMG later).

Clean, modular C++ classes: RescueBoatPawn, FloodManager, SurvivorPickup.`,
    image: new URL('/images/flood.jpeg', import.meta.url).href,
    content: FloodGuard
  },

  {
    title: "“Muggy Rush”",
    slug: "muggy-rush",
    description: "you’re a field technician sprinting through a monsoon-season city. the catch: heat + humidity make you tire quickly. you must manage stamina and body temperature by ducking into cool zones (AC vents, mist stations, shaded alleys) while collecting parts to restart dehumidifier towers before the city fogs out.",
    image: new URL('/images/muggyrush.jpeg', import.meta.url).href,
    content:MuggyRush
  }
]

export default projects