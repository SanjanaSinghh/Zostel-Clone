  // navbar
  const show1=()=>{
    console.log(1)
    document.getElementById("toggle2").style.transform='rotate(0deg)'
    document.getElementById("toggle2").style.transition='.1s'
    document.getElementById("toggle3").style.transform='rotate(0deg)'
    document.getElementById("toggle3").style.transition='.1s'
    document.getElementById("toggle4").style.transform='rotate(0deg)'
    document.getElementById("toggle4").style.transition='.1s'
    document.getElementById("innersubmenue2").style.display='none' 
    document.getElementById("innersubmenue3").style.display='none' 
    document.getElementById("innersubmenue4").style.display='none' 
    if(document.getElementById("innersubmenue1").style.display === 'none'){
        document.getElementById("innersubmenue1").style.display='flex' 
        document.getElementById("toggle1").style.transform='rotate(180deg)'
        document.getElementById("toggle1").style.transition='.1s'
    }else  if(document.getElementById("innersubmenue1").style.display != 'none'){
        document.getElementById("innersubmenue1").style.display='none' 
        document.getElementById("toggle1").style.transform='rotate(0deg)'
        document.getElementById("toggle1").style.transition='.1s'
    }
}

const show2=()=>{
    // console.log(1)
    document.getElementById("toggle1").style.transform='rotate(0deg)'
    document.getElementById("toggle1").style.transition='.1s'
    document.getElementById("toggle3").style.transform='rotate(0deg)'
    document.getElementById("toggle3").style.transition='.1s'
    document.getElementById("toggle4").style.transform='rotate(0deg)'
    document.getElementById("toggle4").style.transition='.1s'
    document.getElementById("innersubmenue1").style.display='none' 
    document.getElementById("innersubmenue3").style.display='none'
    document.getElementById("innersubmenue4").style.display='none'  
    if(document.getElementById("innersubmenue2").style.display === 'none'){
        document.getElementById("innersubmenue2").style.display='flex' 
        document.getElementById("toggle2").style.transform='rotate(180deg)'
        document.getElementById("toggle2").style.transition='.1s'
    }else  if(document.getElementById("innersubmenue2").style.display != 'none'){
        document.getElementById("innersubmenue2").style.display='none' 
        document.getElementById("toggle2").style.transform='rotate(0deg)'
        document.getElementById("toggle2").style.transition='.1s'
    }
}


const show3=()=>{
    // console.log(1)
    document.getElementById("toggle4").style.transform='rotate(0deg)'
    document.getElementById("toggle4").style.transition='.1s'
    document.getElementById("toggle2").style.transform='rotate(0deg)'
    document.getElementById("toggle2").style.transition='.1s'
    document.getElementById("toggle1").style.transform='rotate(0deg)'
    document.getElementById("toggle1").style.transition='.1s'
    document.getElementById("innersubmenue1").style.display='none'
    document.getElementById("innersubmenue2").style.display='none'  
    document.getElementById("innersubmenue4").style.display='none' 
    if(document.getElementById("innersubmenue3").style.display === 'none'){
        document.getElementById("innersubmenue3").style.display='flex' 
        document.getElementById("toggle3").style.transform='rotate(180deg)'
        document.getElementById("toggle3").style.transition='.1s'
    }else  if(document.getElementById("innersubmenue3").style.display != 'none'){
        document.getElementById("innersubmenue3").style.display='none' 
        document.getElementById("toggle3").style.transform='rotate(0deg)'
        document.getElementById("toggle3").style.transition='.1s'
    }
}
const show4=()=>{
    // console.log(1)
    document.getElementById("toggle1").style.transform='rotate(0deg)'
    document.getElementById("toggle1").style.transition='.1s'
    document.getElementById("toggle2").style.transform='rotate(0deg)'
    document.getElementById("toggle2").style.transition='.1s'
    document.getElementById("toggle3").style.transform='rotate(0deg)'
    document.getElementById("toggle3").style.transition='.1s'
    document.getElementById("innersubmenue1").style.display='none' 
    document.getElementById("innersubmenue2").style.display='none' 
    document.getElementById("innersubmenue3").style.display='none' 
    if(document.getElementById("innersubmenue4").style.display === 'none'){
        document.getElementById("innersubmenue4").style.display='flex' 
        document.getElementById("toggle4").style.transform='rotate(180deg)'
        document.getElementById("toggle4").style.transition='.1s'
    }else  if(document.getElementById("innersubmenue4").style.display != 'none'){
        document.getElementById("innersubmenue4").style.display='none' 
        document.getElementById("toggle4").style.transform='rotate(0deg)'
        document.getElementById("toggle4").style.transition='.1s'
    }
}
        // s.addEventListener('click',()=>{ show()})

// body
    async function sai(){

try{
await fetch("http://localhost:3000/sai")
.then((x)=> x.json())
.then((y)=>display(y))




}catch(err){
    console.log(err)
}



    
    }
    sai()

function display(data){
    data.forEach((e,i) => {
        var div= document.createElement('div')
        div.className='xx'
        div.innerHTML=`
                 <img src="${e.posterUrl}">
                 <h1>${e.name}</h1>
             </div>
     `
     
     div.addEventListener("click",()=>{
         localStorage.setItem('index',e.id)
         window.location.href=`city.html`
     })
        document.getElementById("sai").append(div)
        
    });
}