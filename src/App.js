import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Portfolio from "./Components/Pages/Portfolio";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Blog from "./Components/Pages/Blog";
import Navbar from "./Components/Pages/Shared/Navbar";
import PurchaseDetail from "./Components/Pages/PurchaseDetail";
import RequireAuth from "./Components/Pages/RequireAuth";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import MyReview from "./Components/Pages/Dashboard/MyReview";
import MyOrder from "./Components/Pages/Dashboard/MyOrder";
import MyDashboard from "./Components/Pages/Dashboard/MyDashboard";
import AddProduct from "./Components/Pages/Dashboard/AddProduct";
import MakeAdmin from "./Components/Pages/Dashboard/MakeAdmin";
import ManageOrder from "./Components/Pages/Dashboard/ManageOrder";
import ManageProduct from "./Components/Pages/Dashboard/ManageProduct";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="/purchaseDetail/:id"
          element={
            <RequireAuth>
              <PurchaseDetail />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="review" element={<MyReview></MyReview>} />
          <Route path="order" element={<MyOrder></MyOrder>} />
          <Route path="addProduct" element={<AddProduct></AddProduct>} />
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>} />
          <Route path="manageOrder" element={<ManageOrder></ManageOrder>} />
          <Route
            path="manageProduct"
            element={<ManageProduct></ManageProduct>}
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="purchase"
          element={
            <RequireAuth>
              <PurchaseDetail />
            </RequireAuth>
          }
        />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
