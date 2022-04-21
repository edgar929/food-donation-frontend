import React from 'react';
import AdmDashboardWrapper from '../../components/admin-dashboard-components/AdmDashboardWrapper';
import AvailableDonations from '../../components/admin-dashboard-components/AvailableDonations';


const ManageDonations = ()=>{
   return(
    <AdmDashboardWrapper className="wrapper">
        <div>
          <AvailableDonations />
        </div>
    </AdmDashboardWrapper>
   )
}

export default ManageDonations;