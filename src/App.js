import React, { useState } from "react";
import "./App.css";
import Box from "./Components/Box";

function App() {
  const [folderList, setFolderList] = useState([{}]);
  const [folderName, setFolderName] = useState("");
  const [lastIndex, setLastIndex] = useState(folderList.length);

  const createFolder = () => {
    if (folderList.length === 0) {
      setFolderList([{ folderName: folderName }]);
    } else {
      if (validateFolderName()) {
        let arr = [...folderList];
        arr.push({ folderName: folderName });
        setFolderList(arr);
        setLastIndex(folderList.length);
        
      } else {
        alert("filename already exist, please change the filename...");
      }
    }
    setFolderName("");
  };

  const validateFolderName = () => {
    let flag = true;
    if (folderList.length > 1) {
      folderList.map((item, index) => {
        if (item.folderName === folderName) {
          flag = false;
        }
      });
    }
    return flag;
  };

  return (
    <div className="container">
      <h1>Folder structure that mimics the one in windows OS machine.</h1>

      <div className="row mt-5">
        <div className="col">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter folder name"
              onChange={(e) => setFolderName(e.target.value)}
              value={folderName}
            />
          </div>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={createFolder}>
            Create Folder
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <Box
            folderList={folderList}
            lastIndex={lastIndex}
            setLastIndex={setLastIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
