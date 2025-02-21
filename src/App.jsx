import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "./redux/modalSlice";
import { useRef } from "react";
import { addProduct, removeProduct } from "./redux/productsSlice";
import { login, logout } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const productObject = {
    id: 5,
    name: "kartoshka",
    count: "5 ta",
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
  return (
    <>
      <div className={`${isOpen ? "bg-gray-700" : "bg-gray-900"} text-white`}>
        <button onClick={() => dispatch(openModal())}>Modalni Ochisj</button>

        {isOpen && (
          <div>
            <div>
              <h2>Modal Oyna</h2>
              <p>Bu yerda kerakli ma’lumotni joylashtirishingiz mumkin.</p>
              <button onClick={() => dispatch(closeModal())}>Yopish</button>
            </div>
          </div>
        )}
      </div>

      <button onClick={handleSubmit}>add</button>
      <button onClick={handleDelete}>delete</button>

      <div>
        {isAuthenticated ? (
          <div>
            <p>Salom, {user.name}!</p>
            <button onClick={handleLogout}>Chiqish</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Kirish</button>
        )}
      </div>
    </>
  );
}

export default App;
