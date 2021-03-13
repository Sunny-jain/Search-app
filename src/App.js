import './App.css';
import Data from './data.json';
import Table from './Components/Table'
import { useState } from "react";

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <input 
        type = "text" 
        placeholder = "Search"
        onChange = {(event) => setSearch(event.target.value)} 
      />
      <table className = "table out">
        <thead>
            <tr>
              <th>Name</th>
              <th>Locations</th>
            </tr>
          </thead>
        </table>
      <div className = "table-wrapper-scroll-y my-custom-scrollbar">
        <table className = "table table-striped">
          
          <tbody>
            {
              Data.filter((val) => {
                if(search == ""){
                  return val;
                }
                else if(val.Name.toLowerCase().includes(search.toLowerCase())){
                  return val;
                }
              }).map((val, Key) =>{
                return <Table data = {val} key = {Key}/>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
