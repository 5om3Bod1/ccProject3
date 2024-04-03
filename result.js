document.addEventListener("DOMContentLoaded",function(){
    
    //Class, fighter scout tact tank
    let result0 = localStorage.getItem("result0")

    //Front or Back, front q1B back
    let result1 = localStorage.getItem("result1")

    //Play for, self q2B team
    let result2 = localStorage.getItem("result2")

    //Ability type, off q3B def
    let result3 = localStorage.getItem("result3")

    //Reliance, yes no
    let result4 = localStorage.getItem("result4")



    //FIGHTER

    //Jett
    if (result0 == "fighter" && result2 == "self" && result3 == "q3B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Jett is for you!";
    } else if (result0 == "fighter" && result2 == "self" && result3 == "def" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Jett is for you!";
    }

    //Reyna
    if (result0 == "fighter" && result2 == "self" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Reyna is for you!";
    } else if (result0 == "fighter" && result2 == "self" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Reyna is for you!";
    }

    //Phoneix
    if (result0 == "fighter" && result2 == "q2B" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Phoneix is for you!";
    } else if (result0 == "fighter" && result2 == "team" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Phoneix is for you!";
    } else if (result0 == "fighter" && result2 == "team" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Phoneix is for you!";
    } else if (result0 == "fighter" && result2 == "team" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Phoneix is for you!";
    } else if (result0 == "fighter" && result2 == "q2B" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Phoneix is for you!";
    }
    
    //Raze
    if (result0 == "fighter" && result2 == "self" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Raze is for you!";
    }

    //Yoru
    if (result0 == "fighter" && result2 == "q2B" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Yoru is for you!";
    } else if (result0 == "fighter" && result2 == "team" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Yoru is for you!";
    }

    //Neon
    if (result0 == "fighter" && result2 == "self" && result3 == "off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Neon is for you!";
    }

    //Iso
    if (result0 == "fighter" && result2 == "q2B" && result3 == "q3B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
    } else if (result0 == "fighter" && result2 == "team" && result3 == "q3B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
    } else if (result0 == "fighter" && result2 == "team" && result3 == "off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
    } else if (result0 == "fighter" && result2 == "team" && result3 == "def" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
    } else if (result0 == "fighter" && result2 == "q2B" && result3 == "off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
    } else if (result0 == "fighter" && result2 == "q2B" && result3 == "def" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
    }



    //SCOUT

    //Sova
    if (result0 == "scout" && result1 == "back" && result2 == "team" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Sova is for you!";
    }

    //Breach
    if (result0 == "scout" && result1 == "front" && result2 == "q2B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Breach is for you!";
    } else if (result0 == "scout" && result1 == "front" && result2 == "team" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Breach is for you!";
    } 

    //Skye
    if (result0 == "scout" && result1 == "q1B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Skye is for you!";
    } else if (result0 == "scout" && result1 == "back" && result2 == "q2B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Skye is for you!";
    } else if (result0 == "scout" && result1 == "back" && result2 == "team" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Skye is for you!";
    } else if (result0 == "scout" && result1 == "back" && result2 == "self" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Skye is for you!";
    } 

    //Kay/o
    if (result0 == "scout" && result1 == "q1B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Kay/o is for you!";
    } else if (result0 == "scout" && result1 == "back" && result2 == "q2B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Kay/o is for you!";
    } else if (result0 == "scout" && result1 == "back" && result2 == "self" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Kay/o is for you!";
    } 

    //Fade
    if (result0 == "scout" && result1 == "front" && result2 == "team" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Fade is for you!";
    }

    //Gekko
    if (result0 == "scout" && result1 == "front" && result2 == "q2B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Gekko is for you!";
    } else if (result0 == "scout" && result1 == "front" && result2 == "self" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Gekko is for you!";
    } 



    //Tactician

    //Omen
    if (result0 == "tact" && result1 == "q1B" && result2 == "q1B" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
    } else if (result0 == "tact" && result1 == "front" && result2 == "self" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
    } else if (result0 == "tact" && result1 == "q1B" && result2 == "team" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
    } else if (result0 == "tact" && result1 == "front" && result2 == "q2B" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
    } else if (result0 == "tact" && result1 == "front" && result2 == "q2B" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
    } else if (result0 == "tact" && result1 == "front" && result2 == "q2B" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
    } else if (result0 == "tact" && result1 == "front" && result2 == "team" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
    } else if (result0 == "tact" && result1 == "front" && result2 == "team" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
    } else if (result0 == "tact" && result1 == "front" && result2 == "team" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
    }

    //Viper
    if (result0 == "tact" && result1 == "back" && result3 == "q3B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Viper is for you!";
    } else if (result0 == "tact" && result1 == "back" && result2 == "team" && result3 == "off"){
        document.querySelector("#new-message").innerHTML = "Viper is for you!";
    } else if (result0 == "tact" && result1=="q1B" && result2 == "team" && result3 =="q3B"){
        document.querySelector("#new-message").innerHTML = "Viper is for you!";
    }

    //Brimstone
    if (result0 == "tact" && result1 == "q1B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Brimstone is for you!";
    } else if (result0 == "tact" && result1 == "front" && result2 == "team" && result3 == "off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Brimstone is for you!";
    } else if (result0 == "tact" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Brimstone is for you!";
    }


    //Astra
    if (result0 == "tact" && result1 == "back" && result2 == "team" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Astra is for you!";
    } 

    //Harbor
    if (result0 == "tact" && result1 == "q1B" && result2 == "q2B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
    } else if (result0 == "tact" && result1 == "front" && result2 == "self" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
    } else if (result0 == "tact" && result1 == "q1B" && result2 == "team" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
    } else if (result0 == "tact" && result1 == "q1B" && result2 == "self" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
    } else if (result0 == "tact" && result1 == "front" && result2 == "self" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
    } 





    console.log(result0)
    console.log(result1)
    console.log(result2)
    console.log(result3)
    console.log(result4)
})