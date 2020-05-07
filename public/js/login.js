
   let URL = 'http://localhost:3000/'
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
           if(data.status == 200) {
               open('https://www.google.com')
           }
       })

    }