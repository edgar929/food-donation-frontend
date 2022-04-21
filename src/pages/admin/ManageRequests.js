import React from 'react';
import AdmDashboardWrapper from '../../components/admin-dashboard-components/AdmDashboardWrapper';
import Requests from '../../components/admin-dashboard-components/Requests';


const ManageRequests = ()=>{
   return(
    <AdmDashboardWrapper className="wrapper">
        <div>
          <Requests />
        </div>
    </AdmDashboardWrapper>
   )
}

export default ManageRequests;