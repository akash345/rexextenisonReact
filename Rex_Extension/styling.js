
document.querySelector("#collapsebutton").addEventListener("click", function(e){
    const display = document.querySelector("#collapsecontent").style.display
    if (display==="none"){
        document.querySelector("#collapsecontent").style.display="block"
    }else{
        document.querySelector("#collapsecontent").style.display="none"
    }
})



//API function
function callAPI(method, url, data){
    return new Promise (function(resolve, reject){
            let xhr = new XMLHttpRequest();     
            xhr.open(method, url, true);
            xhr.setRequestHeader("Content-Type", "application/json")
            xhr.send(data);    
            xhr.onreadystatechange = function(){
                if (this.readyState === XMLHttpRequest.DONE ){
                    return resolve(xhr.response)
                }
            }
    })
  }