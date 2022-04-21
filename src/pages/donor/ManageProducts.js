import React from 'react';
import DonorDashboardWrapper from '../../components/donor-dashboard-components/DonorDashboardWrapper';
import MyProducts from '../../components/donor-dashboard-components/MyProducts';


const ManageProducts = ()=>{
   return(
    <DonorDashboardWrapper className="wrapper">
        <div>
          <MyProducts />
        </div>
    </DonorDashboardWrapper>
   )
}

export default ManageProducts;