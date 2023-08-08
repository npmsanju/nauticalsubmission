import {gql} from '@apollo/client';


export const LOAD_PRODUCTS = gql`
query allSaleProducts($isSoldOut: StockAvailability){
    products(first: 100 stockAvailability: $isSoldOut){
      edges {
        node{
          id
          name
          descriptionHtml
          variants {
            id
            name
            isPublished
            descriptionHtml
            quantityAvailable
            images{
              url
            }
            pricing{
              onSale
              price{
                net{
                  currency
                  amount
                }
              }
            }
          }
          images{
            url
          }
          pricing{
            onSale
                      priceRange{
              start{
                net{
                  currency
                  amount
                }
              }
              stop{
                net {
                  currency 
                  amount 
                }
              }
            }
          }
        }
      }
    }
  }
  `;