const index = require("./index")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new index.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleNewGame", () => {
    let inst

    beforeEach(() => {
        inst = new index.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleNewGame()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleClickedImg", () => {
    let inst

    beforeEach(() => {
        inst = new index.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClickedImg({ target: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClickedImg({ target: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClickedImg(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
