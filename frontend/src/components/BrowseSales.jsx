import React, { useEffect, useState } from 'react'

const BrowseSales = () => {

    const [ListShop, setListShop] = useState([])

    const fetchSalesData = async( ) => {
     const responce = await fetch('http://localhost:5000/sales/getall')
     console.log(responce.status);

     const data = await responce.json();
     console.log(data);
     setListShop(data);

    }

    useEffect( () =>{
     fetchSalesData();
    }, [])
  return (
    <div>
        <div className="container">
            <div className="row">
                {
                    ListShop.map((shop) =>(
                <div className="col">
                    <img  alt="" />
                    <label htmlFor="" className="form-label">Shop Name</label>
                   {shop.Shopname}
                    <label htmlFor="" className="form-label">Categories</label>
                   {shop.Category}
                    <label htmlFor="" className="form-label">Description</label>
                   {shop.Saledescription}
                    <label htmlFor="" className="form-label">Offer</label>
                   {shop.Offer}
                    <label htmlFor="" className="form-label">Address</label>
                   {shop.Address}
                    <label htmlFor="" className="form-label">Start Date</label>
                   {shop.Startdate}
                    <label htmlFor="" className="form-label">End Date</label>
                   {shop.Enddate}
                    <label htmlFor="" className="form-label">Contact</label>
                   {shop.Contact}
                </div>
                ))
                }
                {/* <div className="col-6"></div> */}
            </div>
        </div>
    </div>
  )
}

export default BrowseSales