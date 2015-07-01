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

var john = new Manager("John Doe", "123-4567");

john.addProperty("First House");
john.addProperty("Second House");
john.removeProperty("First House");

john.properties;