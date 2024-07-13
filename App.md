<!-- import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tick from "./component/tick";

function App() {
  let i = 0;
  let c;
  const [count, setCount] = useState(false);
  const [b, setB] = useState(null);
  const [a, setA] = useState(null);
  let g = "dcm";
  const [all, setAll] = useState([]);
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);
  ///////

  const handlecheck = (e) => {
    setB(e);
    // let b = `${e.target.value}`; //local,global variable problem issue very cautious,phải đem được cái biến đó ra gnoafi và cập nhập mảng ở ngoài vì khi trong function nó sẽ không cập nhập liền mà khi re-render thì mới cập nhập
    setCount(!count);
  };

  ////////
  const coun = (b) => {
    //   //////sai///
    //   // active.map((item) => {
    //   //   console.log("item nè", item);
    //   //   if (item !== b) {
    //   //     //cái này nó không hoạt động vì mảng rỗng thì không có item đồng nghĩa không có item để so sánh giá trị
    //   //     // const newActive = [b];
    //   //     setActive([...active, b]);
    //   //     // completed.push(b);
    //   //     // setCompleted(b);
    //   //   }
    //   // });
    //   //////sai///
    //   //phải xác định mảng lúc rỗng và lúc đã có giá trị là 2 trường hợp phải xét hết nếu không một trong 2 trường họp khi xảy ra thì điều kiện sai và code sẽ không chạy
    console.log("b", b);
    console.log("active trong coun", active);
    // console.log("đks", active.includes(b));
    active.map((item, index) => {
      if (active[index].value == b) {
        active[index].id = index;
        active.splice(index, 1);
      }
    });
    //////////sai//
    //   if (!active.includes({ value: b })) {
    //     console.log("có chạy");
    //     //Ý nghĩa là:Nếu active khi chưa có b thì chạy dù là mảng có rỗng hay không
    //     setActive([...active, { value: b }]);
    //     // setCompleted(b);
    //   } else if (active.includes(b)) {
    //     console.log("không chạy");
    //     //làm sao xử lý từng vị trí đây để xóa khi mảng active đã chứa rồi ,tính luôn phần input nhập vào tránh bị trùng nữa
    //   }
    ///////sai//////giải thích:không thể xử lý chi tiết vị trí của mảng nên phải chuyển sang dùng array object chứ không dùng array bình thường được
  };
  //////////ở dưới là xử lý khi tick vào ///
  useEffect(() => {
    if (count === true) {
      coun(b);
      console.log("true");
    }
    // else if (count === false) {
    //   if (active.includes(b)) {
    //     //always luông có điều kiện khi xài state chứ không re-render thấy mụ nội
    //     const newActive = active.filter((item) => {
    //       item !== b;
    //     });
    //     setActive(newActive);
    //   }
    // }
  }, [count]);
  //////////
  console.log("active ngoài nè", active);
  console.log("b", b);
  console.log("count", count);
  // console.log("completed", completed);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission là để khỏi load lại trang
          // const newActive = [...active, a];
          setActive([...active, { value: c }]);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            c = e.target.value;
            // setA(e.target.value);
          }} //onChange thì lấy được tất cả ký tự và xài được cả enter ,xịn và tối ưu hơn onkeydown
        />
        <button type="submit">submit</button>
      </form>
      {/* ///// */}
      <input type="text" value="" />
   {/* /////////active */}
      {/* {active.map((item, index) => {
        //lỗi căn bản thiếu return dcm
        return (
          <Tick
            id={item.id}
            check={null}
            n={"active"}
            key={index}
            value={item.value}
            setB={setB}
            setCount={setCount}
            count={count}
            del={del}
            name={item.name}
          />
        );
      })} */}
      {/* ///////active////// */}
      {/* //////completed///// */}
      {/* {completed.map((item, index) => {
        return (
          <Tick
            id={item.id}
            check={`"checked"`}
            n={"complete"}
            key={index}
            value={item.value}
            setB={setB}
            setCount={setCount}
            count={count}
            del={del}
            name={item.name}
          />
        );
      })} */}
      {/* ///////completed///// */}
      {/* ///////////all////// */}
      {/* {all.map((item, index) => {
        return (
          <Tick
            id={item.id}
            check={`"checked"`}
            n={"All"}
            key={index}
            value={item.value}
            del={del}
            name={item.name}
          />
        );
      })} */}
      {/* //////////////////all///////////////////*/}
    </>
  );
}

export default App;

// React components manage their state using the useState hook. This hook returns an array with two elements: the current state value and a function to update it. -->
