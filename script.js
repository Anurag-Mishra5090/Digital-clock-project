function clockstart(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seco = date.getSeconds();
     AT = ""
    if(hours>12){
         hours = hours-12
         AT = 'PM'
    }
    else{
        AT = 'AM'
    }
    console.log(hours,minutes,seco);

    var hrs = document.getElementById("hrs");
    hrs.textContent = hours;
    var mins = document.getElementById("mins");
    mins.innerText = minutes;
    var secs = document.getElementById("secs");
    secs.innerText = seco;
  document.getElementById("ATT").textContent = AT


document.querySelector('.alarm').addEventListener("mouseover",()=>{
  document.querySelector(".alarm").innerText="Party-Time"
  document.querySelector(".alarm").style.background =  'linear-gradient(to right,red,green,blue )'
})

document.querySelector('.alarm').addEventListener("mouseleave",()=>{
  document.querySelector(".alarm").innerText="Set-Alarm"
  document.querySelector(".alarm").style.background = 'linear-gradient(to right, #6E54EC,#CB52F8,#FC5EFF,#F1A7C5)'
})

var wake = document.querySelector("#wake").value
var lunch = document.querySelector("#lunch").value
var nap = document.querySelector("#naptime").value
var night = document.querySelector("#nighttime").value


var splitwake = wake.split(' ')
var splitlunch = lunch.split(' ')
var splitnap = nap.split(' ')
var splitnight = night.split(' ')

var abc= document.querySelector(".alarm")
abc.addEventListener("click",()=>{


  document.getElementById('p1').textContent=`wakeup time : ${wake}`
  document.querySelector('#p2').innerText=`Lunch time:${lunch}`
  document.querySelector('#p3').innerText=`Nap time:${nap}`
  document.querySelector('#p4').innerText=`Night time:${night}`
 
  console.log(hours+AT);
 

  if(splitwake[0]===(hours + AT) ){
document.querySelector('.massage').innerText='Good Morning!!'
document.querySelector('.massage2').innerText= 'Grab Some Healthy Breakfast!!'
document.querySelector('.photo').innerHTML= '<img src="./assest/Component 30 – 1.png" alt=""></img>'
  }
  else if(splitlunch[0]===(hours + AT) ){
    document.querySelector('.massage').innerText='Good Afternoon!!'
    document.querySelector('.massage2').innerText= 'Lets have some lunch!!'
    document.querySelector('.photo').innerHTML= '<img src="./assest/lunch.1.jpg" alt=""></img>'

   }
   else if(splitnap[0]===(hours + AT) ){
    document.querySelector('.massage').innerText='Good Evening !!'
    document.querySelector('.massage2').innerText= 'STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!'
    document.querySelector('.photo').innerHTML= '<img src="./assest/nap.png" alt=""></img>'

   }
   else if(splitnight[0]===(hours + AT) ){
    document.querySelector('.massage').innerText='Good Night!!'
    document.querySelector('.massage2').innerText= 'CLOSE YOUR EYES AND GO TO SLEEP!!'
    document.querySelector('.photo').innerHTML= '<img src="./assest/goodnight.png" alt=""></img>'

   }

  })


}
setInterval(clockstart,1000)

