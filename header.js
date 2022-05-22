const show1=()=>{
    console.log(1)
    document.getElementById("toggle2").style.transform='rotate(0deg)'
    document.getElementById("toggle2").style.transition='.1s'
    document.getElementById("toggle3").style.transform='rotate(0deg)'
    document.getElementById("toggle3").style.transition='.1s'
    document.getElementById("toggle4").style.transform='rotate(0deg)'
    document.getElementById("toggle4").style.transition='.1s'
    document.getElementById("submenue2").style.display='none' 
    document.getElementById("submenue3").style.display='none' 
    document.getElementById("submenue4").style.display='none' 
    if(document.getElementById("submenue1").style.display === 'none'){
        document.getElementById("submenue1").style.display='flex' 
        document.getElementById("toggle1").style.transform='rotate(180deg)'
        document.getElementById("toggle1").style.transition='.1s'
    }else  if(document.getElementById("submenue1").style.display != 'none'){
        document.getElementById("submenue1").style.display='none' 
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
    document.getElementById("submenue1").style.display='none' 
    document.getElementById("submenue3").style.display='none'
    document.getElementById("submenue4").style.display='none'  
    if(document.getElementById("submenue2").style.display === 'none'){
        document.getElementById("submenue2").style.display='flex' 
        document.getElementById("toggle2").style.transform='rotate(180deg)'
        document.getElementById("toggle2").style.transition='.1s'
    }else  if(document.getElementById("submenue2").style.display != 'none'){
        document.getElementById("submenue2").style.display='none' 
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
    document.getElementById("submenue1").style.display='none'
    document.getElementById("submenue2").style.display='none'  
    document.getElementById("submenue4").style.display='none' 
    if(document.getElementById("submenue3").style.display === 'none'){
        document.getElementById("submenue3").style.display='flex' 
        document.getElementById("toggle3").style.transform='rotate(180deg)'
        document.getElementById("toggle3").style.transition='.1s'
    }else  if(document.getElementById("submenue3").style.display != 'none'){
        document.getElementById("submenue3").style.display='none' 
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
    document.getElementById("submenue1").style.display='none' 
    document.getElementById("submenue2").style.display='none' 
    document.getElementById("submenue3").style.display='none' 
    if(document.getElementById("submenue4").style.display === 'none'){
        document.getElementById("submenue4").style.display='flex' 
        document.getElementById("toggle4").style.transform='rotate(180deg)'
        document.getElementById("toggle4").style.transition='.1s'
    }else  if(document.getElementById("submenue4").style.display != 'none'){
        document.getElementById("submenue4").style.display='none' 
        document.getElementById("toggle4").style.transform='rotate(0deg)'
        document.getElementById("toggle4").style.transition='.1s'
    }
}