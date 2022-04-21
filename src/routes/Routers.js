import {
    Routes,
    Route,
  } from "react-router-dom";
import SignInSide from "../pages/SignInSide";
import SignUpSide from "../pages/SignUpSide";
import LandingPage from "../pages/landingPage";
import Dashboard from "../pages/admin/Dashboard"
import DonationList from "../pages/DonationList";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageRequests from "../pages/admin/ManageRequests";
import ManageDonations from "../pages/admin/ManageDonations";
import ProtectedRoute from "./ProtectedRoute";
import DonorDashboard from "../pages/donor/DonorDashboard";
import ManageProducts from "../pages/donor/ManageProducts";
import CreateProduct from "../pages/donor/CreateProduct";

  export default function Routers(){
      return(
          <Routes>
               
                  <Route path="/" element={<LandingPage />}/>
                  <Route path="/register" element={<SignUpSide />}/>
                  <Route path="/login" element={<SignInSide />}/>

                  {/* admin routes */}
                  <Route path="/admin-dashboard" element={<ProtectedRoute role="admin"><Dashboard /></ProtectedRoute>}/>
                  <Route path="/donations" element={<DonationList />}/>
                  <Route path="/all_users" element={<ManageUsers />}/>
                  <Route path="/requests" element={<ManageRequests />}/>
                  <Route path="/manage-donations" element={<ManageDonations />}/>
                  
                  {/* donor routes */}
                  <Route path="/donor-dashboard" element={<ProtectedRoute role="donor"><DonorDashboard /></ProtectedRoute>}/>
                  <Route path="/add-product" element={<CreateProduct />}/>
                  <Route path="/all_products" element={<ManageProducts />}/>
                  <Route path="/requests" element={<ManageRequests />}/>
                  <Route path="/manage-donations" element={<ManageDonations />}/>

          </Routes>
      )
  }