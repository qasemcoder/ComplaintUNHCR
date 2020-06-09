
  let URL = 'https://complaint-camp-za.herokuapp.com/'
// let URL = 'http://localhost:3000/'
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
            alert('ok man')
            localStorage.setItem('token' , data.token)
            open('https://complaint-camp-za.herokuapp.com/admin')
        }
       })

    }
