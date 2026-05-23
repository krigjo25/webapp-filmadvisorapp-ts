export interface Session { id: number | null; }
export interface Rating { pr: number; film: string; }

export interface AppConfig {
    pages: string[];
    current: string;
    session: Session;
}

export interface User {
    id: number;
    bio?: string;
    user: string;
    email: string;
    image?: string;
    password?: string;
    ratings: Rating[];
    ratedmovies: number[];
}

export interface Movie {
    title: string;
    poster: string;
    actors: string[];
    ratings: number[];
    releasedate: number;
    avgRating: number | null;
}

export interface Inputs {
    register: {
        user: string;
        email: string;
        password?: string;
        id: number | null;
    };
    login: { username: string; passords: string; };
    findmovie: { id: number | null; name: string | null; };
    addmovie: { name: string; };
    editprofilepage: { bio: string; image: string; };
    findactor: { name: string; };
    movieview: { rating: number | null; };
    findMovie: {
        actor: string[];
        movietitle: string | null;
        releasedate: number | null;
    };
}

export interface UserData { users: User[]; movies: Movie[]; }

export interface MovieHeader { caption: string[]; slider: string[][]; }

export interface AppModel {
    app: AppConfig;
    inputs: Inputs;
    userdata: UserData;
    movieheader: MovieHeader;
}

export const model: AppModel = {
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
