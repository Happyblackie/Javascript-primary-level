//object literals
//objects in javascript are made using calibraces eg.
let user = {
    name: 'happy',
    age : 25,
    email: 'happy@thenetninja.com',
    location:'kenya',
    blogs: ['why mac $ cheese rules', '10 things to make with marmite'],

    //behold storing object in an array inside main object 
    movies:[
        {title:'blacklist',likes:'570 million'},
        {title:'old man',likes:'670 million'}
    ],

    login:function() {
        console.log('user logged in');
    },
    logout:function() {
        console.log('user logged out');
    },
    logBlogs:function() {
        //console.log(this.blogs);
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog=>{
            console.log(blog);
        })
    },

    // logMovies() {
    //     //console.log(this.blogs);
    //     console.log('this user has written the following blogs: ');
    //     this.movies.forEach(movie=>{
    //         console.log(movie.title, movie.likes);
    //     })
    // }
    logMovies:function() {
        //console.log(this.blogs);
        console.log('this user has written the following blogs: ');
        this.movies.forEach(movie=>{
            console.log(movie.title, movie.likes);
        })
    }
    
};

user.logBlogs();
user.logMovies();