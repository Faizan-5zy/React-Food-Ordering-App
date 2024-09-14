import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import '@testing-library/jest-dom'
import MOCK_DATA from '../../components/mocks/resCardMock.json'


it("Should Render the Restaurant card with props passed",()=>{
    render(<RestaurantCard resData={MOCK_DATA} />) //passing props in unit testing and mock data
    const resCardName = screen.getByText('Grameen Kulfi')
    expect(resCardName).toBeInTheDocument()
})


// homework

// it ('should render restaurantCard component with promoted label', ()=>{
//     render(<RestaurantCard />)
//     const 

//     expect()
// })