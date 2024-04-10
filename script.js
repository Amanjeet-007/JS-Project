   // first projct|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    let a = document.querySelector(".one button");
    let b = document.querySelector(".box");
    let c = 1;

    a.addEventListener("click", function () {

        if (c == 1) {
            b.style.backgroundColor = "black";
            b.style.color = "rgb(7, 131, 7)";
            c = 0;

        }
        else {
            b.style.backgroundColor = "aqua";
            b.style.color = "black";
            c = 1;
        }
    })
    // second project||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    const dec = document.querySelector(".button1");
    const reset = document.querySelector(".button2");
    const inc = document.querySelector(".button3");
    let number = document.querySelector(".no");
    let change = 0;
    let color = function () {
        if (0 < change) {
            number.style.color = "green";
        }
        else if (0 > change) {
            number.style.color = "red"
        }
        else {
            number.style.color = "black"
        }
    }

    dec.addEventListener("click", function () {
        let a = 1;
        if (a == 1) {
            change--
            number.textContent = change;
            color()
        }


    })
    reset.addEventListener("click", function () {

        number.innerHTML = change = 0;
        color()

    })
    inc.addEventListener("click", function () {
        change++
        number.innerHTML = change;
        color()
    })
    // ------------------------------------------third project
    let third = [{
        name: "Amanjeet Kumar",
        pic : "A",
        job: "Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea fuga expedita assumenda harum asperiores nemo rem sapiente, nisi quos commodi accusamus tenetur reprehenderit consequuntur laudantium et ipsam modi? Sapiente!",
    },
    {
        name: "Rikky Singh",
        pic : "R",
        job: "Founder",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea fuga expedita assumenda harum asperiores nemo rem sapiente, nisi quos commodi accusamus tenetur reprehenderit consequuntur et ipsam modi? Sapiente!",
    }, {
        name: "John Cena",
        pic : "J",
        job: "Fighter",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea fuga expedita assumenda harum asperiores nemo rem sapiente, nisi quos commodi tenetur reprehenderit consequuntur laudantium et ipsam modi? Sapiente!",
    }, {
        name: "Conor MCgrager",
        pic : "C",
        job: "MMA",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea fuga expedita assumendaasperiores nemo rem sapiente, nisi quos commodi accusamus tenetur reprehenderit consequuntur laudantium et ipsam modi? Sapiente!",
    }]

    let name = document.querySelector(".name");
    let pic = document.querySelector(".pic");
    let job = document.querySelector(".job");
    let review = document.querySelector(".review");
    // ------------------------buttons
    let left = document.querySelector("#left");
    let right = document.querySelector("#right");
    let rdm = document.querySelector("#random");





        let s = 0;
//--------------- default review
        name.textContent = `${third[s].name}`;
        job.textContent = `${third[s].job}`
        review.textContent = `${third[s].review}`
        pic.textContent = `${third[s].pic}`;

        // ----------after change
        left.addEventListener("click", () => {
            // minimum index
            if (s <= 0) {
                s = 3;
            }
            else {
                s -= 1;
            }
            name.textContent = `${third[s].name}`;
            job.textContent = `${third[s].job}`
            review.textContent = `${third[s].review}`
            pic.textContent = `${third[s].pic}`;

        })
        right.addEventListener("click", () => {
            // lenght of review highest
            if (s >= 3) {
                s = 0;
            }
            else {
                s += 1;
            }

            name.textContent = `${third[s].name}`;
            job.textContent = `${third[s].job}`
            review.textContent = `${third[s].review}`
            pic.textContent = `${third[s].pic}`;

        })
        rdm.addEventListener("click",()=>{
            let r = (Math.random().toFixed(1)*10)
            if(r < 3){
                s = 3;
            }
            else if((r > 3) && (r < 6)){
                s = 1;
            }
            else if((r < 9) && (r > 6)){
                s = 2
            }
            else{
                s = 0
            }
            name.textContent = `${third[s].name}`;
            job.textContent = `${third[s].job}`
            review.textContent = `${third[s].review}`
            pic.textContent = `${third[s].pic}`;
           
        })
        //-------------------------------------------- fourth project
        let menu = document.querySelector(".menu ");
        let icon = document.querySelector(".icon");let ak = 0;
        function showMenu(){
            
            if(ak==0){
                menu.style.top = "0px";
                ak = 1
            }
            else{
                menu.style.top = "-105px";
                ak = 0;
            }
        }
        // ------------------------------------ fifth project
        let cut = document.querySelector(".nav .cut");
        let nav = document.querySelector(".fifth .nav");
        let icon2 = document.querySelector(".icon2");
        function showSide(){
            nav.style.visibility = "visible";
        }
        cut.addEventListener("click",()=>{
            nav.style.visibility = "hidden";
        })
        









