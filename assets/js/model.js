export const model = {
    // Application path
    app: {
        pages: [],
        current: "register",
        session: { id: 10012 }
    },
    // Inputs
    inputs: {
        // login / Register
        register: {
            id: null,
            user: "",
            email: "",
            password: "",
        },
        findmovie: { id: null, name: null },
        login: { username: "", passords: "", },
        addmovie: { name: "" },
        findactor: { name: "" },
        movieview: { rating: null },
        editprofilepage: { bio: "", image: "" },
        // Filtrating Information
        findMovie: {
            actor: [],
            movietitle: null,
            releasedate: null,
        },
    },
    // user data
    userdata: {
        users: [
            {
                id: 10012,
                user: "Kompis",
                bio: "Liker katter",
                image: "img/kompis.jpg",
                password: "sikkertpassord",
                email: "kompis@kompisen.com",
                ratedmovies: [1002, 1010, 1012],
                ratings: [{ film: "", pr: 736 }]
            },
        ],
        movies: [
            {
                avgRating: null,
                releasedate: 1980,
                title: "Godfather",
                ratings: [750, 555, 999],
                poster: "img/godfather.jpg",
                actors: ["Don Corleone", "Michael Corleone", "Sonny Corleone"]
            },
            {
                avgRating: null,
                releasedate: 1999,
                title: "Star Wars",
                ratings: [432, 936, 528],
                poster: "img/starwars.jpg",
                actors: ["DarthCVader", "Luke Skywalker", "Princess Leia"]
            }
        ]
    },
    // frontpage 
    movieheader: {
        caption: ['Klar for en vittig reise?', 'Broen til et nytt lys', 'Kjærlighet på nettet'],
        slider: [['img1', 'img2', 'img3'], ['img1', 'img2', 'img3'], ['img1', 'img2', 'img3']]
    }
};
//# sourceMappingURL=model.js.map