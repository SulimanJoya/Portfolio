
const links=document.querySelectorAll(".alternative-style"),
    totalLinks= links.length;

    function setActiveStyle(color){
        for(let i =0; i<totalLinks; i++){
            if(color === links[i].getAttribute("title")){
                links[i].removeAttribute("disabled");
            }
            else{
                links[i].setAttribute("disabled", "true");
            }
        }  
    }

    //Body Skin light or dark
    const bodySkin=document.querySelectorAll(".body-skin"),
        totalbodySkin = bodySkin.length;
    for(let i =0; i<totalbodySkin; i++){
        bodySkin[i].addEventListener("change",function(){
            if(this.value === "dark"){
                document.body.className= "dark";
                //document.body.classList.add("dark")
            }
            else{
                document.body.className= "";
                //document.body.classList.remove("dark")
            }
        })
    }

document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})