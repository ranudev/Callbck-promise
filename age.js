const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

function ageInDays(person) {
  // Destructure the input object to get the first name, last name, and age
  const { firstName, lastName, age } = person;

  // Concatenate first and last names to form fullName
  const fullName = `${firstName} ${lastName}`;

  // Calculate age in days
  const ageInDays = age * 365;

  // Return a callback function that logs the message
  return function () {
    console.log(
      `The person's full name is ${fullName} and their age in days is ${ageInDays}.`
    );
  };
}

const logMessage = ageInDays(person);
logMessage();
