import React, { useState, useEffect } from "react";

const Box = ({ folderList, lastIndex, setLastIndex }) => {
  useEffect(() => {
    setLastIndex(folderList.length);
  }, []);

  console.log("lastIndex", lastIndex);
  console.log("folderList.length", folderList.length);

  return (
    <>
      <div className="mb-5">
        <button
          className="btn btn-primary"
          disabled={lastIndex + 1 > 2 ? false : true}
          onClick={() => setLastIndex(lastIndex - 1)}
        >
          Prev
        </button>
        &nbsp;&nbsp;
        <button
          className="btn btn-primary"
          disabled={lastIndex + 1 < folderList.length ? false : true}
          onClick={() => setLastIndex(lastIndex + 1)}
        >
          Next
        </button>
      </div>

      <div>
        {folderList.length > 1
          ? folderList.map((item, index) => (
              <span>
                {index !== 0 ? item.folderName + " " + "," + " " : ""}
              </span>
            ))
          : null}
      </div>

      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">
              {folderList.length > 1 ? folderList[lastIndex].folderName : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
