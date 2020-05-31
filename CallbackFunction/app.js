const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// function createPosts(post){
//     setTimeout(function(){
//         posts.push(post);
//     },2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// createPosts({title: 'Post Three', body: 'This is post three'});

// getPosts();

function createPosts(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

createPosts({title: 'Post Three', body: 'This is post three'},getPosts);