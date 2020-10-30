let shipTop = 200;
let shipLeft = 200;
let coinTop = 200;
let coinLeft = 200;

let animalStats = [0,10,10,10,10,0,0];
let foodStats = [0,10,10,10,10,0,0];
let plantStats = [0,10,10,10,10,0,0];
let popStats = [0,10,10,10,10,0,0];
let shipMax = [1,1,1,1];
let shipCoins = [0];


/* ----------------------------------------------------------------------------- */
/*  Grow The Population, Plants, Food, and Animals Of Each Planet                */
/* ----------------------------------------------------------------------------- */
function getGrowth(){
    //Food Growth Growth
    for(let i=1;i<=4;i++){
        let growth = Math.floor(Math.random() * 2);
        newFood = (foodStats[i] + growth);
            if(newFood > 9999){
                newFood = 9999;
            } else if(newFood < 1){
                newFood = 1;
            }
        foodStats[i] = newFood;
    }

    //Pop Growth Growth
    for(let i=1;i<=4;i++){
        if(foodStats[i] >= popStats[i] * 3){
            let newPop = (popStats[i] + 1);
                    if(newPop > 9999){
                        newPop = 9999;
                    }
            popStats[i] = newPop;
            foodStats[i] = foodStats[i] - ((popStats[i]-1) * 3);
                if(newFood < 1){
                    newFood = 1;
                }
        } else {}
    }

    //Plant Growth
    for(let i=1;i<=4;i++){
        let growth = Math.floor(Math.random() * 2);
        newPlant = (plantStats[i] + growth);
            if(newPlant > 9999){
                newPlant = 9999;
            } else if(newPlant < 1){
                newPlant = 1;
            }
        plantStats[i] = newPlant;
    }

    //Animal Growth
    for(let i=1;i<=4;i++){
        if(plantStats[i] >= (animalStats[i] * 3)){
            let newAnimal = (animalStats[i] + 1);
                if(newAnimal > 9999){
                    newAnimal = 9999;
                }
            animalStats[i] = newAnimal;
            plantStats[i] = plantStats[i] - ((animalStats[i]-1) * 3);
                if(newPlant < 1){
                    newPlant = 1;
                }
        } else {}
    } 
}


/* ----------------------------------------------------------------------------- */
/*  Capture Ship Class To Display Correct Ship Image And Buy Ships               */
/* ----------------------------------------------------------------------------- */
ship = document.getElementById("ship");
getShip();
function getShip(){
    if(ship.className === ""){
        ship.className = "SCOUT";
    } else {}
}

function upgradeShip(type){
    ship.className = `${type}`;
    if(type === 3){
        ship.className = `USS_JOEL`;
        shipMax[0] = 15;
        shipMax[1] = 10;
        shipMax[2] = 10;
        shipMax[3] = 15;
    } else if(type === 2){
        ship.className = `FREIGHTER`;
        shipMax[0] = 10;
    } else if(type === 1){
        ship.className = `ABDUCTOR`;
        shipMax[3] = 10;
    }
}


/* ----------------------------------------------------------------------------- */
/*  Capture Key Press To Move Ship To Correct Target Location                    */
/* ----------------------------------------------------------------------------- */
document.addEventListener('keydown', logKey);
function logKey(e) {
    console.log(e.code);
        if(e.code === "ArrowDown"){
            if(shipTop < 620){
                shipTop += 20;
                document.getElementById("ship").style.top = `${shipTop}px`;
                getReward()
            } else {

            }
        } else if(e.code === "ArrowUp"){
            if(shipTop <= 0){

            } else {
                shipTop -= 20;
                document.getElementById("ship").style.top = `${shipTop}px`;
                getReward()
            }
        } else if(e.code === "ArrowLeft"){
            if(shipLeft <= 0){

            } else {
            shipLeft -= 20;
            document.getElementById("ship").style.left = `${shipLeft}px`;
            getReward()
            }
        } else if(e.code === "ArrowRight"){
            if(shipLeft >= 980){

            } else {
            shipLeft += 20;
            document.getElementById("ship").style.left = `${shipLeft}px`;
            getReward()
            }
        // Velonia Controls
            } else if((e.code === "Digit1" || e.code === "Numpad1") && (shipTop === 240 && shipLeft === 300)){
                if(animalStats[1] > 1 && shipMax[0] > animalStats[0]){
                    animalStats[1] = animalStats[1] - 1;
                    animalStats[0] = animalStats[0] + 1;
                } else {}
            } else if((e.code === "Digit2" || e.code === "Numpad2") && (shipTop === 240 && shipLeft === 300)){
                if(foodStats[1] > 10 && shipMax[1] > foodStats[0]){
                    foodStats[1] = foodStats[1] - 1;
                    foodStats[0] = foodStats[0] + 1;
                } else {}
            } else if((e.code === "Digit3" || e.code === "Numpad3") && (shipTop === 240 && shipLeft === 300)){
                if(plantStats[1] > 10 && shipMax[2] > plantStats[0]){
                    plantStats[1] = plantStats[1] - 1;
                    plantStats[0] = plantStats[0] + 1;
            } else {}
            } else if((e.code === "Digit4" || e.code === "Numpad4") && (shipTop === 240 && shipLeft === 300)){
                if(popStats[1] > 1 && shipMax[3] > popStats[0]){
                    popStats[1] = popStats[1] - 1;
                    popStats[0] = popStats[0] + 1;
                } else {}
            // Swasili Controls
                } else if((e.code === "Digit1" || e.code === "Numpad1") && (shipTop === 120 && shipLeft === 800)){
                    if(animalStats[3] > 1 && shipMax[0] > animalStats[0]){
                        animalStats[3] = animalStats[3] - 1;
                        animalStats[0] = animalStats[0] + 1;
                    } else {}
                } else if((e.code === "Digit2" || e.code === "Numpad2") && (shipTop === 120 && shipLeft === 800)){
                    if(foodStats[3] > 10 && shipMax[1] > foodStats[0]){
                        foodStats[3] = foodStats[3] - 1;
                        foodStats[0] = foodStats[0] + 1;
                    } else {}
                } else if((e.code === "Digit3" || e.code === "Numpad3") && (shipTop === 120 && shipLeft === 800)){
                    if(plantStats[3] > 10 && shipMax[2] > plantStats[0]){
                        plantStats[3] = plantStats[3] - 1;
                        plantStats[0] = plantStats[0] + 1;
                } else {}
                } else if((e.code === "Digit4" || e.code === "Numpad4") && (shipTop === 120 && shipLeft === 800)){
                    if(popStats[3] > 1 && shipMax[3] > popStats[0]){
                        popStats[3] = popStats[3] - 1;
                        popStats[0] = popStats[0] + 1;
                    } else {}
                // Kronatia Controls
                    } else if((e.code === "Digit1" || e.code === "Numpad1") && (shipTop === 560 && shipLeft === 900)){
                        if(animalStats[4] > 1 && shipMax[0] > animalStats[0]){
                            animalStats[4] = animalStats[4] - 1;
                            animalStats[0] = animalStats[0] + 1;
                        } else {}
                    } else if((e.code === "Digit2" || e.code === "Numpad2") && (shipTop === 560 && shipLeft === 900)){
                        if(foodStats[4] > 10 && shipMax[1] > foodStats[0]){
                            foodStats[4] = foodStats[4] - 1;
                            foodStats[0] = foodStats[0] + 1;
                        } else {}
                    } else if((e.code === "Digit3" || e.code === "Numpad3") && (shipTop === 560 && shipLeft === 900)){
                        if(plantStats[4] > 10 && shipMax[2] > plantStats[0]){
                            plantStats[4] = plantStats[4] - 1;
                            plantStats[0] = plantStats[0] + 1;
                    } else {}
                    } else if((e.code === "Digit4" || e.code === "Numpad4") && (shipTop === 560 && shipLeft === 900)){
                        if(popStats[4] > 1 && shipMax[3] > popStats[0]){
                            popStats[4] = popStats[4] - 1;
                            popStats[0] = popStats[0] + 1;
                        } else {}
                    // Arnello Controls
                        } else if((e.code === "Digit1" || e.code === "Numpad1") && (shipTop === 460 && shipLeft === 340)){
                            if(animalStats[2] > 1 && shipMax[0] > animalStats[0]){
                                animalStats[2] = animalStats[2] - 1;
                                animalStats[0] = animalStats[0] + 1;
                            } else {}
                        } else if((e.code === "Digit2" || e.code === "Numpad2") && (shipTop === 460 && shipLeft === 340)){
                            if(foodStats[2] > 10 && shipMax[1] > foodStats[0]){
                                foodStats[2] = foodStats[2] - 1;
                                foodStats[0] = foodStats[0] + 1;
                            } else {}
                        } else if((e.code === "Digit3" || e.code === "Numpad3") && (shipTop === 460 && shipLeft === 340)){
                            if(plantStats[2] > 10 && shipMax[2] > plantStats[0]){
                                plantStats[2] = plantStats[2] - 1;
                                plantStats[0] = plantStats[0] + 1;
                        } else {}
                        } else if((e.code === "Digit4" || e.code === "Numpad4") && (shipTop === 460 && shipLeft === 340)){
                            if(popStats[2] > 1 && shipMax[3] > popStats[0]){
                                popStats[2] = popStats[2] - 1;
                                popStats[0] = popStats[0] + 1;
                            } else {}
                        // Sun Controls
                            } else if((e.code === "Digit1" || e.code === "Numpad1") && (shipTop === 280 && shipLeft === 460)){
                                if(animalStats[0] > 0){
                                    animalStats[5] = animalStats[5] + 1;
                                    animalStats[0] = animalStats[0] - 1;
                                } else {}
                                    if(ship.className === "FREIGHTER" && animalStats[5] >= 100 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 100){
                                        type = 3;
                                        animalStats[5] = animalStats[5] - 100;
                                        foodStats[5] = foodStats[5] - 10;   
                                        plantStats[5] = plantStats[5] - 10;   
                                        popStats[5] = popStats[5] - 100;
                                        upgradeShip(type)
                                    } else if(ship.className === "ABDUCTOR" && animalStats[5] >= 10 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 100){
                                        type = 2;
                                        animalStats[5] = animalStats[5] - 10;
                                        foodStats[5] = foodStats[5] -10;   
                                        plantStats[5] = plantStats[5] - 10;   
                                        popStats[5] = popStats[5] - 100;
                                        upgradeShip(type)
                                    } else if(ship.className === "SCOUT" && animalStats[5] >= 10 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 10){
                                        type = 1;
                                        animalStats[5] = animalStats[5] - 10;
                                        foodStats[5] = foodStats[5] - 10;   
                                        plantStats[5] = plantStats[5] - 10;   
                                        popStats[5] = popStats[5] - 10;   
                                        upgradeShip(type)
                                    }
                            } else if((e.code === "Digit2" || e.code === "Numpad2" )&& (shipTop === 280 && shipLeft === 460)){
                                if(foodStats[0] > 0){
                                    foodStats[5] = foodStats[5] + 1;
                                    foodStats[0] = foodStats[0] - 1;
                                } else {}
                                    if(ship.className === "FREIGHTER" && animalStats[5] >= 100 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 100){
                                        type = 3;
                                        animalStats[5] = animalStats[5] - 100;
                                        foodStats[5] = foodStats[5] - 10;   
                                        plantStats[5] = plantStats[5] - 10;   
                                        popStats[5] = popStats[5] - 100;
                                        upgradeShip(type)
                                    } else if(ship.className === "ABDUCTOR" && animalStats[5] >= 10 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 100){
                                        type = 2;
                                        animalStats[5] = animalStats[5] - 10;
                                        foodStats[5] = foodStats[5] -10;   
                                        plantStats[5] = plantStats[5] - 10;   
                                        popStats[5] = popStats[5] - 100;
                                        upgradeShip(type)
                                    } else if(ship.className === "SCOUT" && animalStats[5] >= 10 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 10){
                                        type = 1;
                                        animalStats[5] = animalStats[5] - 10;
                                        foodStats[5] = foodStats[5] - 10;   
                                        plantStats[5] = plantStats[5] - 10;   
                                        popStats[5] = popStats[5] - 10;   
                                        upgradeShip(type)
                                    }
                            } else if((e.code === "Digit3" || e.code === "Numpad3") && (shipTop === 280 && shipLeft === 460)){
                                if(plantStats[0] > 0){
                                    plantStats[5] = plantStats[5] + 1;
                                    plantStats[0] = plantStats[0] - 1;
                            } else {}
                                if(ship.className === "FREIGHTER" && animalStats[5] >= 100 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 100){
                                    type = 3;
                                    animalStats[5] = animalStats[5] - 100;
                                    foodStats[5] = foodStats[5] - 10;   
                                    plantStats[5] = plantStats[5] - 10;   
                                    popStats[5] = popStats[5] - 100;
                                    upgradeShip(type)
                                } else if(ship.className === "ABDUCTOR" && animalStats[5] >= 10 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 100){
                                    type = 2;
                                    animalStats[5] = animalStats[5] - 10;
                                    foodStats[5] = foodStats[5] -10;   
                                    plantStats[5] = plantStats[5] - 10;   
                                    popStats[5] = popStats[5] - 100;
                                    upgradeShip(type)
                                } else if(ship.className === "SCOUT" && animalStats[5] >= 10 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 10){
                                    type = 1;
                                    animalStats[5] = animalStats[5] - 10;
                                    foodStats[5] = foodStats[5] - 10;   
                                    plantStats[5] = plantStats[5] - 10;   
                                    popStats[5] = popStats[5] - 10;   
                                    upgradeShip(type)
                                }
                            } else if((e.code === "Digit4" || e.code === "Numpad4") && (shipTop === 280 && shipLeft === 460)){
                                if(popStats[0] > 0){
                                    popStats[5] = popStats[5] + 1;
                                    popStats[0] = popStats[0] - 1;
                                } else {}
                                    if(ship.className === "FREIGHTER" && animalStats[5] >= 100 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 100){
                                        type = 3;
                                        animalStats[5] = animalStats[5] - 100;
                                        foodStats[5] = foodStats[5] - 10;   
                                        plantStats[5] = plantStats[5] - 10;   
                                        popStats[5] = popStats[5] - 100;
                                        upgradeShip(type)
                                    } else if(ship.className === "ABDUCTOR" && animalStats[5] >= 10 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 100){
                                        type = 2;
                                        animalStats[5] = animalStats[5] - 10;
                                        foodStats[5] = foodStats[5] -10;   
                                        plantStats[5] = plantStats[5] - 10;   
                                        popStats[5] = popStats[5] - 100;
                                        upgradeShip(type)
                                    } else if(ship.className === "SCOUT" && animalStats[5] >= 10 && foodStats[5] >= 10 && plantStats[5] >= 10 && popStats[5] >= 10){
                                        type = 1;
                                        animalStats[5] = animalStats[5] - 10;
                                        foodStats[5] = foodStats[5] - 10;   
                                        plantStats[5] = plantStats[5] - 10;   
                                        popStats[5] = popStats[5] - 10;   
                                        upgradeShip(type)
                                    }
                                }
            getGrowth()
            displayMessage()
            displayPlanetName()
            getPlanet()
            displayStats()
            displayPlanetName()
}



/* ----------------------------------------------------------------------------- */
/*  Display Messages According To Ship Location                                  */
/* ----------------------------------------------------------------------------- */
HTMLElement.prototype.empty = function() {
    var that = this;
    while (that.hasChildNodes()) {
        that.removeChild(that.lastChild);
    }
};
var empty = document.getElementById('message'),
    test = document.getElementById('message');
empty.onclick = function() {
    test.empty();
}

let firstLoad = 1;
function getMessage(){
    if(firstLoad === 1){
        newMessage = "Welcome to Space Explorer 2.0.  Use the arrow keys to move your ship around. Visit planets to perform a variety of actions including picking up or dropping off vegetation, animals, population, resources, etcetera.  Collect necessary resources and income to obtain the Science Vessel, research Black Matter Amplifier, and research Wormhole Scanner in order to locate and reveal the wormhole to reach the next Galaxy.";
        firstLoad = 2;
    }else if(shipTop === 280 && shipLeft === 460){
        newMessage = `Welcome to this Galaxy's Sun.`
    }else if(shipTop === 240 && shipLeft === 300){
        newMessage = "Welcome to Velonia."
    }else if(shipTop === 120 && shipLeft === 800){
        newMessage = "Welcome to Swasili."
    }else if(shipTop === 560 && shipLeft === 900){
        newMessage = "Welcome to Kronatia."
    }else if(shipTop === 460 && shipLeft === 340){
        newMessage = "Welcome to Arnello."
    } else {
        newMessage = "Did you know, there is a hidden anomoly in this galaxy which offers you great benefits if you can locate it."
    }
    return newMessage;
}

function displayMessage(newMessage) { 
    empty.onclick();
    newMessage = getMessage();
    let messageDiv = document.getElementById("message");             
    let textnode = document.createTextNode(`${newMessage}`);         
    messageDiv.appendChild(textnode);                              
    document.getElementById("sideBar").appendChild(messageDiv);
}

displayMessage()



/* ----------------------------------------------------------------------------- */
/*  Display The Correct Stats Of Planet, Ship                                    */
/* ----------------------------------------------------------------------------- */
    HTMLElement.prototype.emptyStats = function() {
        var that = this;
        while (that.hasChildNodes()) {
            that.removeChild(that.lastChild);
        }
    };
    var emptyStats = document.getElementById('sideBar'),
        retest = document.getElementById('sideBar');
    emptyStats.onclick = function() {
        retest.emptyStats();
    }
function deleteStats(){
emptyStats.onclick();
}

function displayStats(){
    deleteStats()

    let getPlanetName = getPlanet();
    let planetID = getPlanetName.planetID;

    // Ship Stats
        // Create Stats And Message div
            let statsDiv = document.createElement("div");
            statsDiv.setAttribute("id", "stats");
            document.getElementById("sideBar").appendChild(statsDiv);

            let messageDiv = document.createElement("div");
            messageDiv.setAttribute("id", "message");
            document.getElementById("sideBar").appendChild(messageDiv);

        // Create Ship Name div
            getShip()

            let shipNameDiv = document.createElement("div");
            shipNameDiv.setAttribute("id", "shipName");
            document.getElementById("sideBar").appendChild(shipNameDiv);
            let shipTitle = document.getElementById("shipName");             
            let textnode = document.createTextNode(`${ship.className}` + " " + `${shipCoins[0]}`);         
            shipTitle.appendChild(textnode);                              
            document.getElementById("sideBar").appendChild(shipTitle);
        // Animals
            let polarBearDiv = document.createElement("div");
            polarBearDiv.setAttribute("id", "animals");
            let polarBearStatsDiv = document.getElementById("stats");                
            polarBearStatsDiv.appendChild(polarBearDiv);                              
            document.getElementById("stats").appendChild(polarBearDiv);

            let shipAnimalsDiv = document.createElement("div");
            shipAnimalsDiv.setAttribute("id", "shipAnimals");
            let shipAnimalsStatsDiv = document.getElementById("stats");                
            shipAnimalsStatsDiv.appendChild(shipAnimalsDiv);                              
            document.getElementById("stats").appendChild(shipAnimalsDiv);

            let shipsAnimals = animalStats[0];
            let animalsDiv = document.getElementById("shipAnimals");             
            let shipsAnimalsTextNode = document.createTextNode(`${shipsAnimals}` + " / " + `${shipMax[0]}`);         
            animalsDiv.appendChild(shipsAnimalsTextNode);                              
            document.getElementById("sideBar").appendChild(animalsDiv);
        // Food
            let cheesePizzaDiv = document.createElement("div");
            cheesePizzaDiv.setAttribute("id", "food");
            let cheesePizzaStatsDiv = document.getElementById("stats");              
            cheesePizzaStatsDiv.appendChild(cheesePizzaDiv);                              
            document.getElementById("stats").appendChild(cheesePizzaDiv);

            let shipFoodDiv = document.createElement("div");
            shipFoodDiv.setAttribute("id", "shipFood");
            let shipFoodStatsDiv = document.getElementById("stats");                
            shipFoodStatsDiv.appendChild(shipFoodDiv);                              
            document.getElementById("stats").appendChild(shipFoodDiv);

            let shipsFood = foodStats[0];
            let foodDiv = document.getElementById("shipFood");             
            let shipsFoodTextNode = document.createTextNode(`${shipsFood}` + " / " + `${shipMax[1]}`);         
            foodDiv.appendChild(shipsFoodTextNode);                              
            document.getElementById("sideBar").appendChild(foodDiv);
        // Plants
            let shipPlantDiv = document.createElement("div");
            shipPlantDiv.setAttribute("id", "shipPlant");
            let shipPlantStatsDiv = document.getElementById("stats");                
            shipPlantStatsDiv.appendChild(shipPlantDiv);                              
            document.getElementById("stats").appendChild(shipPlantDiv);

            let sunflowerDiv = document.createElement("div");
            sunflowerDiv.setAttribute("id", "plant");  
            let sunflowerStatsDiv = document.getElementById("stats");
            sunflowerStatsDiv.appendChild(sunflowerDiv);                              
            document.getElementById("stats").appendChild(sunflowerDiv);

            let shipsPlant = plantStats[0];
            let plantDiv = document.getElementById("shipPlant");             
            let shipsPlantTextNode = document.createTextNode(`${shipsPlant}` + " / " + `${shipMax[2]}`);         
            plantDiv.appendChild(shipsPlantTextNode);                              
            document.getElementById("sideBar").appendChild(plantDiv);
        // Population
            let populationDiv = document.createElement("div");
            populationDiv.setAttribute("id", "pop"); 
            let populationStatsDiv = document.getElementById("stats");            
            populationStatsDiv.appendChild(populationDiv);                              
            document.getElementById("stats").appendChild(populationDiv);

            let shipsPopDiv = document.createElement("div");
            shipsPopDiv.setAttribute("id", "shipPop");  
            let shipsPopStatsDiv = document.getElementById("stats");
            shipsPopStatsDiv.appendChild(shipsPopDiv);                              
            document.getElementById("stats").appendChild(shipsPopDiv);

            let shipsPop = popStats[0];
            let popDiv = document.getElementById("shipPop");             
            let shipsPopTextNode = document.createTextNode(`${shipsPop}` + " / " + `${shipMax[3]}`);         
            popDiv.appendChild(shipsPopTextNode);                              
            document.getElementById("sideBar").appendChild(popDiv);


    // Planet Stats
        //Animals
            let polarBearDivPlanet = document.createElement("div");
            polarBearDivPlanet.setAttribute("id", "animalsPlanet");
            let polarBearStatsDivPlanet = document.getElementById("stats");                
            polarBearStatsDivPlanet.appendChild(polarBearDivPlanet);                              
            document.getElementById("stats").appendChild(polarBearDivPlanet);

            let shipAnimalsDivPlanet = document.createElement("div");
            shipAnimalsDivPlanet.setAttribute("id", "shipAnimalsPlanet");
            let shipAnimalsStatsDivPlanet = document.getElementById("stats");                
            shipAnimalsStatsDivPlanet.appendChild(shipAnimalsDivPlanet);                              
            document.getElementById("stats").appendChild(shipAnimalsDivPlanet);

            let planetAnimals = animalStats[planetID];
            let animalsDivPlanet = document.getElementById("shipAnimalsPlanet");             
            let shipsAnimalsTextNodePlanet = document.createTextNode(`${planetAnimals}`);         
            animalsDivPlanet.appendChild(shipsAnimalsTextNodePlanet);                              
            document.getElementById("sideBar").appendChild(animalsDivPlanet);
        // Food
            let cheesePizzaDivPlanet = document.createElement("div");
            cheesePizzaDivPlanet.setAttribute("id", "foodPlanet");
            let cheesePizzaStatsDivPlanet = document.getElementById("stats");              
            cheesePizzaStatsDivPlanet.appendChild(cheesePizzaDivPlanet);                              
            document.getElementById("stats").appendChild(cheesePizzaDivPlanet);

            let shipFoodDivPlanet = document.createElement("div");
            shipFoodDivPlanet.setAttribute("id", "shipFoodPlanet");
            let shipFoodStatsDivPlanet = document.getElementById("stats");                
            shipFoodStatsDivPlanet.appendChild(shipFoodDivPlanet);                              
            document.getElementById("stats").appendChild(shipFoodDivPlanet);

            let planetFood = foodStats[planetID];
            let foodDivPlanet = document.getElementById("shipFoodPlanet");             
            let shipsFoodTextNodePlanet = document.createTextNode(`${planetFood}`);         
            foodDivPlanet.appendChild(shipsFoodTextNodePlanet);                              
            document.getElementById("sideBar").appendChild(foodDivPlanet);
        // Plants
            let shipPlantDivPlanet = document.createElement("div");
            shipPlantDivPlanet.setAttribute("id", "shipPlantPlanet");
            let shipPlantStatsDivPlanet = document.getElementById("stats");                
            shipPlantStatsDivPlanet.appendChild(shipPlantDivPlanet);                              
            document.getElementById("stats").appendChild(shipPlantDivPlanet);

            let sunflowerDivPlanet = document.createElement("div");
            sunflowerDivPlanet.setAttribute("id", "plantPlanet");  
            let sunflowerStatsDivPlanet = document.getElementById("stats");
            sunflowerStatsDivPlanet.appendChild(sunflowerDivPlanet);                              
            document.getElementById("stats").appendChild(sunflowerDivPlanet);

            let planetPlant = plantStats[planetID];
            let Planet = document.getElementById("shipPlantPlanet");             
            let shipsPlantTextNodePlanet = document.createTextNode(`${planetPlant}`);         
            Planet.appendChild(shipsPlantTextNodePlanet);                              
            document.getElementById("sideBar").appendChild(Planet);
        // Population
            let populationDivPlanet = document.createElement("div");
            populationDivPlanet.setAttribute("id", "popPlanet"); 
            let populationStatsDivPlanet = document.getElementById("stats");            
            populationStatsDivPlanet.appendChild(populationDivPlanet);                              
            document.getElementById("stats").appendChild(populationDivPlanet);

            let shipsPopDivPlanet = document.createElement("div");
            shipsPopDivPlanet.setAttribute("id", "shipPopPlanet");  
            let shipsPopStatsDivPlanet = document.getElementById("stats");
            shipsPopStatsDivPlanet.appendChild(shipsPopDivPlanet);                              
            document.getElementById("stats").appendChild(shipsPopDivPlanet);

            let planetPop = popStats[planetID];
            let popDivPlanet = document.getElementById("shipPopPlanet");             
            let shipsPopTextNodePlanet = document.createTextNode(`${planetPop}`);         
            popDivPlanet.appendChild(shipsPopTextNodePlanet);                              
            document.getElementById("sideBar").appendChild(popDivPlanet);

        // Create Planet Name Div
            let createAboutPlanetDiv = document.createElement("div");
            createAboutPlanetDiv.setAttribute("id", "aboutPlanet");
            let createPlanetNameDiv = document.createElement("div");
            createPlanetNameDiv.setAttribute("id", "planetName");  
            let getStatsDiv = document.getElementById("stats");
            getStatsDiv.appendChild(createAboutPlanetDiv);                         
            document.getElementById("aboutPlanet").appendChild(createPlanetNameDiv);
}

displayStats()



/* ----------------------------------------------------------------------------- */
/*  Display Planet Name Based On Planet Visited                                  */
/* ----------------------------------------------------------------------------- */
HTMLElement.prototype.emptyPlanetName = function() {
    var that = this;
    while (that.hasChildNodes()) {
        that.removeChild(that.lastChild);
    }
};
var emptyPlanetName = document.getElementById('aboutPlanet'),
    retester = document.getElementById('aboutPlanet');
emptyPlanetName.onclick = function() {
    retester.emptyPlanetName();
}
function deletePlanetName(){
emptyPlanetName.onclick();
}

function getPlanet(){
    let planet = 6;
    let planetName = "EmptySpace";
    if(shipTop === 280 && shipLeft === 460){
        planet = 5;
        planetName = "Sun";
    }else if(shipTop === 240 && shipLeft === 300){
        planet = 1;
        planetName = "Velonia";
    }else if(shipTop === 120 && shipLeft === 800){
        planet = 3;
        planetName = "Swasili";
    }else if(shipTop === 560 && shipLeft === 900){
        planet = 4;
        planetName = "Kronatia";
    }else if(shipTop === 460 && shipLeft === 340){
        planet = 2;
        planetName = "Arnello";
    } else {
        planetName = "Empty Space";
        planet = 6;
    }
    
    return {
        planetID: planet,
        planetName: planetName,
    };

}

function displayPlanetName() { 
    deletePlanetName();

    let getPlanetName = getPlanet();
    let planetName = getPlanetName.planetName;

    let createAboutPlanetDiv = document.createElement("div");
    createAboutPlanetDiv.setAttribute("id", "aboutPlanet");
    let createPlanetNameDiv = document.createElement("div");
    createPlanetNameDiv.setAttribute("id", "planetName");  
    let getAboutPlanetDiv = document.getElementById("aboutPlanet");
    let getStatsDiv = document.getElementById("stats");
    getStatsDiv.appendChild(createAboutPlanetDiv);
    let planetNametextnode = document.createTextNode(`${planetName}`);         
    createPlanetNameDiv.appendChild(planetNametextnode);                              
    document.getElementById("aboutPlanet").appendChild(createPlanetNameDiv);
}

displayPlanetName()

/* ----------------------------------------------------------------------------- */
/*  Random Reward Function                                                       */
/* ----------------------------------------------------------------------------- */

function placeReward(){
        let newCoinLeft = Math.floor(Math.random() * 50);
        let newCoinTop = Math.floor(Math.random() * 32);

        let coinTop = newCoinTop * 20;
        let coinLeft = newCoinLeft * 20;
    
        let coin = document.createElement("div");
        coin.setAttribute("id","coin");
        let space = document.getElementById("playarea");  
        space.appendChild(coin);                                       
        document.getElementById("playarea").appendChild(coin);
    
        document.getElementById("coin").style.top = `${coinTop}px`;
        document.getElementById("coin").style.left = `${coinLeft}px`;
}

placeReward()

function getReward(){
    if(document.getElementById("ship").style.top === document.getElementById("coin").style.top && document.getElementById("ship").style.left === document.getElementById("coin").style.left){
        let newCoinLeft = Math.floor(Math.random() * 50);
        let newCoinTop = Math.floor(Math.random() * 32);

        let coinTop = newCoinTop * 20;
        let coinLeft = newCoinLeft * 20;

        document.getElementById("coin").style.top = `${coinTop}px`;
        document.getElementById("coin").style.left = `${coinLeft}px`;

        let coinedDiv = document.createElement("div");
        coinedDiv.setAttribute("class", "coins");
        document.getElementById("collectedCoins").appendChild(coinedDiv);
    }
}
