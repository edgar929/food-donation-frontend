import React from "react";
import { makeStyles } from '@mui/styles';
import ProductCard from "../components/donations/ProductCard"
import PageWrapper from "../components/PageWrapper";
import { Products } from "../helper/dummy";
import Pagination from '@mui/material/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
 pagination:{
   display: 'flex',
   alignItems: 'center'
 }
}));

const DonationList = ()=>{
  const classes = useStyles();
    return(
      <PageWrapper>
         <div className={classes.root}>
          {Products.map(product=>{
                return(
                    <ProductCard product={product}/>
                )
            }
            )}
         </div>
         <div className={classes.pagination}>
           <Pagination count={10} variant="outlined" color="primary" />
         </div>
      </PageWrapper>
        
    )
}

export default DonationList;