const feeback = document.getElementById("feedback")

let counter = 0
setInterval(()=>{
    const feebackText = "FEEDBACK"
    feeback.innerText += feebackText.charAt(counter)

    counter++
    
    if(counter === feebackText.length + 1){
        feeback.innerText = ""
        counter = 0
    } 
 
}, 500)