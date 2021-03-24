//array portion
var wrap = document.body.querySelector(".wrap")

var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for(var i = 0; i < list.length; i++)
  {
    var ele = document.createElement("div")
    var eleName = document.createElement("h1")
    var eleAge = document.createElement("h3")
     
    eleName.innerHTML = list[i].name
    eleAge.innerHTML = "Age: " +list[i].age
       
    ele.appendChild(eleName)
    ele.appendChild(eleAge)
    wrap.appendChild(ele)
    
    if(list[i].age > 25)
      {
        ele.style.color = "green"
      }
  }

//counter portion
//I added a decrease and reset button for fun and for a bit more practice

var value = document.body.querySelector(".number")
startingNumber = 5
value.innerHTML = "Counter: " +startingNumber

function increaseValue(num)
  {
   startingNumber = startingNumber + num
   
   value.innerHTML = "Counter: " +startingNumber
  }

function decreaseValue(dnum)
  {
    startingNumber = startingNumber - dnum
    
    value.innerHTML = "Counter: " +startingNumber
  }

function reset()
  {
    startingNumber = 5
    value.innerHTML = "Counter: " +startingNumber 
  }

document.body.querySelector(".increase").addEventListener("click", function()
{
  increaseValue(1)
})

document.body.querySelector(".decrease").addEventListener("click", function()
{
  decreaseValue(1) 
})

document.body.querySelector(".reset").addEventListener("click", function()
{
  reset()
})

//made by coleman maxwell