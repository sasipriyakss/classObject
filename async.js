async function welcome()   // promise created  // 
{
    return "hello world";
}

console.log(welcome());

welcome().then((msg)=>{
    console.lof(msg);
})
.catch((err)=>
{
    console.error(err);
});