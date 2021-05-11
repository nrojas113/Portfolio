export const projects = [
  {
    id: 1,
    title: "RoastFLIX",
    description:
      "Web app that analyzes user's Netflix watch history and generates insights of the user's watching habits",
    longDescription:
      "In this app, the user can interact with the app through chatbot and data visualization. We used React to build the user interface, Bootstrap for responsive design and Chart.js for data visualization. In the back end, we utilized Flask as framework for building APIs, while using Python and Pandas for converting IMDB and user datasets into data frames which we used to generate insights of user's watching history.",
    teckStack:
      "React, Chart.js, Bootstrap, Flask, Firebase Storage, Real-time database, Pandas, IMDB API, Google Cloud Platform",
    isDeployed: true,
    deployLink: "https://roastflix-309106.uk.r.appspot.com/",
    isVideo: true,
    videoLink: "https://youtu.be/W0Vp_r0ZWdM",
    github: "https://github.com/capstone-team-terra/roast-me",
    imageName: "roastflix",
  },
  {
    id: 2,
    title: "My FitBot",
    description:
      "Mobile app with personal avatar that motivates user to increase daily steps",
    longDescription:
      "Built in just four days during solo hackathon, this mobile app is a prototype for fitness app that was inspired by the pandemic to incentivize regular exercise. Integrated Fitbit API to React Native app, allowing the avatar to dynamically change moods based on step count. Configured Firebase/Cloud Firestore to store and manage user preferences on avatar’s setting and step goals",
    teckStack:
      "React Native on Expo, Firebase/Cloud Firestore, Fitbit Web API, React Native Chart Kit",
    isDeployed: false,
    isVideo: true,
    videoLink: "https://youtu.be/TumGhDlzG4w",
    github: "https://github.com/nrojas113/MyFitBot",
    imageName: "MyFitBot",
  },
  {
    id: 3,
    title: "Kiki's Recipe",
    description: "Web app that suggest's recipe ideas based on ingredients",
    longDescription:
      "This app won the 'most creative' in Hackathon hosted by Mintbean and StepZen. At Kiki's Recipe, user can add up to 10 ingredients, and the app will display results with recipe ideas based on submitted ingredients. The challenge for the Hackathon was to build GraphQL API, and we connected a REST service from Spoonacular API to receive recipe, instructions, ingrients data back to frontend.",
    teckStack:
      "React, Bootstrap, Spoonacular API, Apollo Client, GraphQL, StepZen, Heroku",
    isDeployed: true,
    deployLink: "https://kikis-recipe.herokuapp.com/",
    isVideo: false,
    github: "https://github.com/graceHackers/recipe_graphQL",
    imageName: "Kiki",
  },
  {
    id: 4,
    title: "Rogue Pets",
    description: "A mock e-commerce site for pet toys",
    longDescription:
      "As part of the Grace Hopper Program, this app was created by myself and three other developers. Users can view product catalog for pet toys, add favorite products to the shopping cart and checkout. For my contribution, I developed the shopping cart functionality with a RESTful back-end routes that handles persistent cart sessions for guest & logged in users, and implemented inventory status feature based on real-time stock quantity to create better user experience.",
    teckStack:
      "React, Redux, Materialize, Node.js, Express, Sequelize, PostgreSQL, Google OAuth, Heroku",
    isDeployed: true,
    deployLink: "https://rogue-shopper.herokuapp.com/products",
    isVideo: false,
    github: "https://github.com/RogueShoppers/RogueShopper",
    imageName: "rogue",
  },
];
