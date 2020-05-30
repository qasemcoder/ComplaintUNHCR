
<<<<<<< HEAD
//    let URL = 'https://complaint-campz.herokuapp.com/'
   let URL = 'http://localhost:3000/'
=======
   // let URL = 'https://complaint-campz.herokuapp.com/'
let URL = 'http://localhost:3000/'
>>>>>>> 3d99af99e45a60bdb8fce976f0a458a1de84d265
   let header = new Headers();
   header.append('content-type' , 'application/json');

    function send() { 
      let email = document.getElementById('email')
       let pass = document.getElementById('pass')
       fetch(URL + 'login' , {
           method : 'post',
           headers : header,
           body : JSON.stringify({
           email : email.value,
           pass : pass.value
           })
       }).then(re=>{
return re.json();
       }).then(data=>{
           console.log(data)
        if(data.status == 401){
            alert('your password is wrong')
            pass.style.borderBottomColor = 'red'
        }else if(email.value !== 'complaint@UNHCR.UN'){
            alert('your email is wrong')
            email.style.borderBottomColor = 'red'
        }else{
            localStorage.setItem('token' , data.token)
<<<<<<< HEAD
            // open('https://complaint-campz.herokuapp.com/admin')
           open('http://localhost:3000/admin')
=======
            open('http://localhost:3000/admin')
>>>>>>> 3d99af99e45a60bdb8fce976f0a458a1de84d265
        }
       })

    }
