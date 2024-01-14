import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Details = () => {

    

    const [ListDetail, setListDetail] = useState([])

    const fetchSalesDetail = async( ) => {
     const responce = await fetch('http://localhost:5000/sales/getall')
     console.log(responce.status);

     const data = await responce.json();
     console.log(data);
     setListDetail(data);

    }
    useEffect( () =>{
        fetchSalesDetail();
       }, [])

  return (
    <div>
        <div className="container">
            <h1>Sales Detaiales</h1>
      {
            ListDetail.map((shop) =>(

            <div className="row">
                <div className="card">
                <div className="col-6">
                    <img src="" alt="" />
                </div>
                <div className="col-6">
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

                </div>
                </div>
           
            </div>
            ))
        }
        </div>
    </div>
  )
}

export default Details