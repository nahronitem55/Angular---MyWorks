class CookPerson {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  save() {
    console.log("CookPerson saved." + this.name);
  }
}

const cookNewPerson = new CookPerson("Orhan", "METIN");

cookNewPerson.save();
console.log(cookNewPerson.name);
