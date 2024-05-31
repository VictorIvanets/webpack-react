import className from "./classNames"
// const className = require('./publicApi.ts');



describe('classNames', ()=>{

    test("test", ()=>{
        
        expect(className('classess', {},[])).toBe('classess')

    })



})