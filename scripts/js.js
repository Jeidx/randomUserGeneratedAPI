const container = document.querySelector('.container');
const btnGenerated = document.querySelector("#user-btn");
const newDiv = document.createElement('div');
container.append(newDiv);

function start(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(res => randomIcon(res));
}

btnGenerated.addEventListener('click', (e) => {
    start();
});

function randomIcon(res){
    createBlockOfUser(res);
}
function createBlockOfUser(el){
    newDiv.innerHTML = `
    <div class='wrapper'>
        <img src=${el.results[0].picture.large}>
        <p>Mail: ${el.results[0].email}</p>
        <p>Name: ${el.results[0].name.first} ${el.results[0].name.last}</p>
        <p>Country: ${el.results[0].location.country}, (city: ${el.results[0].location.city})</p>
        <p>Phone: ${el.results[0].phone}</p>
        <p>Age: ${el.results[0].dob.age}</p>
    </div>`;
}



