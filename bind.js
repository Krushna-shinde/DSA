const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  const logFullName = function() {
    console.log(this.getFullName());
  };
  
  // Bind logFullName function to the person object
  const boundLogFullName = logFullName.bind(person);
  
  // Call the bound function
  boundLogFullName(); // Output: John Doe
  