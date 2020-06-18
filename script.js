// Write your JavaScript code here!

window.addEventListener("load", function () {

   fetch("https:handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
        const missionTarget = document.getElementById("missionTarget");
        let index = 0; 
        missionTarget.addEventListener("click", function() {
            missionTarget.innerHTML = 
            `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">`
             
             index = (index + 1) % json.length; 

        });//event listener
        
      });//response

   });//fetch
    
   let list = document.getElementById("faultyItems");
         list.style.visibility = "hidden";
      
   let form = document.getElementById("formSubmit");
      form.addEventListener("click", function(event){
      event.preventDefault();

      let fuel = document.getElementById("fuelStatus");
      let cargo = document.getElementById("cargoStatus");
      let pilotStatus = document.getElementById("pilotStatus"); 
      let copilotStatus = document.getElementById("copilotStatus");

         let pilotStatusInput = document.querySelector("input[name=pilotName]");
            let pilotName = pilotStatusInput.value
            let pilotTest = Number(pilotName);

         let copilotStatusInput = document.querySelector("input[name=copilotName]");
            let copilotName = copilotStatusInput.value
            let copilotTest = Number(copilotName);

         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
            let fuelStatusNum = Number(fuelLevelInput.value);

         let cargoMassInput = document.querySelector("input[name=cargoMass]");
            let cargoStatusNum = Number(cargoMassInput.value);

         if(pilotName === "" || copilotStatusInput === "" || fuelStatusNum ==="" || cargoMassInput === "") {
            alert("Please enter valid information!");
            
         } else if (!isNaN(pilotTest) || !isNaN(copilotTest) || isNaN(fuelStatusNum) || isNaN(cargoStatusNum)) {
            alert("Please enter valid information!")
         
            } else {
               list.style.visibility = "visible";
               pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch.`;
               copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch.`;

               let launchStatus =  document.getElementById("launchStatus"); 
               if (fuelStatusNum < 10000 && cargoStatusNum <= 10000) {
                  cargo.innerHTML = "Cargo mass low enough for launch!";
                  fuel.innerHTML = "Fuel level is too low for launch!";  
                  launchStatus.innerHTML = "Shuttle NOT ready for launch!";
                  document.getElementById("launchStatus").style.color="red";

               } else if (fuelStatusNum >= 10000 && cargoStatusNum > 10000) {
                  cargo.innerHTML = "Cargo mass too heavy for launch!"; 
                  fuel.innerHTML = "Fuel level high enough for launch!";
                  launchStatus.innerHTML = "Shuttle NOT ready for launch!";
                  document.getElementById("launchStatus").style.color="red";
               
               } else if (fuelStatusNum < 10000 && cargoStatusNum > 10000) {
                  fuel.innerHTML = "Fuel level is too low for launch!";
                  cargo.innerHTML = "Cargo mass too heavy for launch!"; 
                  launchStatus.innerHTML = "Shuttle NOT ready for launch!";
                  document.getElementById("launchStatus").style.color="red";
               
               } else {
                  cargo.innerHTML = "Cargo mass low enough for launch!"; 
                  fuel.innerHTML = "Fuel level high enough for launch!";
                  launchStatus.innerHTML = "Shuttle is ready for launch!";
                  document.getElementById("launchStatus").style.color="green";
               }

            } // first else
     
   }); //form submission - event listener

}); //window load function