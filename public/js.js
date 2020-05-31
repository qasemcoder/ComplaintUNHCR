let reg_list = document.getElementById('reg_list')
let URL = 'https://complaint-campz.herokuapp.com/'
/*****************************************************************/
let nameForUser = document.getElementById('name')
let PhoneForUser = document.getElementById('phone')
let CaseNumberForUser = document.getElementById('casea')
let indevaiualUser = document.getElementById('ind')
let distract = document.getElementById('dis')
let blockForUser = document.getElementById('block')
let homeForUser = document.getElementById('home')
let massegeFromUser = document.getElementById('massege')
/************************************************************/
var valdUserName= /[a-z0-9]+ +[a-z0-9] +[a-z0-9]/;
function checkUsernameReqEx(){
    if (valdUserName.test(nameForUser.value)===true){
        nameForUser.style.border = '1px solid green';
    }else{
        nameForUser.style.border='2px solid red';
    }
};

var phoneRGEX = /^[\+]?[0-9]{2}[)]?[" "\s\.]?[0-9]{4}[" "\s\.]?[0-9]{4,6}$/im

function CheckPhoneByRegExp(){
    if(phoneRGEX.test(PhoneForUser.value) === true) {
        // phoneNumber.style.borderBottomColor = "green";
        PhoneForUser.style.border='3px solid green'
    }else{
        PhoneForUser.style.border='3px solid red'; 
    }
  };

  var CaseNumberForUserRGEX = /^[0-9]{3}[\-]?[0-9]{2}?[C]?[0-9]{5}$/im

  function ChecCaseNumberForUserByRegExp(){
      if(CaseNumberForUserRGEX.test(CaseNumberForUser.value) === true) {
          // phoneNumber.style.borderBottomColor = "green";
          CaseNumberForUser.style.border='3px solid green'
      }else{
        CaseNumberForUser.style.border='3px solid red'; 
      }
    };


    var indevaiualUserRGEX = /^[0-9]{3}[\-]?[0-9]{8}$/im

    function ChecindevaiualUserByRegExp(){
        if(indevaiualUserRGEX.test(indevaiualUser.value) === true) {
            // phoneNumber.style.borderBottomColor = "green";
            indevaiualUser.style.border='3px solid green'
        }else{
            indevaiualUser.style.border='3px solid red'; 
        }
      };

    function CheckdistractByRegExp(){
        if(distract.value==0) {
            distract.style.border='3px solid red'; 
        }else if(distract.value.length>=3) {
            distract.style.border='3px solid yellow'; 
        }      
        else{
            distract.style.border='3px solid green'
        }
      };


      function CheckblockForUserByRegExp(){
        if(blockForUser.value==0) {
            blockForUser.style.border='3px solid red'; 
        }else if(blockForUser.value.length>=3) {
            blockForUser.style.border='3px solid yellow'; 
        }   
        // else if(blockForUser.value>=11) {
        //     blockForUser.style.border='3px solid blue'; 
        // }    
        else{
            blockForUser.style.border='3px solid green'
        }
      };


      function CheckhomeForUserByRegExp(){
        if(homeForUser.value==0) {
            homeForUser.style.border='3px solid red'; 
        }else if(blockForUser.value.length>=4 || homeForUser.value>=300) {
            homeForUser.style.border='3px solid yellow'; 
        }            
        else{
            homeForUser.style.border='3px solid green'
        }
      };

      function ChecmassegeFromUserRegExp(){
        if(massegeFromUser.textLength>=40) {
            massegeFromUser.style.border='3px solid green'
           
        }           
        else{
            massegeFromUser.style.border='3px solid red'; 
        }
      };












/******************************************************************** */

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
/************************************************************/
var valdUserName =/[a-z0-9] +[a-z0-9] +[a-z0-9]/;
function checkUsernameReqEx(){
    if (valdUserName.test(namee.value)===true){
        namee.style.border = '1px solid green';
    }else{
        namee.style.border='2px solid red';
    }
};




/***********************************************************/

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