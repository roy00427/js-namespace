var ROY00427 = {
    init: function () {
        console.log("script in ROY00427 called");
        var div = document.createElement("div");
        
        div.className = "box";
        div.textContent = "ROY00427";
        
        document.getElementById("boxes").appendChild(div);
        
        div.addEventListener("click", F1);
        div.addEventListener("mouseover", F2);
        div.addEventListener("mouseout", F2);
        
        function F2(ev){
            this.classList.toggle("highlight");
        }
        function F1(ev)  {
            this.style.backgroundColor = "#F783D2";
            this.style.borderColor = "#F76D33";
        }
    }
}