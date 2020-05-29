if (localStorage.getItem('token') == undefined || localStorage.getItem('token') == null) {
    window.location.href = "../login/login.html";
}
var ArrayAllNews = [];
function logout() {
    localStorage.removeItem('token')
    window.location.href = '../login/login.html'
}
let contentAllNews = document.getElementById('contente')
let spanInfo = document.getElementById('spanInfo')
let content = document.getElementById('contente')
let del = document.getElementsByClassName('del')
// let URL = 'https://complaint-campz.herokuapp.com/'
let URL = 'http://localhost:3000/'
get_all_News()

function get_all_News() {
    fetch(URL + 'news', {
        method: 'get'
    }).then(re => {
        return re.json()
    }).then(data => {
        console.log(data)
        console.log(ArrayAllNews.length)

        ArrayAllNews.push(data)
    
        if (ArrayAllNews[0]=="") {
            contentAllNews.style.display = 'none';
            spanInfo.style.display = 'block';
            console.log(true)
        } else {
            console.log(false)
            spanInfo.style.display = 'none';
            contentAllNews.style.display = 'block';
            for (let i = 0; i < data.length; i++) {
                content.innerHTML +=
                    `<div id="content">
                        <div id="mar">
                            <div id="divMarq">${data[i].news}` + `<img src="./useImage/del.png" 
                                id="${data[i].id}" title="Delete" width=20 height=20' class = 'del'>
                            </div> 
                        </div>
                    </div>`
            }
            for (let i = 0; i < data.length; i++) {
                del[i].addEventListener('click', e => {
                    let id = e.target.getAttribute('id');
                    console.log(id)
                    delet(id)
                    localStorage.setItem('id_N', id)
                    location.reload()
                })
            }
        }
    })
};

//------------------------------------

function delet(id) {
    // let id = localStorage.getItem('id_N')
    fetch(URL + 'delItem/' + id, {
        method: 'delete'
    }).then(re => {
        return re.json()
    }).then(data => {
        console.log(data)
    })
   
    location.reload()
   
}
