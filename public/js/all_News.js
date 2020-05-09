let content = document.getElementById('mar')
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
            content.innerHTML += `<div id="divMarq">${data[i].news}` +`<img src="./useImage/del.png" id="imgDel" title="Delete" width=20 height=20 onclick='ale();'>
            </div> `
            localStorage.setItem('ne', data[i].id)
            for (let i = 0; i < data.length; i++) {
                document.getElementById('divMarq').addEventListener('click', e => {
                    e.target.style.color = 'red'
                    console.log(e)
                    let id = e.target.parentElement.getAttribute('id');
                })
            }
        }
    })
};
//------------------------------------

function ale(){
    alert('you cliked om Delete button')
}
