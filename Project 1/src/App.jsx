import React from 'react'
import Card from './Components/Card'
function App() {
  return (
    <div>
      <div className="parent-class">
        
      <Card user='John Doe' age={18} img="https://images.unsplash.com/photo-1613845205719-8c87760ab728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltZXIlMjBib3l8ZW58MHx8MHx8fDA%3D"/>
      <Card user='Jane Smith' age={25} img="https://images.unsplash.com/photo-1614367674345-f414b2be3e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltZXIlMjBib3l8ZW58MHx8MHx8fDA%3D"/>
      <Card user='Bob Johnson' age={30} img="https://images.unsplash.com/photo-1744551154623-4b5336e95c28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltZXIlMjBib3l8ZW58MHx8MHx8fDA%3D"/>
      <Card user='Alice Williams' age={22} img="https://images.unsplash.com/photo-1599914476774-28c85a052868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltZXIlMjBib3l8ZW58MHx8MHx8fDA%3D"/>
      </div>
    </div>)
}
export default App 