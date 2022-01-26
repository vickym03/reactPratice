import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function Products() {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const url = 'https://ty-shop.herokuapp.com/api/products'
        try {
            const response = await axios.get(url)
            console.log(response);
            console.log(response.data);
            setproducts(response.data.products)
        } catch (err) {
            console.log(err);
        }
    }

    const deleteProduct = async (productID)=>{
        console.log(productID);
        const url = `https://ty-shop.herokuapp.com/api/products/${productID}`
        try{
            const response = await axios.delete(url)
            console.log(response.data);

            // const productCopy =[...products]
            // const filteredProducts = productCopy.filter((prod)=>{
            //     return prod._id !==productID
            // })
            // setproducts(filteredProducts)
            // OR
            fetchProducts()
        } catch(err){
            console.log(err);
        }
    }
    return <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Image</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((product) => {
                    return <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td><img style={{
                            width:'50px',
                            height:'50px'
                        }} src={product.productImageURL} /></td>
                        <td>{product.productDescription}</td>
                        <td><button className="btn btn-primary">Edit</button></td>
                        <td><button className='btn btn-danger' onClick={()=>{deleteProduct(product._id)}}>
                        Delete</button></td>

                    </tr>
                })}

            </tbody>
        </Table>
    </div>;
}

export default Products;