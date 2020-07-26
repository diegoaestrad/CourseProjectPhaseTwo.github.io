navigator.getBattery().then(function (battery) {
  let prueba = document.getElementsByClassName("textToShow");
  let isconected = document.createTextNode(battery.charging ? "Yes" : "No");
  //let usertext = document.createTextNode(isconected);
  let paragraph = document.getElementById("textToShow");
  let battlevel = document.getElementById("batterylevel");


  //paragraph.textContent += "This just got added";

  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', function () {
    updateChargeInfo();
  });

  function updateChargeInfo() {
    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
    //let usertext = ("Battery charging? " + (battery.charging ? "Yes" : "No"));
    paragraph.textContent = ("Is The Battery Charger Conected? " + (battery.charging ? "Yes" : "No"));
    battlevel.textContent = "Battery level: " + Math.floor(battery.level * 100) + "%";

    //prueba.appendChild(usertext);
  }

  battery.addEventListener('levelchange', function () {
    updateLevelInfo();
  });

  function updateLevelInfo() {
    console.log("Battery level: " +
      battery.level * 100 + "%");

  }

  battery.addEventListener('chargingtimechange', function () {
    updateChargingInfo();
  });

  function updateChargingInfo() {
    console.log("Battery charging time: " +
      battery.chargingTime + " seconds");
  }

  battery.addEventListener('dischargingtimechange', function () {
    updateDischargingInfo();
  });

  function updateDischargingInfo() {
    console.log("Battery discharging time: " +
      battery.dischargingTime + " seconds");
  }

});