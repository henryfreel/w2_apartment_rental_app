
// SETUP MANAGER
function Manager(name, contact) {
  // set name and contact
  this.name = name;
  this.contact = contact;
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property to properties array
  this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove property
  var _index = this.properties.indexOf(property)
  this.properties.splice(_index, 1);
};


// SETUP TENANT
function Tenant(name, contact) {
  // set name and contact
  this.name = name;
  this.contact = contact;
  this.references = [];
}

Tenant.prototype.addReference = function(reference){
  // add reference to references array
  this.references.push(reference);
};

// SETUP PROPERTY
function Property(address) {
  // set address
  this.address = address;
  this.units = [];
}

Property.prototype.setManager = function(manager) {
  // set property manager
  this.manager = manager;
};

Property.prototype.getManager = function() {
  // return property manager
  return this.manager;
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant to unit, but first check to make sure
  // property has a manager and tenant has 2 references
  if (this.manager) {

    if (tenant.references.length > 1) {
	
	    unit.tenant = tenant;

    } else {
        console.log("you suck, tenant was not added because not enough references");
    }

  } else {
   console.log("you suck, there is no manager")   
  }

};

Property.prototype.addUnit = function(unit) {
  // add tenant to unit, but first check to make sure
  // property has a manager and tenant has 2 references
  this.units.push(unit);	
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
  this.unit.tenant = null;
};

Property.prototype.availableUnits = function(){
  // return num of units available
  return this.units.length;
};

Property.prototype.rentedUnits = function(){
  // return num of rented units
};

// SETUP UNIT
function Unit (number, property, sqft, rent) {
  // set params above using `this`
  this.number = number;
  this.property = property;
  this.sqft = sqft;
  this.rent = rent;
  this.tenant = null;
}

Unit.prototype.available = function() {
  // check for tenant
  if (this.tenant === null) {
      return null;
  }
};


// define manager

var john = new Manager("John", "123-4567");

console.log("-> -" + john.name + "- is a manager")

// -> define property

var bushStreet = new Property("225 Bush");
bushStreet.setManager(john)

// -> add property

john.addProperty("First House");
john.removeProperty("First House")
john.addProperty(bushStreet)

console.log("-> He has -" + john.properties.length + "- properties")

console.log("-> The property -" + bushStreet.address + "-'s manager is -" + bushStreet.getManager().name + "-")

// define units

var unit1 = new Unit(1, bushStreet, 1000, 1100);
// var unit2 = new Unit(2, "1", 2000, 1200);
// var unit2 = new Unit(2, "1", 2000, 1300);

// add unit

bushStreet.addUnit(unit1);

console.log("-> -" + bushStreet.address + "- has -" + bushStreet.units.length + "- units and it's number is -" + bushStreet.units[0].number + "-")

// define tenant

var jane = new Tenant("jane", "123-4567");
jane.addReference("Henry");
jane.addReference("Sam");

console.log("-> jane has -" + jane.references.length + "- references");

// add tenant

bushStreet.addTenant(unit1, jane);
console.log("-> the tenant is -" + unit1.tenant.name + "-");

// console.log("-> john has -" + john.properties.length + "- property. First one is called -" + john.properties[0].address + "- and it has -" + john.properties[0].units);

