const cart=["shoes","pants","Kurta"];

const promise=createOrder(cart);

promise.then(function(orderId){
  console.log(orderId);
    //processToPayment(orderId);
})

///
function createOrder(cart) {
    const pr= new Promise(function(resolve,reject){
      // createorder
      // validate cart
      // orderId

      if(validateCart(cart)){
        const err=new Error("cart is not valid");
        reject(err);
      }
       
      // logic for creatOrder
      const orderId="12345";
      if(orderId){
        resolve(orderId);
      }

    
    });

    return pr;
}

function validateCart(cart){
  return true;
}