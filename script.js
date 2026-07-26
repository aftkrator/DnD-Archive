const button = document.getElementById("goButton");

button.addEventListener("click", ()=>{

    const page=document.getElementById("campaignSelect").value;

    if(page!==""){

        window.location.href=page;

    }

});