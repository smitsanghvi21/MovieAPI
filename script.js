const app=document.getElementById('root');
const logo=document.createElement('img');
logo.src='https://github.com/taniarascia/sandbox/blob/master/ghibli/logo.png?raw=true';

//creating a div and setting classname to container
const container=document.createElement('div');
container.setAttribute('class','container');

//merging them in the website
app.appendChild(logo);
app.appendChild(container);
//assigning a new XMLHttpRequest object to it
let request= new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://ghibliapi.herokuapp.com/films',true);

//on loading the request access the data
request.onload=function(){
    //convert json response into array
    let data=JSON.parse(this.response);
    //if the status code is between 200 and 400 then print the array
    if(request.status>=200&&request.status<=400){
    //print value of array
       data.forEach(movie => {

        // Creating a div with a card class
        const card=document.createElement('div');
        //assigning classname of div as card
        card.setAttribute('class', 'card');


        //creating h1 and assigning it movie title
        const h1=document.createElement('h1');
        h1.textContent=movie.title;
           
        //creating p and assigning it description of the movie
        const p=document.createElement('p');
        movie.description=movie.description.substring(0,250);
        p.textContent=`${movie.description}...`;;

        container.appendChild(card);
        card.appendChild(h1);
        card.append(p);
       });

    }
    //if not found
    else{
       alert("SORRY, problem connecting with the")

    }
}

//send request
request.send();
