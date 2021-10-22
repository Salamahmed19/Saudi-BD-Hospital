import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const Products = () => {
    const [product, setproduct] = useState([])
        useEffect(() => {
            fetch ("./FakeDB/Product.json")
            .then(res => res.json())
            .then(data => setproduct(data))
        },[])
    return (
        <Container className="my-5">
            <div className="row g-5">
                {
                    product.map (product =><div className="col-md-4" product={product} key={product.Id}>
                        <Card className="shadow radious" style={{ width: '18rem'}}>
                            <Card.Img className="p-3" style={{ height:"15rem"}} variant="top" src={product.Img} />
                            <Card.Body>
                            <Card.Title className="text-center">{product.Name}</Card.Title>
                            <Card.Text className="text-center">Price: {product.Price} Riyal</Card.Text>
                            </Card.Body>
                            <button className="btn btn-info">Buy Now</button>
                        </Card>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default Products;