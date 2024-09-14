import {sum} from '../sum'

test('sum function should calculate sum of two numbers', ()=>{
    
    const result = sum(3,4)

    // assertion 

    // pass 
    expect(result).toBe(7)
    // fail
    // expect(result).toBe(5)
})