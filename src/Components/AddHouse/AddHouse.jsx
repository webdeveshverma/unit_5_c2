 
import axios from "axios";
import { useEffect, useState } from "react";






export const AddHouse = () => {
  
  const [inputData,setinputData]=useState({});
  const [data,setData]=useState([]);
 
   const handleChange=(e)=>{
     let {className,value,checked,type}=e.target
     value=type==="checkbox" ? checked : value;
     setinputData({
       ...inputData,
       [className]: value
     })
    }
     const handleSubmit=(e)=>{
       e.preventDefault();

       axios.post("http://localhost:8080/houses",inputData).then(()=>{
         alert("User Create Successfully")
       })
      }
     
      const getData=()=>{
        axios.get("http://localhost:8080/houses").then((res)=>{
          setData(res.data);
        })
      }

      useEffect(()=>{
        getData();
      },[inputData])
   
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" onChange={handleChange} id="name"   required />
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" onChange={handleChange} id="ownerName" required />
        <br />
        <label>address</label>
        <input  type="text" className="address" onChange={handleChange} id="address" required />
        <br />
        <label>areaCode</label>
        <input  type="text" className="areaCode" onChange={handleChange} id="areaCode" required />
        <br />
        <label>rent</label>
        <input  type="text" className="rent" onChange={handleChange} id="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" id="bachelor" onChange={handleChange} className="bachelor" />
        <br />
        <label>married</label>
        <input  type="checkbox" id="married" onChange={handleChange} className="married" />
        <br />
        <label>image</label>
        <input  type="text" className="image" id="image" required />
        <br />
        <input className="submitBtn" id="submit" type="submit" />
      </form>
      <table >
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
             
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e.id} className="houseDetails">
                <td className="houseId">{e.id}</td>
                <td className="houseName">{e.name} </td>
                <td className="ownersName">{e.ownerName}</td>
                <td className="address">{e.address}</td>
                <td className="areaCode">{e.areaCode}</td>
                <td className="rent">{e.rent}</td>
                 <td>{e.bachelor ? "bachoelors" : "married"}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
    </div>
  );
};
