const names = ['Addy','Bobby','Carl','Denver','Ismail','Jack','Isaac', 'John', 'Jack', 'Ivy', 'Jasmine'];

names.forEach(name => {
  if (name.startsWith('I') || name.startsWith('J')) {
    console.log(`Goodbye, ${name}!`);
  } else {
    console.log(`Good morning, ${name}!`);
  }
});
