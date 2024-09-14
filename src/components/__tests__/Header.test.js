import { screen , render, fireEvent } from '@testing-library/react'
import Header from '../Header'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import appStore from  '../../../utils/appStore'

it('Should load Header component with login button',()=>{
    render(<BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>)

// good way 
    const loginButton = screen.getByRole('button')
                    // or 
    
// not good way     
    // const loginButton = screen.getByText('Login')

    expect(loginButton).toBeInTheDocument()
})


it('Should load header component with cart items 0',()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
)


// const cartItems=screen.getByText('🛒 - (0 items)')
// using regex inside test to find cart item irrespective of number 
const cartItems=screen.getByText(/🛒/)

expect(cartItems).toBeInTheDocument()

})


it('Should load header component with Login button when it is clicked it must Logout',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )


    const logInButton = screen.getByRole('button',{name:'Login'})
    
    // simulate the click event  
    fireEvent.click(logInButton)
    
    const logOutButton = screen.getByRole('button',{name:'Logout'})

    expect(logOutButton).toBeInTheDocument()

})


