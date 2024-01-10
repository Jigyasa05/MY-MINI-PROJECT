import React from 'react'
import {useFormik} from "formik"



   
const AddSales = () => {

    const signupForm = useFormik({
        initialValues: {
            Shopname : '',
            Category : '',
            Saledescription : '',
            Offer : '', 
            Address : '',
            Startdata : '',
            Enddata : '',
            Contact : '',
            Image : '',
        },
        onSubmit: async (values, { resetForm }) => {
          // alert(JSON.stringify(values));
          console.log(values);
    
          // send request to backend/REST API
          const response = await fetch('http://localhost:5000/users/add', {
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
            <div className="container">
                <h1>Add Sales</h1>
                <div className="card">
                    <form action="">
                        <div>
                        <label htmlFor="" className="form-label">Shop Name</label>
                        <input type="text"
                         className="form-cotrol"
                         id="Shopname"
                              value={AddSalesForm.values.Shopname}
                              onChange={AddSalesForm.handleChange} />
                        </div>
                        <div>
                        <label htmlFor="" className="form-label">Categories</label>
                        <input type="text" className="form-cotrol"
                        id="Categories"
                        value={AddSalesForm.values.Categories}
                        onChange={AddSalesForm.handleChange} />
                        </div>
                        <div>
                        <label htmlFor="" className="form-label">Salesdescription</label>
                        <input type="text" className="form-cotrol" />
                        </div>
                        <div>
                        <label htmlFor="" className="form-label">Offer</label>
                        <input type="text" className="form-cotrol"
                        id="Offer"
                        value={AddSalesForm.values.Offer}
                        onChange={AddSalesForm.handleChange} />
                        </div>
                        <div>
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-cotrol" 
                        id="Address"
                        value={AddSalesForm.values.Address}
                        onChange={AddSalesForm.handleChange}/>
                        </div>
                        <div>
                        <label htmlFor="" className="form-label">Start Date</label>
                        <input type="text" className="form-cotrol"
                        id="Startdata"
                        value={AddSalesForm.values.Startdata}
                        onChange={AddSales.handleChange} />
                        </div>
                        <div>
                        <label htmlFor="" className="form-label">End Data</label>
                        <input type="text" className="form-cotrol" 
                        id="Enddata"
                        value={AddSalesForm.values.Enddata}
                        onChange={AddSalesForm.handleChange}/>
                        </div>
                        <div>
                        <label htmlFor="" className="form-label">Contact</label>
                        <input type="text" className="form-cotrol"
                        id="Contact"
                        value={AddSalesForm.values.Contact}
                        onChange={AddSalesForm.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg">
                            Submit
                          </button> 
                    </form>
                </div>

            </div>
        </div>
        


    )
}

export default AddSales;