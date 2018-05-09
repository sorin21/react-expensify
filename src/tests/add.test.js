const add =(a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);

  // if(result !== 7) {
  //   throw new Error(`You added 4 and 3. The result should be 7, but was ${result}`);
  // }

  expect(result).toBe(7);
});

test('should generate greeting ', () => {
  const greeting = generateGreeting('Daniel');
  expect(greeting).toBe('Hello Daniel!');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});