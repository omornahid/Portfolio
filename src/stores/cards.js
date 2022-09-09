import { defineStore } from "pinia";

export const cardStore = defineStore({
  id: "portfolio",
  state: () => ({
    cards: {
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

      movihuv: {
        name: "MoviHub",
        preview: "/assets/screenshots/moviehub.png",
        description:
          "It's a movie app where people can see the trending movie list and can search for a movie. Here I used React Hooks, Bootstrap and fetched API from TMDB",
        appLink: "https://omornahid-movihub.netlify.app/",
        prefix: "https://",
        repo: "https://github.com/omornahid/MoviHub",
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

      todo: {
        name: "To-Do List",
        preview: "/assets/screenshots/todo.png",
        description: "Build a simple to-do list using JavaScript ",
        prefix: "https://",
        appLink: "https://omornahid-to-do-list.netlify.app/",
        repo: "https://github.com/omornahid/To-Do-List-using-javascript",
      },
    },
  }),
});
