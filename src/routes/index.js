import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Dashboard from "../page/Dashboard";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  );
};

export default AllRoutes;
