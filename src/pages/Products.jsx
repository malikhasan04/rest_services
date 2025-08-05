import React, { useEffect, useState } from 'react'
import { GetData } from '../API/api';
import { NavLink } from 'react-router-dom';

export const Products = () => {

    const [productData, setProductData] = useState([]);

    const getProductData = async () => {
        try {
            const res = await GetData();
            if (res.status === 200) {
                setProductData(res.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductData();
    }, [])

  return (
    <section className='section-products container'>
      <h2 className='container-title'>
        Here are the Products
      </h2>
      <div className='gradient-cards'>
        {
          productData.map((prod) => {
            const {id, title, price, description, category, image} = prod;
            return(
              <div className='card' key={id}>
                <div className='container-card bg-blue-box'>
                  <img className='image' src={image} alt={image.alt}/>
                  <p className='card-title'>{title}</p>
                  <p>
                    <span className='card-description'>Description: </span>
                    {description}
                  </p>
                  <p>
                    <span className='card-description'>Category: </span>
                    {category}
                  </p>
                  <p>
                    <span className='card-description'>Price: </span>
                    {price}
                  </p>
                  <NavLink to={`/products/${id}`}>
                    <button>Update</button>
                  </NavLink>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
