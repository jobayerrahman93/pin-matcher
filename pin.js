
function getPin(){

    let randomPin=Math.round(Math.random()*10000);
    console.log(randomPin);

    let pin=randomPin+'';

    if(pin.length==4)
    {
        return randomPin;
    }
    else
    {
       return getPin();
    }
}


function generatePin(){

    let pin=getPin();
    document.getElementById('display-pin').value=pin;

}




// calculator

document.getElementById('key-pad').addEventListener('click',function(event){

    let number=event.target.innerText;
    let typeDisplay=document.getElementById('typed-numbers');

    if(isNaN(number))
    {
        if(number=='C')
        {
            typeDisplay.value='';
        }
    }
    else
    {
       
        let prviousNumber=typeDisplay.value;
        
        let newNumber=prviousNumber+number;
    
        typeDisplay.value=newNumber;
    }
  

});


// verify pin

function verifyPin(){
    let displayPin=document.getElementById('display-pin').value;
    let typedNumbers=document.getElementById('typed-numbers').value;
    let notifySucces= document.getElementById('notify-success');
    let notifyFail= document.getElementById('notify-fail');

    if(displayPin==typedNumbers)
    {
       notifySucces.style.display='block';

       notifyFail.style.display='none';
    }
    else
    {
        notifyFail.style.display='block';
       notifySucces.style.display='none';
    }
}