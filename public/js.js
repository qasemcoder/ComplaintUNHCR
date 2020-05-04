let reg_list = document.getElementById('reg_list')
let URL = 'http://localhost:3000/'

let header = new Headers();
header.append('content-type' , 'application/json');
function send_data() {
let namee = document.getElementById('name')
let phone = document.getElementById('phone')
let casee = document.getElementById('casea')
let ind = document.getElementById('ind')
let dis = document.getElementById('dis')
let block = document.getElementById('block')
let home = document.getElementById('home')
let massege = document.getElementById('massege')
console.log(casee.value,massege.value)
    fetch(URL , {
        method : 'post',
        headers : header,
        body:JSON.stringify({
            name :namee.value,
            phone:phone.value,
            casenumber: casee.value,
            ind:ind.value,
            dis:dis.value,
            block:block.value,
            home:home.value,
            message:massege.value,
            reg : localStorage.getItem('reg')
        })
    }).then(re=>{
        return re.json();
    }).then(data=>{
        console.log(data)
    })
}


reg_list.addEventListener('change', op)
function op(e){
    let mm = e.target.value;
    localStorage.setItem('reg' , mm)
}