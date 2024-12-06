async function getData(){
    let blogPost =new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Blog post");
        },2000);      
    });

    let blogComment = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("Comment for Blog");
        },5000);
    });


    console.log("Fetching Post.....");
    let post= await blogPost;                 // await tells the next process to wait until this process is done
    console.log("Post:",post)

    console.log("Fetching comment...");

    let comment=await blogComment;
    console.log("comment",comment);

    return[post,comment];                // these two variables are passed as the array 
}

console.log("welcome to Blog post");
let data=getData();                            // getData finction is called all console statements are executed the returened values are stored inside the data variable
console.log(data);

data.then((value)=>{                  // after that(then) takes the value of data and print it using console
    console.log(value) 
})
.catch((err)=>{
    console.log(err); 
})