import React from 'react';
import AdmDashboardWrapper from '../../components/admin-dashboard-components/AdmDashboardWrapper';
import Header from '../../components/admin-dashboard-components/Header';
import Main from '../../components/admin-dashboard-components/Main';
import Menu from '../../components/admin-dashboard-components/Menu';


const Dashboard = ()=>{
   return(
    //    <div class="wrapper">
         
    //        <Main />
    //    </div>
    <AdmDashboardWrapper className="wrapper">
        <Main />
    </AdmDashboardWrapper>
   )
}

export default Dashboard;