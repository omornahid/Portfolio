import { defineStore } from "pinia";

export const cardStore = defineStore({
  id: "portfolio",
  state: () => ({
    cards: {
      quizapp: {
        name: "Quiz App",
        preview: "/assets/screenshots/quizapp.png",
        description:
          "It's a quiz app where people can play quizes and can see their score.",
        prefix: "",
        appLink: "https://quiz-app-omornahid.vercel.app/",
        repo: "https://github.com/omornahid/Quiz-App",
      },
      noteapp: {
        name: "Note App",
        preview: "/assets/screenshots/noteapp.png",
        description:
          "One can add notes by clicking add button and each time a random color will generate as a background of that note card. The min char to add a note must be 10 char.",
        prefix: "",
        appLink: "https://note-app-omornahid.vercel.app/",
        repo: "https://github.com/omornahid/noteApp",
      },
      tictactoe: {
        name: "TicTacToe",
        preview: "assets/screenshots/tictactoe.png",
        description:
          "This is a tic-tac-toe game which I build using vue js and tailwind CSS ",
        appLink: "https://omornahid-tic-tac-toe.netlify.app/",
        prefix: "",
        repo: "https://github.com/omornahid/TicTacToe",
      },

      weather: {
        name: "Weather App",
        preview: "/assets/screenshots/weather.png",
        description:
          "It's a weather app.If someone search by a valid city name it will show the current temperature of that city by fetching API from OpenWeather.",
        prefix: "",
        appLink: "https://omornahid-weather-app.netlify.app/",
        repo: "https://github.com/omornahid/Weather-App",
      },

      otout: {
        name: "OTour",
        preview: "/assets/screenshots/otour.png",
        description:
          "It's a tour site which I have made for the practice purpose of Bootstrap 5",
        prefix: "https://",
        appLink: "https://omornahi-learning-bootstrap.netlify.app/#destination",
        repo: "https://github.com/omornahid/Bootstrap-Prac",
      },
    },
  }),
});
