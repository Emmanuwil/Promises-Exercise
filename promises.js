console.log("Hello World!\n=============\n")
  



 let watching = new Promise((resolve, reject) =>{
      let userWatchingLiveStream = false;

      if (userWatchingLiveStream) {
        resolve("Subscribe.");
      } else {
        reject("User Left") 
      }
  });


  watching
  .then((result) => console.log(result))
  .catch((error) => console.log(error));