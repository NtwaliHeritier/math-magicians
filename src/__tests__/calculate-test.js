import calculate from '../logic/calculate'

let data = {total: '0', next: '0', operation: ''}

describe("Calculator", ()=>{
  it("tests AC",()=>{
    expect(calculate(data, "AC")).toEqual({total: '0', next: '0', operation: ''});
  })

  it("tests .", ()=>{
    expect(calculate(data, ".")).toEqual({total: '0.', next: '0', operation: ''})
  })
})