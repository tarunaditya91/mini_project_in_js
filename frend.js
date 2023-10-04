const addf=document.querySelector('h3')
const frendre=document.querySelector('#add')

let check=0

frendre.addEventListener('click',function(){
    
  if(check==0){
    addf.innerHTML="Frend"
    addf.style.color="pink"
    frendre.innerHTML="Remove frend"
    check=1
  }
  else{
    check=0
    addf.innerHTML="Stranger"
    frendre.innerHTML="Add frend"

  }

})



