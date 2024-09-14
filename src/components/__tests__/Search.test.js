import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Body from "../Body"
// import { act } from "react-dom/test-utils"
import { act } from "react"
// mock fetch 
import MOCK_DATA from '../../components/mocks/mockResListData.json'
import RestaurantCard from "../RestaurantCard"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        } 
    })
})


it('Should render the body component with search button', async ()=>{
    await act(async ()=>
        render(
        <BrowserRouter>
        <Body/>
        <RestaurantCard />
        </BrowserRouter>
        )
    )

    const searchButton = screen.getByRole('button',{name:'Search'})

    const searchInput = screen.getByTestId('searchInput')

    fireEvent.change(searchInput,{target:{value:'burger'}})
    
    fireEvent.click(searchButton)

    const cards = screen.getAllByTestId('resCard')
    // console.log(cards)
    
    expect(cards.length).toBe(1)
    // expect(searchButton).toBeInTheDocument()
})



it('Should filter Top Rated Restaurant',async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
                <Body/>
                <RestaurantCard />
            </BrowserRouter>
        )
    ) 

    const topRatedButton = screen.getByRole('button',{name:'Top Rated Restaurants'})
  
    fireEvent.click(topRatedButton)

    const rescards = screen.getAllByTestId('resCard')

    expect(rescards.length).toBe(1)
    // expect(topRatedButton).toBeInTheDocument()
})