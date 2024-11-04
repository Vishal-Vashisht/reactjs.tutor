import { useState, useCallback, useEffect, useRef } from "react"



function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // Generate tha password
  function passGenertor() {
    let pass = ""
    let str = "ABCDEFGHIJabcdefghij"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@!#$"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    console.log("This is password : -", pass)
    setPassword(pass)
  }

  // dependencies for usecallback
  const passwordGenerator = useCallback(passGenertor, 
    [length, numberAllowed, charAllowed, setPassword])

  // When page reload or values passed in array changed this will run
  useEffect(() => { passwordGenerator() }, [length, numberAllowed, passwordGenerator, charAllowed])

  // Useref hook: give refrence to a value
  const passwordRef = useRef(null)
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // Correctly set the selection range
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password).then(() => {
      console.log("Password copied to clipboard!");
    }).catch(err => {
      console.error("Could not copy password: ", err);
    });
  }, [password]);
  

 
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-black">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 bg-gray-700 mb-3">
          <h1 className="text-white text-center mt-3 mb-2">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button className="outline-none bg-blue-700 text-white 
                px-3 py-0.5 shrink-0"
                onClick={copyPasswordToClipboard}>
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2 pb-2">
            <div className="flex items-center gap-x-1">
              <input type="range"
                id="rangeInput"
                min={8}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {setLength(e.target.value)}}/>
              <label htmlFor="rangeInput">Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                name="" id="numberInput"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed(prev => !prev)
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                name="" id="charInput"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed(prev => !prev)
                }}
              />
              <label htmlFor="charInput">Chars</label>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
