import Sum from "./Sum"


describe("sum function test",()=>{
    test("object check",()=>{
        let data=Sum(1,2)
        expect(data).toEqual({name:"james"})
  })
})