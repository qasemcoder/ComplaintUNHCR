if (localStorage.getItem('token') == undefined || localStorage.getItem('token') == null) {
    window.location.href = "../login/login.html";
}

let newNews = document.getElementById('newNews')
let deloge = document.getElementById('deloge')
let spanVald = document.getElementById('spanVald')

function logout() {
    localStorage.removeItem('token')
    window.location.href = '../login/login.html'
}

// let URL = 'https://complaint-campz.herokuapp.com/'
let URL = 'http://localhost:3000/'

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
}
//function close div deloge
function closeMess() {
    deloge.style.display = 'none';
}