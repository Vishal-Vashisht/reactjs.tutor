import { useState } from "react"


function App() {

  const [chooseColor, setColor] = useState("olive")

  const colorToSelect = ["red", "green", "yellow", "blue", "pink", "orange"]
  return (
      <div className="w-full h-screen"
      style={{backgroundColor: chooseColor}}>

        <div className="fixed flex flex-wrap justify-center
        bottom-12 inset-x-0 px-2">

        <div className={`flex flex-wrap justify-center gap-3
        shadow-lg bg-white px-3 py-2 rounded-3xl`}>

        {colorToSelect.map((color, index) =>(
         
            <button key={color + '-' + index.toString()} className="`{outline-none px-4 py-1 rounded-full text-white shadow-lg}`"
            style={{backgroundColor: color, color: 'black'}} onClick={() => setColor(color)}>{color}</button>
        ))}
               </div>
          </div>
      </div>
  )
}

export default App
