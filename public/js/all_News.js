if(localStorage.getItem('token') == undefined || localStorage.getItem('token') == null){
    window.location.href = "../login/login.html";
}
function logout() {
    localStorage.removeItem('token')
    window.location.href = '../login/login.html'
}
let content = document.getElementById('mar')
let del = document.getElementsByClassName('del')
let URL = 'https://complaint-campz.herokuapp.com/'
get_all_News()

function get_all_News() {
    fetch(URL + 'news', {
        method: 'get'
    }).then(re => {
        return re.json()
    }).then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
               content.innerHTML += `<div id="divMarq">${data[i].news}` +`<img src="./useImage/del.png" 
               id="${data[i].id}" title="Delete" width=20 height=20' class = 'del'>
                 </div> `
                 
        }
for(let i=0 ; i<data.length ; i++) {
    del[i].addEventListener('click' , e=>{
    let id = e.target.getAttribute('id');
    console.log(id)
    delet(id)
    localStorage.setItem('id_N' , id)
    })
}

// document.body.getAttribute






        // for (let i = 0; i < data.length; i++) {
        //     content.innerHTML += `<div id="divMarq">${data[i].news}` +`<img src="./useImage/del.png" id="imgDel" title="Delete" width=20 height=20 onclick='ale();'>
        //     </div> `
        //     localStorage.setItem('ne', data[i].id)
        //     for (let i = 0; i < data.length; i++) {
        //         document.getElementById('divMarq').addEventListener('click', e => {
        //             e.target.style.color = 'red'
        //             console.log(e)
        //             let id = e.target.parentElement.getAttribute('id');
        //         })
        //     }
        // }
    })
};
//------------------------------------

function delet(id) {
    // let id = localStorage.getItem('id_N')
    fetch(URL + 'delItem/' + id ,{
        method : 'delete'
    }).then(re=>{
        return re.json()
    }).then(data=>{
        console.log(data)
    })
    location.reload()
}
