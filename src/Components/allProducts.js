import React, { useEffect, useState} from "react";
import {gql, useQuery} from '@apollo/client';
import {LOAD_PRODUCTS} from '../GraphQL/Queries';
import {Card, Image, Grid, Button, Icon, CardContent} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';


function GetAllProducts(){
    const location = useLocation();
    const soldOut = location.state ? location.state.soldOut : "IN_STOCK";
    console.log(location.state)
    const {error, loading, data} = useQuery(LOAD_PRODUCTS, {
        variables: {isSoldOut : soldOut}
    });
    const [ aproducts, setProducts] = useState([]);

    useEffect(() => {
        if(data){
            setProducts(data.products)
        }
    }, [data])

    let image;
    const itemImageLinkHelper = (img) => {
        if(img.length !== 0){
            image = img[0].url;
        } else {
            image = "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg"
        }
        return image;
    }
        return(
            <Grid container columns={5} doubling>
                {   aproducts.edges?.map(item => {
                    const itemImage = itemImageLinkHelper(item.node.images);
                    if(soldOut === 'IN_STOCK'){
                        return (
                            <Grid.Column id={item.node.id}>
                                <Card style={{width: '200px'}}>
                                    <Link to={'/product/' + item.node.id} state={{currItem: item.node, currImage: itemImage, sold: soldOut}}>
                                        <Image
                                            height="250px"
                                            width="300px"
                                            src={itemImage}
                                        />
                                    </Link>
                                    <CardContent>
                                        <div className="product name and price">
                                            <Card.Header>{item.node.name}</Card.Header>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid.Column>
                        )
                    } else {
                        return (
                            <Grid.Column id={item.node.id}>
                                <Card style={{width: '200px'}}>
                                   
                                        <Image
                                            height="250px"
                                            width="300px"
                                            src={itemImage}
                                        />
                                    
                                    <CardContent>
                                        <div className="product name and price">
                                            <Card.Header>{item.node.name}</Card.Header>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid.Column>
                        )
                    }
                }) 
                }
            </Grid>
        )
};


export default GetAllProducts;