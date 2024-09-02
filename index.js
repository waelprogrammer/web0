// 2sd session

let turnon = document.getElementById('turnon');
let turnoff = document.getElementById('turnoff');
turnon.innerHTML = "on";
turnoff.innerHTML = "off";

turnon.addEventListener('click', () => Turnon())
turnoff.addEventListener('click', () => Turnoff())

function Turnon() {
    let Light = document.getElementById('Light');
    Light.src = "./photos (on off)/on.png";
}
function Turnoff() {
    let Light = document.getElementById('Light');
    Light.src = "./photos (on off)/off.png";
}

let onoff = document.getElementById("onoff");
let container = true;
onoff.addEventListener('click', () => {
    container = !container;
    container == true ? Turnon() : Turnoff();
})
let linebreak = document.getElementById('linebreak');
for (i = 0; i < 9; i++) {
    let btn = document.createElement('button');
    btn.innerHTML = "2sd session has end";
    linebreak.appendChild(btn);
}
let lineBreak = document.createElement('br');
document.body.appendChild(lineBreak);


// 3th session


let Names = ['Wael', 'Joumana', 'Zeina', 'Sami', 'Nancy', 'Maryam', 'Abd'];

function addnames() {
    let name = document.getElementById('name');
    Names.push(name.value);
    name.value = '';
    sketchnames();
}

let add = document.getElementById('+');
add.addEventListener('click', () => addnames());

function sketchnames() {
    ul.innerHTML = '';
    Names.forEach(s => {
        let ul = document.getElementById('ul');
        let li = document.createElement('li');
        li.innerHTML = s;
        ul.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '   X';
        span.style.cursor = 'pointer';
        span.title = "click here to remove";
        span.style.color = 'red';
        span.addEventListener('click', () => { if (confirm(`Are you sure you want to remove ${s} ? `)) { removenames(s) } });
        li.appendChild(span);
    }
    )

}
function removenames(x) {
    Names = Names.filter(s => s != x);
    sketchnames()
}
sketchnames()


// second part of 3th session


let stu1 = { id: 21, Name: 'Wael', age: 21, uni: 'LU', address: { country: 'Lebanon', city: 'Beirut', building: '876-Katin' } };
let stu2 = { id: 23, Name: 'Joumana', age: 21, uni: 'Aust', address: { country: "Australia", city: 'sydney', building: '56-sydney1' } };
let stu3 = { id: 30, Name: "Zeina", age: 34, uni: "ALU", address: { country: "Canada", city: "sir", building: "120-sir" } };
let allstudents = [];
allstudents.push(stu1);
allstudents.push(stu2);
allstudents.push(stu3);
function sketchnames2() {
    let ul1 = document.getElementById('ul1');
    ul1.innerHTML = '';
    allstudents.forEach(x => {

        let li1 = document.createElement('li');
        li1.innerHTML = `${x.id}/${x.Name}/${x.address.city}/${x.address.building}`;
        ul1.appendChild(li1);
        let span1 = document.createElement('span');
        span1.innerHTML = '   X';
        span1.style.cursor = 'pointer';
        span1.title = "click here to remove";
        span1.style.color = 'red';
        span1.addEventListener('click', () => { if (confirm(`Are you sure you want to remove ${x.Name} ? `)) { removenames1(x) } });
        li1.appendChild(span1);
    }
    )

}
function removenames1(a) {
    allstudents = allstudents.filter(x => x.id != a.id);
    // removenames1(a) 2enno haydi al function badi 2e3tiha 2asme2 mo5talefeh fa lezem 7etella parameter 
    // x => lezem 2e3tiha parameter yalli la7 yet8ayar men al array
    // fa la7 2ef2os 3ala 2esem la7 yfout 3ala al function bel parameter yalli 3eyatella menno la 7 yshouf kel 2esem bel array al id taba3o 2eza ken metel al id yalli fe2es 3leh bye7zfo men al array w b5alli l diffrent
    sketchnames2()
}
sketchnames2()

let exam =
{
    cource:
    {
        code: "M101",
        description: "Math 101",
        credit: 6,
    },
    date: "2024-7-16",
    ismateriel_allowed: true
}
let p = document.createElement('p');
let linebreak1 = document.getElementById('linebreak1');
p.innerHTML = `${exam.cource.code}/${exam.cource.description}/${exam.cource.credit}/${exam.date}/${exam.ismateriel_allowed}`;
linebreak1.appendChild(p);

let object_Json = JSON.stringify(exam);

let p1 = document.createElement('p');
let linebreak2 = document.getElementById('linebreak2');
p1.innerHTML = `do inspect and you show the Json data that i transform exam as object to string as JSON`;
linebreak2.appendChild(p1);
console.log(object_Json);


// 4th session


fetch('https://restcountries.com/v3.1/all') // talabet men url al ma3loumet
    .then(response => response.json()) // al jaweb taba3 url yalli henna l ma3loumet 7awelon la json
    .then(data => {                    // ba3den 3atet 2esem lal ma3loumet 2esem json 2aw 2aya chi w balech fini 2e3mel 3alayon
        let countries = document.getElementById('countries');
        let counter = 0;


        data.forEach(s => {
            if (counter < 10) {
                let country = document.createElement('div');
                country.innerHTML = `Name of the coubtry : ${s.name.common}`;
                countries.appendChild(country);
                counter++;
                let capital = document.createElement('p');
                capital.innerHTML = "capital : ";
                capital.style.marginLeft = '10px';
                capital.style.marginBottom = '15px';
                capital.style.color = 'red';
                capital.style.cursor = 'pointer';
                country.appendChild(capital);
                capital.addEventListener('click', () => {
                    let capital1 = document.createElement('span');
                    capital1.innerHTML = `${s.capital}`;
                    capital1.style.color = 'green';
                    capital.appendChild(capital1);

                })

                let population = document.createElement('p');
                population.innerHTML = "population : ";
                population.style.marginLeft = '10px';
                population.style.marginBottom = '15px';
                population.style.color = 'red';
                population.style.cursor = 'pointer';
                country.appendChild(population);
                population.addEventListener('click', () => {
                    let population1 = document.createElement('span');
                    population1.innerHTML = `${s.population}`;
                    population1.style.color = 'green';
                    population.appendChild(population1);

                })

                let flag = document.createElement('p');
                flag.innerHTML = "Flag : ";
                flag.style.marginLeft = '10px';
                flag.style.marginBottom = '15px';
                flag.style.color = 'red';
                flag.style.cursor = 'pointer';
                country.appendChild(flag);
                flag.addEventListener('click', () => {
                    let flag1 = document.createElement('img');
                    flag1.src = s.flags.png;
                    flag1.style.width = '80px';
                    flag1.style.height = '50px';
                    flag.appendChild(flag1);

                })
            }
        }
        )


    })


// 5th session



fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => response.json()) 
    .then(users => {                    
        users.forEach(u=>{
            let select = document.getElementById('select');
            let option = document.createElement('option');
            option.innerHTML=u.name;
            select.appendChild(option);
        })
    })

    fetch('http://localhost:1000/names') 
    .then(response => response.json()) 
    .then(data1 => {                    
       data1.forEach(d=>{
            let select1 = document.getElementById('select1');
            let option = document.createElement('option');
            option.innerHTML=d.names;
            select1.appendChild(option);
        })
    })
    
    fetch('http://localhost:1000/students') 
    .then(response => response.json()) 
    .then(data1 => {                    
       data1.forEach(d=>{
            let select2 = document.getElementById('select2');
            let option = document.createElement('option');
            option.innerHTML=`${d.Name} : ${d.Major}`;
            select2.appendChild(option);
        })
    })








