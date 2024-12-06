

let result = function (marks){
    return new Promise(function(resolve,reject){
        console.log("Calculating Result...");

        setTimeout(() =>{
            let total=0;
            let result="pass";
            marks.forEach((mark)=> {
                total+=mark;
                if(mark<35){
                    result='Fail';
                }
            });
          resolve({total:total, result:result});
        },2000)

    });
};
/* 
90-100 A
80-89 B
70-79 c
<70 D

*/
let grade=function(response){
    return new Promise((resolve,reject)=>{
        if(response.result=="pass"){
            let avg=response.total/3;
            let gradeText="Grade D";
            if(avg>=90 && avg <=100) {
                gradeText="Grade A";
            } else if (avg>=80 && avg <=89) {
                gradeText ="Grade B";
            } else if (avg >= 70 && avg <= 79) {
                gradeText = "Grade C";
            }
            resolve(gradeText);

        } else{
            reject("No Grade")
        }
    });
};
/*
result([89,98,100]).then((value) => {
    console.log("Total:", value.total);
    console.log("result:", value.result);
    return grade(value);
})

.then ((data) => {
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
*/

async function getResults(){
    try{
        const value=await result([98,99,100]);
        console.log("Total :" , value.total);
        console.log("Result: ", value.result);

        const gradeText=await grade(value);

        console.log(gradeText);

    } catch(err) {
        console.error(err);
    }
}

getResults();