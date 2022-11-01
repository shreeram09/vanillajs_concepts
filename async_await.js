//asynchronous programming
//callbacks,promises, async & await

const wh = [
  {
    name: "ajay",
    job: "se",
  },
  {
    name: "sima",
    job: "qa",
  },
  {
    name: "raj",
    job: "op",
  },
  {
    name: "lily",
    job: "st",
  },
];
function getData() {
  let output = "";
  setTimeout(() => {
    console.log("retrieving..");
    wh.forEach((d, i) => {
      output += `<li>${d.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
//function with callback feature
/*function createData(newData,callBack){
    setTimeout(()=>{
        console.log('adding..')
        wh.push(newData);
        callBack();
    },2000);
}*/

//function with promise feature
function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("adding..");
      wh.push(newData);
      let error = false;
      if (!error) resolve();
      else reject("not happening...");
    }, 2000);
  });
}

/*createData({name:'jj',job:'se'})
.then(getData)
.catch(err=>console.log(err));

getData();
*/
//using async feature
//await is only valid with async function
//The await keyword can only be used inside an async function.
//The keyword await before a function makes the function wait for a promise
//The keyword async before a function makes the function return a promise
//async makes a function return a Promise
//await makes a function wait for a Promise
async function start() {
  await createData({ name: "jj", job: "se" })
    .then(getData)
    .catch((err) => console.log(err));
}

start();
