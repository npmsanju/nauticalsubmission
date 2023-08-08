import React, {useState} from "react";
import {Item, Button} from 'semantic-ui-react';
import {useLocation} from 'react-router-dom'

function GetSingleProduct(){

const location = useLocation();
const {currItem, currImage, sold} = location.state;
const [variation, setVariation] = useState({currItem, currImage, showRange: true, sold});



const updateVariant = (varImg,varPrice) => {
    const newVariation = {...variation};
    newVariation.currItem.pricing.priceRange.start.net.amount = varPrice;
    newVariation.currItem.pricing.priceRange.stop.net.amount = varPrice;
    newVariation.currImage = varImg;
    newVariation.showRange = false;
    setVariation(
        newVariation
    )
}

    return (
        <Item.Group style={{ marginLeft: '2.8rms', padding: "20px"}}>
            <Item>
                <Item.Header as='h2'>{variation.currItem.name}</Item.Header>
            </Item>

            <Item>
                <Item.Image size='large' src={variation.currImage}/>
                <Item.Content>
                    <div className="ui bulleted list">
                        <h3>Price: { variation.showRange ?
                                    "$" + variation.currItem.pricing.priceRange.start.net.amount + "-" + variation.currItem.pricing.priceRange.stop.net.amount + " USD"
                                    : variation.currItem.pricing.priceRange.stop.net.amount + " USD"}
                        </h3>
                        <h3>Variants:</h3>
                        {   
                            variation.currItem.variants.map((itemVarient) => {
                                const {name, images, pricing} = itemVarient;
                                const img = images[0] ? images[0].url : "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg"
                                return (
                                    <Button onClick={() => updateVariant(img, pricing.price.net.amount)}>
                                        <Item.Image 
                                            size="small"
                                            src={img}
                                        />
                                        <Item.Content>
                                            <h4>{name}</h4>
                                        </Item.Content>
                                    </Button>
                                )
                            })
                        }
                    </div>
                </Item.Content>
            </Item>
                <Item.Header as="h3">Description:</Item.Header>
                <Item.Content>
                    {variation.currItem.descriptionHtml}
                </Item.Content>
            
            <Item>

            </Item>
        </Item.Group>
    )
}

export default GetSingleProduct;