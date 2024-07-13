import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tick from "./component/tick";

function App() {
  const [c, setC] = useState(null);
  const [b, setB] = useState(null);
  const [all, setAll] = useState([]);
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [count, setCount] = useState(false);
  const [flag, setFlag] = useState(null);
  ///////
  const [state, setState] = useState(active);
  //////

  const deleteall = () => {
    completed.map((item, index) => {
      completed.splice(0, completed.length);
    });
    const y = [...completed];
    setCompleted(y);
    //////
    active.map((item, index) => {
      active.splice(0, active.length);
    });
    const t = [...active];
    setActive(t);
  };
  ////////
  const del = (n, id) => {
    console.log(n); //n là đảm bảo là hàng thật của completed
    console.log(id);
    //
    n === "completed"
      ? completed.map((item, index) => {
          //work:giải thích:id chỉ là để so sánh chứ không phải là vị trí vì id và vị trí là không giống nhau
          if (completed[index].id == id) {
            completed.splice(index, 1);
          }
          const ne = [...completed];
          //chạy rồi chỉ còn cập nhập lại giao diện:xử lý bằng cách tạo 1 biến chứa gái trị mới rồi gán cho set chứ nếu gán trực tiếp là giá trị cũ thì nó chưa kịp re-render nó sẽ lấy lại giá trị cũ của completed dẫn đến không trigger re-render
          setCompleted(ne);
        })
      : n === "active"
      ? active.map((item, index) => {
          //work:giải thích:id chỉ là để so sánh chứ không phải là vị trí vì id và vị trí là không giống nhau
          if (active[index].id == id) {
            active.splice(index, 1);
          }
          const ne = [...active];
          //chạy rồi chỉ còn cập nhập lại giao diện:xử lý bằng cách tạo 1 biến chứa gái trị mới rồi gán cho set chứ nếu gán trực tiếp là giá trị cũ thì nó chưa kịp re-render nó sẽ lấy lại giá trị cũ của completed dẫn đến không trigger re-render
          setActive(ne);
        })
      : n === "All" &&
        all.map((item, index) => {
          //work:giải thích:id chỉ là để so sánh chứ không phải là vị trí vì id và vị trí là không giống nhau
          if (all[index].id == id) {
            all.splice(index, 1);
          }
          const ne = [...all];
          //chạy rồi chỉ còn cập nhập lại giao diện:xử lý bằng cách tạo 1 biến chứa gái trị mới rồi gán cho set chứ nếu gán trực tiếp là giá trị cũ thì nó chưa kịp re-render nó sẽ lấy lại giá trị cũ của completed dẫn đến không trigger re-render
          setAll(ne);
        });

    /////////
  };

  ////
  useEffect(() => {
    active.map((item, index) => {
      if (active[index].value == b) {
        active.splice(index, 1);
        // console.log(b);
        setCompleted([...completed, { value: b, id: completed.length }]);
        setAll([...active]);
      }
    });
  }, [count]);

  //////
  useEffect(() => {
    const e = [...active];
    const r = [...completed];
    // console.log("e", e);
    e.map((item, index) => (e[index].name = "active"));
    r.map((item, index) => (r[index].name = "completed"));
    ///////
    const ne = [...e, ...r];
    setAll(ne);
  }, [active, completed]);

  // /////
  console.log(count);
  console.log("active ngoài nè", active);
  console.log("complete ngoài nè", completed);
  console.log("all ngoài nè", all);
  console.log("length", all.length);

  ////
  return (
    <>
      <div className="cover">
        <div className="title">#TODO</div>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission là để khỏi load lại trang
            {
              if (c) {
                setActive([...active, { value: c, id: active.length }]);
              }
            }
          }}
        >
          {/* ////// */}
          <input
            placeholder="Add details"
            type="text"
            onChange={(e) => {
              if (e.target.value != "") {
                setC(e.target.value);
              }
            }}
          />
          <button className="add" type="submit">
            Add
          </button>
        </form>

        <div className="contain">
          <div
            className={flag == "active" ? "hover" : "choice"}
            id="active"
            onClick={() => {
              setState(active), setFlag("active");
            }}
          >
            Active
          </div>
          <div
            className={flag == "completed" ? "hover" : "choice"}
            id="completed"
            onClick={() => {
              setState(completed), setFlag("completed");
            }}
          >
            Completed
          </div>
          <div
            className={flag == "all" ? "hover" : "choice"}
            id="all"
            onClick={() => {
              setState(all), setFlag("all");
            }}
          >
            All
          </div>
        </div>
        {/* /////// */}
        <div className="dic">
          {state.map((item, index) => {
            return (
              <Tick
                id={item.id}
                check={`"checked"`}
                // n={`${state}`}
                key={index}
                value={item.value}
                setB={setB}
                setCount={setCount}
                count={count}
                del={del}
                name={item.name}
              />
            );
          })}
          <button className="button" onClick={() => deleteall()}>
            delete all
          </button>
        </div>
      </div>
      <div className="instruct">
        <p style={{ color: "aqua" }}>
          <li>Hướng dẫn sử dụng: UserStory</li>
        </p>
        <p style={{ color: "red" }}>
          <li>Xin hãy đọc lưu ý sau mỗi lần thực hiện thao tác</li>
        </p>
        <p>
          <li>
            {" "}
            Khi add vào trên thanh input có thể Enter hoặc bấm vào nút Add để
            thêm hành động
          </li>
          <li style={{ color: "red" }}>
            Sau khi nhập xong trên thanh input thì hãy xóa giá trị để nhập giá
            trị mới vì thanh input không tự xóa giá trị
          </li>
        </p>
        <p>
          <li>
            Sau khi Add: nếu muốn chuyển từ active sang thành completed thì nhấp
            trực tiếp vào thẻ mang tên hành động muốn chuyển
          </li>
        </p>
        <p>
          <li>
            Có thể thực hiện chuyển từ active sang completed từ tab All,tab
            Active bằng cách nhấp trực tiếp vào thẻ mang tên hành động muốn
            chuyển đổi có trạng thái là active,sau khi thực hiện xong thì có thể
            sang tab Completed và tab All để kiểm tra kết quả
          </li>
        </p>

        <p>
          <li>
            Nếu muốn xóa đi hành động đang có sẵn trong các tab thì nhấp vào
            biểu tượng thùng rác trong thẻ mang tên details mà user muốn xóa
          </li>
        </p>
        <p>
          <li>
            Nếu muốn deleteAll thì nhấp vào button deleteAll,có thể xóa cả trong
            tab active lẫn tab completed{" "}
          </li>
        </p>
        <p style={{ color: "red" }}>
          <li>
            Lưu ý: Sau khi thực hiện hành động như Add,Xóa,delete all,đổi từ
            active thành completed thì trong trường hợp UI không cập nhập thì
            nhấp lại thêm một lần nữa trực tiếp vào các tab như
            Active,Completed,All để xem dữ liệu đã được cập nhập lại sau khi dữ
            liệu thay đổi.
          </li>
          <li style={{ color: "aqua" }}>
            Tóm lại hãy nhấp liên tục vào các tab All,Active,All để giao diện
            được cập nhập liên tục sau mỗi lần thao tác với dữ liệu
          </li>
        </p>
      </div>
    </>
  );
}

export default App;

// React components manage their state using the useState hook. This hook returns an array with two elements: the current state value and a function to update it.
