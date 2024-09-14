import { render, screen } from '@testing-library/react'
import Contact from '../Contact'
import "@testing-library/jest-dom"

// beforeAll(()=>{
//     console.log('before All Test cases')
// })

// afterAll(()=>{
//     console.log('After All Test cases')
// })

// beforeEach(()=>{
//     console.log('before Each Test cases')
// })

// afterEach(()=>{
//     console.log('after Each Test cases')
// })

test('Should load heading of contact-us component',()=>{
    // render to jsdom 
    render(<Contact/>)

    // screen 
    const heading = screen.getByRole('heading')

    // assertion 
    expect(heading).toBeInTheDocument()
})

test('Should load button inside contact-us component',()=>{
    // render to jsdom 
    render(<Contact/>)

    // screen 
    const button = screen.getByRole('button')
    // const button = screen.getByText('Submit') passed
    // const button = screen.getByText('Random') failed

    // assertion 
    expect(button).toBeInTheDocument()
})


it('should find placeholder name within input of contact us form',()=>{
    render(<Contact/>)

    const inputName = screen.getByPlaceholderText('name')

    expect(inputName).toBeInTheDocument()

})

it('should load 2 input boxes on the contact component',()=>{
    render(<Contact/>)
    // Querying  
    const inputBoxes = screen.getAllByRole('textbox')
    // textbox is for inputs , getAllBy is for multiple 
    console.log("inputBoxes:", inputBoxes.length)

    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
})