import assert from "assert";
import { getAge, getAgeGroup, getAgeForPerson, divideIt } from "./index.mjs";

describe("age calculator", () => {
  it("Someone born in 1972 is 50 2022", () => {
    //act
    const result = getAge(1972, 2022);

    //assert
    assert.equal(result, 50);
  });
  it("someone born 2021 is 1 2022", () => {
    // arrange
    // act
    const result = getAge(2021, 2022);

    // assert
    assert.equal(result, 1);
  });
});

describe("Age classifier", () => {
  it("0-3 years old should be a toddler", () => {
    //arrange
    //act
    const result = getAgeGroup(2);

    //assert
    assert.equal(result, "toddler");
  });
  it("4-12 years old should be a kid", () => {
    // arrange
    // act
    const result = getAgeGroup(4);

    // assert
    assert.equal(result, "kid");
  });
  it("13-19 years old should be a teenager", () => {
    const result = getAgeGroup(14);
    assert.equal(result, "teenager");
  });
  it("20-39 years old should be a adult", () => {
    const result = getAgeGroup(26);
    assert.equal(result, "adult");
  });
  it("above 39 years old ... you are just old", () => {
    const result = getAgeGroup(51);
    assert.equal(result, "old");
  });
  it("calling getAge for each age", () => {
    // arrange
    const currentYear = 2022;
    const birthYears = [1972, 2022, 1980];

    // act
    for (let i = 0; i < birthYears.length; i++) {
      const age = getAge(birthYears[i], currentYear);

      console.log(
        `If you born in ${birthYears[i]} you are ${age} in ${currentYear}`
      );
    }
  });

  it("get age for person", () => {
    // arrange
    const currentYear = 2022;
    const person = {
      name: "Marcus",
      birthYear: 1972,
      isTeacher: true,
    };

    // act
    const age = getAgeForPerson(person, currentYear);

    // assert
    assert.equal(age, 50);
  });
});

describe("constants and variables", () => {
  it.skip("you cant change const", () => {
    const aNumber = 1;
    aNumber = 2;
  });
  it("you can change let", () => {
    let aNumber = 1;
    aNumber = 2;
    assert.equal(aNumber, 2);
  });
  it("uninitialized variables are undefined", () => {
    // act
    let aNumber;

    // assert
    assert.equal("undefined", typeof aNumber);
    assert.equal(undefined, aNumber);
  });
  it("null should be used for not set", () => {
    // arrange
    // declaring a dummy function
    const peekIntoTheBox = () => {
      return false;
    };

    // act
    let isCatAlive = null;

    // assert
    assert.equal(null, isCatAlive);
    isCatAlive = peekIntoTheBox();
  });
  it("array keep values", () => {
    // arrange
    const array1 = [1, 2, 3, 4];
    const array2 = ["Marcus", "Eliza", "Obaid"];
    const array3 = ["Marcus", 49, true];
  });

  it("should divide two numbers", () => {
    try {
      // act
      const result = divideIt(4, 2);
    } catch (error) {
      // assert
      assert.notEqual(error, undefined);
      assert.equal(
        error.message,
        "Please... No division by zero... I cannot cope with that. /Your computer"
      );
    }
  });
});
