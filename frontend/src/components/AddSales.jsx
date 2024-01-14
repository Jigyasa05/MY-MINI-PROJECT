import React, { useState } from 'react'
import { useFormik } from "formik"
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';




const AddSales = () => {

  const navigate = useNavigate();

  const [selImage, setSelImage] = useState('')

  const uploadeImage = async (e) => {
    const file = e.target.files[0];
    setSelImage(file);

    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,

    }) .then((res) => {
     if(res.status === 200) {
      console.log("file Uploade");
     }
    })


  }

  const salesForm = useFormik({
    initialValues: {
      Shopname: '',
      Category: '',
      Saledescription: '',
      Offer: '',
      Address: '',
      Startdata: '',
      Enddata: '',
      Contact: '',
      Image: '',
    },
    onSubmit: async (values, { resetForm }) => {
      // alert(JSON.stringify(values));
      values.Image = selImage.name;
      console.log(values);

      // send request to backend/REST API
      const response = await fetch('http://localhost:5000/sales/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.status);
      console.log(response.statusText);

      if (response.status === 200) {
        enqueueSnackbar('registered Successfully', { variant: 'success' });
      
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }

      // resetForm();
      // toast.success('Form Submitted Successfully');

    },

  });


  return (
    <div>
       <h1 className='d-flex justify-content-center mt-3'>Add Sales</h1>
      <div className="container d-flex justify-content-center">
       
        <div className="card w-50 mt-4 p-4 ">
          <form action="" onSubmit={salesForm.handleSubmit} >
            
            <div  className='d-flex justify-content-evenly my-2'>
              <label htmlFor="" className="form-label">Shop Name</label>
              <input type="text"
                className="form-cotrol"
                id="Shopname"
                value={salesForm.values.Shopname}
                onChange={salesForm.handleChange} />
            </div>
            <div  className='d-flex justify-content-evenly my-2'>
              <label htmlFor="" className="form-label">Categories</label>
              <input type="text" className="form-cotrol"
                id="Category"
                value={salesForm.values.Category}
                onChange={salesForm.handleChange} />
            </div>
            <div  className='d-flex justify-content-evenly my-2 '>
              <label htmlFor="" className="form-label">Salesdescription</label>
              <input type="text" className="form-cotrol"
              id='Saledescription'
              value={salesForm.values.Saledescription}
              onChange={salesForm.handleChange} />
            </div>
            <div  className='d-flex justify-content-evenly my-2'>
              <label htmlFor="" className="form-label">Offer</label>
              <input type="text" className="form-cotrol"
                id="Offer"
                value={salesForm.values.Offer}
                onChange={salesForm.handleChange} />
            </div>
            <div  className='d-flex justify-content-evenly my-2'>
              <label htmlFor="" className="form-label">Address</label>
              <input type="text" className="form-cotrol"
                id="Address"
                value={salesForm.values.Address}
                onChange={salesForm.handleChange} />
            </div>
            <div  className='d-flex justify-content-evenly my-2'>
              <label htmlFor="" className="form-label">Start Date</label>
              <input type="text" className="form-cotrol"
                id="Startdata"
                value={salesForm.values.Startdata}
                onChange={salesForm.handleChange} />
            </div>
            <div  className='d-flex justify-content-evenly my-2'>
              <label htmlFor="" className="form-label">End Data</label>
              <input type="text" className="form-cotrol"
                id="Enddata"
                value={salesForm.values.Enddata}
                onChange={salesForm.handleChange} />
            </div>
            <div  className='d-flex justify-content-evenly my-2'>
              <label htmlFor="" className="form-label">Contact</label>
              <input type="text" className="form-cotrol"
                id="Contact"
                value={salesForm.values.Contact}
                onChange={salesForm.handleChange} />
            </div>
            <div>
           
            </div>
            <div className='text-center'>           
               <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
            <label htmlFor="uploade" className="btn btn-primary">Uploade Image</label>
            <input id='uploade' type="file" className="form-control"  onChange={uploadeImage}></input>
            </div>

          </form>
        </div>

      </div>
    </div>



  )
}

export default AddSales;