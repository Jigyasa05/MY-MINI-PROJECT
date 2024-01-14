import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const BrowseSales = () => {

    const navigate = useNavigate();
     
   

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
                        <div className="container ">
                            <div className="row d-flex justify-content-center g-3">
                                <div className="col-4">
                  <div className="card m-3">
                    <img src={"http://localhost:5000/" + shop.Image} alt="" />
                    <div className="card-body">
                        <div>
                        <h1>{shop.Shopname}</h1>
                        <p>{shop.category}</p>
                        <p>{shop.Salesdescription}</p>
                        <p>{shop.Offer}</p>
                        <p>{shop.Address}</p>
                        <p>{shop.Startdate}</p>
                        <p>{shop.Enddate}</p>
                        <p>{shop.Contact}</p>
                        </div>
                        <Link className="btn btn-primary" to={"/details/" +shop._id}>View Details</Link>
                    </div>

                  </div>
                  </div>
                  </div>
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