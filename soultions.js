const func = (x) => {
  for (let i = 0; i < 3; i++) {
    // petla, ktora sprawia, ze sa 3 powtorzenia
    console.log(x);
  }
};
func(`cat`);

const func2 = (x) => {
  console.log(x);
};

for (let i = 0; i < 3; i++) {
  func2(`dog`);
}

console.log("------------------------------");

const func3 = (x) => {
  console.log(x.repeat(5));
};
func3(`Cat`);

console.log("-------------------------------");

const dog = (x, y) => {
  return y.repeat(x);
};
console.log(dog(4, `Woah`));

console.log("---------------");

const parameters = (array) => {
  return Math.max(...array);
};
console.log(parameters([1, 6, 83, 91, 0, -4, 1337, 5]));

const divisableBy10 = (a) => {
  if (a % 10 === 0) {
    console.log("Even 10");
  }
};
divisableBy10(33);

for (let i = 0; i < 125; i++) {
  divisableBy10(i);
}

const largestOne = (a, b, c, d, e) => {
  return Math.max(a, b, c, d, e);
};
console.log(largestOne(1, 2, 3, 4, 2));

const takeOne = (a) => {
  return typeof a === `string`;
};

console.log(takeOne(`panimaju`));

const takeTwo = (a, b) => {
  return typeof a === `string` && typeof b === `string`;
};

console.log(takeTwo(`panimaju`, `lalala`));

console.log("---------------------");

const returnFunc = (a) => {
  return a.split(` `)[0];
};
console.log(returnFunc(`May force be with you`));

const repeater = (a) => {
  const stringArray = a.split(` `);
  const finalArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    finalArray.push(stringArray[i].repeat(stringArray.length));
  }
  return finalArray.join(" ");
};
console.log(repeater("W O A"));

const singleLine = (a) => a[0];
console.log(singleLine(`Mania`));

console.log("--------------------------------");

const firstLetters = (a) => {
  const newString = a.split(` `);
  const finalArray = [];
  for (let i = 0; i < newString.length; i++) {
    finalArray.push(newString[i][0]);
  }
  return finalArray.join(``);
};
console.log(firstLetters(`pitu pitu iza`));

const arrayIf = (a) => {
  if (typeof a !== `string`) {
    return null;
  } else {
    return a.split(``);
  }
};
console.log(arrayIf(`5`));

//Bonus

const foo = (a) => a.includes(`o`);
console.log(foo(`bee`));

const bar = (a) => a.replace(a.slice(0, 2), `Cat`);
console.log(bar(`International Space Station`));
