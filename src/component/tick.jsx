import React, { useState } from "react";
import "./tick.css";

const Tick = ({ value, n, check, setB, setCount, count, del, id, name }) => {
  // // let c = `"checked"`;//tick ko được
  // let c = null; //tick được
  // console.log(`"checked"`, c);
  ////////
  const handleclick = (e) => {
    setB(e);
    // let b = `${e.target.value}`; //local,global variable problem issue very cautious,phải đem được cái biến đó ra gnoafi và cập nhập mảng ở ngoài vì khi trong function nó sẽ không cập nhập liền mà khi re-render thì mới cập nhập
    setCount(!count);
  };

  return (
    <>
      <div class="container" onClick={() => handleclick(value)}>
        <label htmlFor="">{n}</label>
        <label>{name}</label>
        <input
          className="input"
          number={id}
          type="checkbox" //phải có cái này
          checked={check}
          value={value}
          onClick={(e) => handleclick(e.target.value)}
        />
        <label htmlFor="">{value}</label>
        {/* ///đặt điều kiện cho div ở dưới nếu n = active và n=all thì style
        display none */}
        <div onClick={() => del(name, id)}>
          <img
            style={{ width: "20%", objectFit: "cover" }}
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Tick;
