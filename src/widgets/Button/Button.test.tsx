import { Button, ThemeButon } from "./Button"
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'


describe('Button', ()=>{

    test("testButton1", ()=>{
        
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeVisible
        expect(screen.getByText('TEST')).toBeInTheDocument()

    })
    test("testButtonClass", ()=>{
        
      render(<Button className="clearbtn">TEST</Button>)
      expect(screen.getByText('TEST')).toHaveClass('clearbtn')
      screen.debug()
  })



})