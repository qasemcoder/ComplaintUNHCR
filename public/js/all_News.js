let content = document.getElementById('mar')
let del = document.getElementsByClassName('del')
let URL = 'http://localhost:3000/'
get_all_News()

function get_all_News() {
    fetch(URL + 'news', {
        method: 'get'
    }).then(re => {
        return re.json()
    }).then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            content.innerHTML += `<div id="divMarq">${data[i].news}` + `<img src="./useImage/del.png" 
               id="${data[i].id}" title="Delete" width=20 height=20' class = 'del imgDel'>
                 </div> `

        }
        for (let i = 0; i < data.length; i++) {
            del[i].addEventListener('click', e => {
                let id = e.target.getAttribute('id');
                console.log(id)
                delet(id)
                localStorage.setItem('id_N', id)
            })
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