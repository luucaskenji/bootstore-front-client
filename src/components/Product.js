import React, { useContext } from 'react';
import styled from 'styled-components';
import Dinero from 'dinero.js'; 
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import Loading from './Loading';

export default function Product(props) {
    const { id, name, price, image, alt } = props;
    const { loading } = useContext(ProductContext);

    const correctPrice = Dinero({amount: parseInt(price), currency: 'BRL', precision: 2}).toFormat("$0,0.00");

    return(
        <ProductContainer loading={loading}>
            { loading 
                ? <Loading />
                : (
                    <>
                        <Link to={`/produto/${id}`}><img src={image} alt={alt}/></Link>
                        <Caption>
                            <Link to={`/produto/${id}`}><p>{name}</p></Link>
                            <span>{correctPrice}</span>
                        </Caption>
                    </>
                )
            }
        </ProductContainer>
    );
}

const ProductContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: ${({loading}) => loading ? 'center' : 'space-between'};
    align-items: ${({loading}) => loading ? 'center' : 'initial'};
    min-width: 170px;
    width: 13vw;
    margin-right: 20px;
    border-radius: 7px;
    box-shadow: 3px 2px 10px 1px #B7B5B2;

    img {
        width: 100%;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }
`;

const Caption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;

    p {
        font-size: 16px;
        margin-bottom: 10px;
    }

    span {
        font-size: 15px;
        font-weight: 700;
    }
`;