import React from 'react';
import DonorDashboardWrapper from '../../components/donor-dashboard-components/DonorDashboardWrapper';
import NewDonationForm from '../../components/donor-dashboard-components/NewDonationForm';




const CreateProduct = ()=>{
   return(
    <DonorDashboardWrapper className="wrapper">
        <div>
          <NewDonationForm />
        </div>
    </DonorDashboardWrapper>
   )
}

export default CreateProduct;