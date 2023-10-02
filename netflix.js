let divs = document.querySelectorAll(".pan");

for(let i=0 ;i<divs.length ; i++){
    divs[i].addEventListener("click",function(){
        let ele = this.nextElementSibling;
        if(ele.style.display=="none" || ele.style.display == ""){
            for(let j=0 ; j<divs.length ; j++){
                if(j!=i){
                    let ele2 = divs[j].nextElementSibling;
                    if(ele2.style.display=="block"){
                        ele2.style.display  ="";
                        divs[j].children[1].innerHTML =`<i class="fa-solid fa-plus"></i>`;
                    }
                }
            }
            ele.style.display = "block";
            this.children[1].innerHTML = "<i class='fa-solid fa-xmark'></i>";
        }
        else{
            this.children[1].innerHTML = `<i class="fa-solid fa-plus"></i>`;
            ele.style.display = "";
        }
        
        console.log(this.nextElementSibling);
    })
}