import {render,screen} from '@testing-library/react'
import Contact from '../Contact'
import React from 'react';
import "@testing-library/jest-dom"


 describe("contact Us test Cases",()=>{
test("Should load the contactUs page",()=>{
    render(<Contact />)
    const heading=screen.getByRole("heading");//  
    expect(heading).toBeInTheDocument();
})

test("Should load the button in concat page",()=>{
    render(<Contact />)
    const button=screen.getByRole("button");// 
    const text=screen.getByText("Send Message") 
    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
})

it("should load 2 or more contact component",()=>{
    render(<Contact />)
    const labels=screen.getAllByRole("paragraph");
    expect(labels.length).toBe(2);
});

})