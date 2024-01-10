const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const tutorialsTitled = tutorials.map(tutorial => {
    tutorial = tutorial[0].toUpperCase() + tutorial.substring(1);
    for (let i = 1; i < tutorial.length; i++) {//i think maybe you can use "for of" if you specify arraylike or something
      if (tutorial[i-1] === ' ' && i != tutorial.length - 1) {
        //console.log(tutorial.substring(0,i) + tutorial[i].toUpperCase() + tutorial.substring(i + 1))
        tutorial = tutorial.substring(0,i) + tutorial[i].toUpperCase() + tutorial.substring(i + 1);
      }
    }
    return tutorial;
  })
  return tutorialsTitled;
}

console.log(titleCased())