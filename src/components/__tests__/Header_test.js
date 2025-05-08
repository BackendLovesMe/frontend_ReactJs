import { render } from "@testing-library/react"
import Header from '../Header'
import { Provider } from "react-redux"
import appStore from '../../Utils/AppStore'
import { BrowserRouter } from "react-router-dom"

it("should load Header Component with login button ",()=>{
    render(<BrowserRouter><Provider store={appStore}> <Header /> </Provider> </BrowserRouter>
    );
    const loginButton=screen.getByText("login");
    expect(loginButton).toBeInTheDocument();
})