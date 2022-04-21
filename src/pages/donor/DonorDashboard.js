import React from 'react';
import Main from '../../components/admin-dashboard-components/Main';
import DonorDashboardWrapper from '../../components/donor-dashboard-components/DonorDashboardWrapper';


const DonorDashboard = ()=>{
   return(
    <DonorDashboardWrapper className="wrapper">
        <Main />
    </DonorDashboardWrapper>
   )
}

export default DonorDashboard;