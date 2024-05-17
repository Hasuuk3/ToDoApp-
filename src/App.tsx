import React, { useState } from 'react' ;
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [txt, settxt] = useState("abc");
  const [txtlist, settxtlist] = useState<any>([]);
  const [inputtxt, setinputtxt] = useState("");
  const [editIndex, setEditIndex] = useState();
  let del = (i: any) => {
    txtlist.splice(i, 1);
    settxtlist([...txtlist]);
  };

  let edit = (i: any) => {
    settxt(txtlist[i]);
    setinputtxt(txtlist[i]);

    setEditIndex(i);

    console.log(txtlist[i]);
  };

  const modifyList = () => {
    if (inputtxt && editIndex) {
      const updatedData = txtlist;
      updatedData[editIndex] = inputtxt
      console.log({updatedData})
      settxtlist([...updatedData]);
      setEditIndex(undefined)
    } else {
      txtlist.push(inputtxt);
      settxtlist([...txtlist]);
    }
    setinputtxt("");
  };

  const dltall=()=>{
    settxtlist([])
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="mt-2">
          <h1 className="bg-primary mx-5 rounded-pill bg-opacity-25 text-center">
            TODO APP
          </h1>
        </div>
       

        <div className="container d-flex mt-5">
          <input
            type="text"
            className="form-control border-3 rounded-pill w-75"
            value={inputtxt}
            onChange={(e) => {
        
              setinputtxt( e.target.value);
            }}
          />
          <button
            className="ms-5 rounded-pill w-25  btn btn-success"
            onClick={modifyList}
          >

            {editIndex ? 'Update' : 'Add'}
          
          </button>
        </div>

        <div className="container mt-3    ">
          {txtlist.map((x: any, i: any) => (
            <li className=" text-start " key={i}>
              {x}
              <button
                className="  ms-5   btn btn-warning rounded-pill   "
                onClick={() => {
                  del(i);
                }}
              >
                DELETE
              </button>
              <button
                className=" mx-5  btn btn-primary rounded-pill  "
                onClick={() => {
                  edit(i);
                }}
              >
                EDIT
              </button>
              <hr /> <br />
            </li>
          ))}
        </div>

        <div className=" text-end container ">
          <button className=" btn btn-danger rounded-pill " onClick={dltall} >DELETE ALL</button>
        </div>

      </header>
    </div>
  );
}

export default App;
