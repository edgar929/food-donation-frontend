import React from 'react';
import AdmDashboardWrapper from '../../components/admin-dashboard-components/AdmDashboardWrapper';
import AllUsers from '../../components/admin-dashboard-components/AllUsers';


const ManageUsers = ()=>{
   return(
    <AdmDashboardWrapper className="wrapper">
        <div>
          <AllUsers />
        </div>
    </AdmDashboardWrapper>
   )
}

export default ManageUsers;