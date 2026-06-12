let box=document.getElementById("box");



function patientForm(){


box.style.display="block";


document.getElementById("title").innerHTML="Patient Registration";


document.getElementById("content").innerHTML=`

<input placeholder="Name">

<input placeholder="Age">

<input placeholder="Medical Condition">


<button onclick="save()">

Submit Patient

</button>

`;


}





function caregiverForm(){


box.style.display="block";


document.getElementById("title").innerHTML="Caregiver Registration";


document.getElementById("content").innerHTML=`

<input placeholder="Name">

<input placeholder="Experience">

<input placeholder="Certificate">


<button onclick="save()">

Create Profile

</button>

`;


}




function openLogin(){


box.style.display="block";


document.getElementById("title").innerHTML="Login";


document.getElementById("content").innerHTML=`

<input placeholder="Email">

<input placeholder="Password">


<button onclick="save()">

Login

</button>

`;


}




function save(){

alert("Action completed successfully!");

}




function searchCare(){


let type=document.getElementById("filter").value;


let data=[


{
name:"Anita Sharma",
role:"nurse",
rating:"⭐4.9"
},


{
name:"Rahul Kumar",
role:"elder",
rating:"⭐4.8"
}


];


let html="";


data.forEach(c=>{


if(type=="all" || c.role==type){


html+=`

<div class="card">

<h3>${c.name}</h3>

<p>${c.role}</p>

<p>${c.rating}</p>


<button onclick="book('${c.name}')">

Book

</button>


</div>

`;


}


});


document.getElementById("results").innerHTML=html;


}




function book(name){

alert(
"Booking request sent to "+name
);


}



function request(){


document.getElementById("status").innerHTML=

"Request accepted successfully";


}



function earnings(){


document.getElementById("status").innerHTML=

"Total earnings: ₹25,000";


}
