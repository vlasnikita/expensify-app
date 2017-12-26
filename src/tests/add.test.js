

const add = (a, b) => a + b
const generateGreeting = (name = 'Anon') => `Hello ${name}`

test('Should add 2 numbers', ()=> {
    const result = add(3, 4)
    expect(result).toBe(7)
})

test('Should greet argument', ()=> {
    const result = generateGreeting('Nick')
    expect(result).toBe('Hello Nick')
})

test('Should greet nobody', ()=> {
    const result = generateGreeting()
    expect(result).toBe('Hello Anon')
})