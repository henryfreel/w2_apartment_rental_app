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