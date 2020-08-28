class Employee {
  constructor (name, type) {
    this.validateType(type);
    this.name = name;
    this.type = type;
  }

  validateType (type) {
    if (![
      'engineer',
      'manager',
      'salesman',
    ].includes(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  toString () {
    return `${this.name} (${this.type})`;
  }
}

module.exports = {
  Employee
};

