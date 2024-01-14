import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {

    

    const [ListDetail, setListDetail] = useState([])

    const {id} = useParams();

    const fetchSalesDetail = async( ) => {
     const responce = await fetch('http://localhost:5000/sales/getbyid/' +id);
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
           ListDetail !== null ? (

            <div className="row">
                <div className="card">
                <div className="col-6">
                    <img src={"http://localhost:5000/" + ListDetail.Image} alt="" />
                </div>
                <div className="col-6">
                <div>
                        <h1>{ListDetail.Shopname}</h1>
                        <p>{ListDetail.category}</p>
                        <p>{ListDetail.Salesdescription}</p>
                        <p>{ListDetail.Offer}</p>
                        <p>{ListDetail.Address}</p>
                        <p>{ListDetail.Startdate}</p>
                        <p>{ListDetail.Enddate}</p>
                        <p>{ListDetail.Contact}</p>
                        </div>

                </div>
                </div>
           
            </div>
           ) : (
            <div>
                <h1>Loading .....</h1>
            </div>
        
           ) 
        }
        </div>
    </div>
  )
}

export default Details