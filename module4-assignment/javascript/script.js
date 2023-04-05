const names = ['Adam','Bobby','Carl','jasica', 'John', 'jack', 'Ivy', 'Jasmine'];

names.forEach(name => {
  if (name.startsWith('j') || name.startsWith('J')) {
    console.log(`Goodbye, ${name}!`);
  } else {
    console.log(`Good morning, ${name}!`);
  }
});
