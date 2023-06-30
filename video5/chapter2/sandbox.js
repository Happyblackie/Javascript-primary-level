//object literals
//objects in javascript are made using calibraces eg.
let user = {
    name: 'happy',
    age : 25,
    email: 'happy@thenetninja.com',
    location:'kenya',
    blogs: ['why mac $ cheese rules', '10 things to make with marmite'],
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
    }
};

user.login();
user.logout();

//window object/global object
console.log(this);

user.logBlogs();







