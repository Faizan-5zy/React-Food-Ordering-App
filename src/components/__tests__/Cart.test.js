import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_CART_DATA from "../../components/mocks/cartMock.json";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import ItemList from "../ItemList";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_CART_DATA);
    },
  });
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <ItemList />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Recommended - (11)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  expect(screen.getByText("🛒 - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("🛒 - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("🛒 - (2 items)")).toBeInTheDocument();
  
  //   cart items must have two items 
  
  expect(screen.getAllByTestId('foodItems').length).toBe(13);  //'foodItems' :: 11 from restaurant menu 2 are from cart so 13


//   clear cart button test 

  const clearCartBtn = screen.getByRole('button',{name:'Clear Cart'}) 

  fireEvent.click(clearCartBtn)

  expect(screen.getAllByTestId('foodItems').length).toBe(11);
  
  expect(screen.getByText('Cart is Empty'))

});
