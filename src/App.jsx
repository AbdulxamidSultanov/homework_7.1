import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "./redux/modalSlice";
import { useState } from "react";
import { addProduct, removeProduct } from "./redux/productsSlice";
import { login, logout } from "./redux/authSlice";
import { setMessage } from "./redux/helloSlice";

function App() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.hello.message);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const productList = useSelector((state) => state.prodcts.products);
  console.log(productList);

  const productObject = {
    id: 5,
    name: "kartoshka",
    count: 5,
  };

  function handleSubmit(e) {
    dispatch(addProduct(productObject));
    e.preventDefault();
  }

  function handleDelete() {
    dispatch(removeProduct({ id: 5 }));
  }
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login({ username: "user1", name: "John Doe" }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const [text, setText] = useState("");

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <>
      <div className={`${isOpen && "bg-gray-700"} text-white`}>
        <button
          className="border rounded-md px-2 py-1 bg-amber-50 text-black m-2"
          onClick={() => dispatch(openModal())}
        >
          Modalni Ochish
        </button>

        {isOpen && (
          <div>
            <div>
              <h2>Modal Oyna</h2>
              <p>Bu yerda kerakli ma’lumotni joylashtirishingiz mumkin.</p>
              <button
                className="border rounded-md px-2 py-1 bg-amber-50 text-black m-2"
                onClick={() => dispatch(closeModal())}
              >
                Yopish
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>№ </th>
              <th>Product: </th>
              <th>Count: </th>
            </tr>
          </thead>
          <tbody>
            {productList &&
              productList.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.count}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <button
          className="border rounded-md px-3 py-2 m-2 cursor-pointer hover:bg-amber-100"
          onClick={handleSubmit}
        >
          add
        </button>
        <button
          className="border rounded-md px-3 py-2 m-2 cursor-pointer hover:bg-amber-100"
          onClick={handleDelete}
        >
          delete
        </button>
      </div>
      <div>
        <h1>{message}</h1>
        <button onClick={() => dispatch(setMessage("New Message!"))}>
          Change Message
        </button>
      </div>
      <div>
        {isAuthenticated ? (
          <div>
            <p>Salom, {user.name}!</p>
            <button
              className="border rounded-md px-3 py-2 m-2 cursor-pointer hover:bg-amber-50"
              onClick={handleLogout}
            >
              Chiqish
            </button>
          </div>
        ) : (
          <button
            className="border rounded-md px-3 py-2 m-2 cursor-pointer hover:bg-amber-50"
            onClick={handleLogin}
          >
            Kirish
          </button>
        )}
      </div>
    </>
  );
}

export default App;
