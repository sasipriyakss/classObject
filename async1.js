// const getPost=()=>{
//     return new Promise ((resolve,reject) =>{
//       setTimeout(()=>{
//         const posts=["post-1","post-2","post-3"];
//         resolve(posts);
//       },1000);
//     });
// };

// const getComments =() =>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             const comments=["comment-1","comment-2","comment-3"];
//             resolve(comments);

//         },2000);
//     });
// };


// //use promise

// Promise.all([getPost(),getComments()])

// .then((result)=>{   
//    const [posts,comments]=result;

//    console.log(`posts: ${posts}`);
//    console.log(`comments: ${comments}`);
   


// }).catch((err)=> {
//     console.error(err);
// })

fetch('https://jsonplaceholder.typicode.com/users1')
.then((response)=> response.json())
.then((data) => {
    console.log(data);
}) .catch((err) => {
    console.error(err);
});
