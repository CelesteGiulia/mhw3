

const form = document.querySelector('#cane');
form.addEventListener('submit', search)

function search(event){
    event.preventDefault();
   
    const c = document.querySelector('#razza').options[document.querySelector('#razza').selectedIndex].value;
    const a = "https://dog.ceo/api/breed/"+ c + "/images/random";
    console.log (a);
    fetch(a).then(response).then(calcoli);
};


function response(promise){
    console.log(promise);
   if(!promise.ok){
    console.log("impossibile caricare dati");
    return null;
   }
   return promise.json();
}
function calcoli(j){
    console.log(j);
    
    const img = document.createElement('img');
    const sec=document.querySelector('section');
    img.src=j.message;
    sec.innerHTML='';
    img.classList.add('img_cane');
    sec.appendChild(img);
 }


 


function res(promise){
    console.log(promise);
   if(!promise.ok){
    console.log("impossibile caricare dati");
    return null;
   }
   return promise.json();
}

let token;

function cal(j){
    
    token=j.access_token;
    console.log(token);
    const c = 'https://api.gfycat.com/v1/gfycats/search?search_text=dogs&count=1';
    const option1 = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+ token
        },
     
    };
  fetch(c,option1).then(res).then(ca);
 }

function ca(j){
    const img = document.createElement('img');
    const sec=document.querySelector('.gif');
    img.src=j.gfycats[0].content_urls.max1mbGif.url;
    sec.innerHTML='';
    img.classList.add('img_cane');
    sec.appendChild(img);
    console.log(j);
}

const formgif = document.querySelector('#gif_cane');
formgif.addEventListener('submit', trova )

function trova(event){
    event.preventDefault();
    
    const b = 'https://api.gfycat.com/v1/oauth/token';
    const option1 = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: '{"client_id":"2_iwhuhQ", "client_secret": "B51fS-QbpaPUzn7gNR0s-g04yEqJSu8kcMv7TR2WCKahVAdPTkSpB-QCRuux9q0C", "grant_type": "client_credentials"}'
    };
fetch(b,option1).then(res).then(cal);
};
