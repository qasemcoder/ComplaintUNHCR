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
let newNews = document.getElementById('newNews')
let deloge = document.getElementById('deloge')
let spanVald = document.getElementById('spanVald')
let AddNews = document.getElementById('AddNews')
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
                            <div id="divMarq">${data[i].news} <span id="${data[i].id}" class = 'del'>
                            <i class="fa fa-trash-o" style="font-size:36px"></i> </span>
                            </div> 
                        </div>
                    </div>`
            }
            for (let i = 0; i < data.length; i++) {
                del[i].addEventListener('click', e => {
                    let id = e.target.parentElement.getAttribute('id');
                    console.log(id)
                    delet(id)
                    localStorage.setItem('id_N', id)
                    location.reload()
                })
            }
        }
    })
};
// document.body.parentElement
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

let header = new Headers();
header.append('content-type', 'application/json');

function send_news() {
    if (newNews.textLength == 0) {
        deloge.style.display = 'block';
        spanVald.innerHTML = 'Please Write New News';
        newNews.value = ''
    } else if (newNews.textLength < 10) {
        deloge.style.display = 'block';
        spanVald.innerHTML = 'Please Write long text';
        newNews.value = ''
    } else {
        let newNews = document.getElementById('newNews')
        console.log(newNews.value)
        fetch(URL + 'addnews', {
            method: 'post',
            headers: header,
            body: JSON.stringify({
                newNews: newNews.value,
            })
        }).then(re => {
            return re.json();
        }).then(data => {
            console.log(data)
            if (data.status == 200) {
                deloge.style.display = 'block';
                spanVald.innerHTML = 'Done Insert New News';
                newNews.value = ''
            } else {
                deloge.style.display = 'block';
                spanVald.innerHTML = 'Wrong';
                newNews.value = ''
            }
        })
    }
    location.reload();
    location.reload();
}

function closeMess() {
    AddNews.style.display = 'none';
}
function showMess() {
    AddNews.style.display = 'block';
}