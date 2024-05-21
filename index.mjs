export const getAge = (birthYear, currentYear) => currentYear - birthYear;

export const getAgeGroup = (age) => {
    if(age < 4 ) return "toddler"
    if(age < 13) return "kid"
    if(age < 20) return "teenager";
    if(age < 39) return "adult";
  
    return "old";
};

export const getAgeForPerson = (person, currentYear) => {
    return currentYear - person.birthYear;
  };

  export const divideIt = (a,b) => {
      if(b === 0){
          throw new Error(
              "No divisions with 0"
            )
        }
        return a / b;
  }