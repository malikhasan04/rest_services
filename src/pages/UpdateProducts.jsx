import React, {  useState } from 'react'
import { PutData } from '../API/api';
import { useParams } from 'react-router-dom';

export const UpdateProducts = () => {
    
    const [updateProd, setUpdateProd] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
    })
    const param = useParams();
    

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setUpdateProd(prevData => ({
          ...prevData,
          [name]: value
        }));
    };

    const handleUpdate = async () => {
        try {
          const data = await PutData(param.id, updateProd);
          console.log('Updated:', data.data);
          alert('Product updated successfully!');
        } catch (error) {
          console.error('Error updating product:', error);
          alert('Failed to update product.');
        }
      };

  return (
    <section>
        <h1 className='card-title title'>UpdateProducts</h1>
        <div className='updateFields'>
            <input type='text' name='title' placeholder='Enter title' onChange={handleChange} value={updateProd.title}/>
            <input type='text' name='description' placeholder='Enter description' onChange={handleChange} value={updateProd.description}/>
            <input type='text' name='category' placeholder='Enter Category' onChange={handleChange} value={updateProd.category}/>
            <input type='text' name='price' placeholder='Enter Price' onChange={handleChange} value={updateProd.price}/>
        </div>
        <button className='updateButton' onClick={handleUpdate}>Update</button>
    </section>
  )
}
