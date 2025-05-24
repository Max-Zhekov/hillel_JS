function Student(name, surname, birthYear, grades) {
  this.name = name;
  this.surname = surname;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(25);

  this.getAge = () => {
    return new Date().getFullYear() - this.birthYear;
  };

  this.getAverageGrade = () => {
    if (this.grades.length === 0)
      return `${this.name} ${this.surname} doesn't have any grade`;

    const sum = this.grades.reduce((acc, grade) => {
      return acc + grade;
    }, 0);
    return sum / this.grades.length;
  };

  this.present = () => {
    const index = this.attendance.findIndex((element) => element === undefined);
    if (index === -1) return;
    this.attendance[index] = true;
  };

  this.absent = () => {
    const index = this.attendance.findIndex((element) => element === undefined);
    if (index === -1) return;
    this.attendance[index] = false;
  };

  this.summary = () => {
    const filledAttendance = this.attendance.filter(
      (item) => item !== undefined
    );
    if (filledAttendance.length === 0) return "Немає даних про відвідування";

    const sumOfAttendance = filledAttendance.reduce(
      (acc, curr) => (curr ? acc + 1 : acc),
      0
    );

    const attendancePercentage = sumOfAttendance / filledAttendance.length;
    const averageGrade = this.getAverageGrade();

    if (typeof averageGrade !== "number") return averageGrade;

    if (averageGrade >= 90 && attendancePercentage >= 0.9) {
      return "Молодець";
    } else if (averageGrade >= 90 || attendancePercentage >= 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска";
    }
  };
}

const student1 = new Student("Anna", "Petrenko", 2006, [95, 100, 92, 96]);
for (let i = 0; i < 23; i++) student1.present();
for (let i = 0; i < 2; i++) student1.absent();

console.log("Anna summary:", student1.summary());

const student2 = new Student("Oleh", "Koval", 2005, [95, 90, 97, 93]);
for (let i = 0; i < 10; i++) student2.present();
for (let i = 0; i < 15; i++) student2.absent();

console.log("Oleh summary:", student2.summary());

const student3 = new Student("Ihor", "Danylko", 2004, [60, 50, 40]);
for (let i = 0; i < 5; i++) student3.present();
for (let i = 0; i < 20; i++) student3.absent();

console.log("Ihor summary:", student3.summary());
