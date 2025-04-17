import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Layout from "./components/Layout/Layout";
import OrderDetail from "./components/OrderDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-detail/:id" element={<OrderDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
