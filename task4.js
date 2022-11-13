function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  } // метод, который определяет прибор как включенный в розетку 
  
  ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  ElectricalAppliance.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
  }
  
  
  const lampa = new ElectricalAppliance('lampa', 10);
  const pc = new ElectricalAppliance('pc', 500);
  
  console.log(lampa.getPowerUsed() + pc.getPowerUsed());
  
  lampa.plugIn();
  console.log(lampa.getPowerUsed() + pc.getPowerUsed());
  
  pc.plugIn();
  console.log(lampa.getPowerUsed() + pc.getPowerUsed());