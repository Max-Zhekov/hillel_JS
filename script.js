const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

const getAllSallary = (obj) => {
  let allSallary = 0;

  if (Array.isArray(obj)) {
    obj.forEach((element) => {
      allSallary += getAllSallary(element);
    });
  } else {
    if (obj.hasOwnProperty("salary")) {
      allSallary += obj.salary;
    } else {
      for (const key in obj) {
        allSallary += getAllSallary(obj[key]);
      }
    }
  }
  return allSallary;
};

console.log(getAllSallary(company));
