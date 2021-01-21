import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import OutterBox from '../components/OutterBox';
import MainButton from '../components/MainButton';

export default function Product () {
    const history = useHistory();
    const { id } = useParams();
    const [ clicked, setClicked ] = useState(false);
  
    return (
        <OutterBox>
            <Main>
                <PhotoSection>
                    <div className='main-photo'>
                        <img src='/images/temporary.jpeg' />
                    </div>
                    <div className='photo-menu'>
                        <img src='/images/temporary.jpeg' />
                        <img src='/images/temporary.jpeg' />
                        <img src='/images/temporary.jpeg' />
                    </div>
                </PhotoSection>

                <DescriptionSection className='description'>
                    <h2>Incensário Indiano Buddha</h2>
                    <h3>R$ 39</h3>
                    <p>
                        Incensário indiano folha canoa. Metal prateado, 22 cm e pedrinha de cores variadas: vermelho, laranja, azul, verde e roxo!
                    </p>
                    <MainButton clicked={clicked}>
                        {clicked ? 'Adicionando' : 'Adicionar'} ao carrinho
                    </MainButton>
                </DescriptionSection>
            </Main>
        </OutterBox>
    );
}

const Main = styled.main`
    display: flex;
    height: 100%;
    justify-content: space-between;
    width: 850px;

    section {
        background-color: rgba(250,250,250,0.8);
        border-radius: 25px;
        height: 600px;
        width: 400px;
    }
`;

const DescriptionSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 30px 25px 20px 25px;

    h2 {
        font-size: 26px;
    }
    h3 {
        font-size: 24px;
        margin: 20px 0;
    }
    p {
        flex-grow: 1;
        font-size: 20px;
        line-height: 30px;
        overflow: scroll;
    }
`;

//object-fit: contain;
const PhotoSection = styled.section`
    .main-photo {
        align-items: center;
        display: flex;
        height: 400px;
        width: 400px;

        img {
            max-height: 100%;
            width: 100%;
        }
    }

    .photo-menu {
        display: flex;
        height: 100%;
        margin-top: 40px;
        width: 100%;

        img {
            height: 80px;
            margin-right: 10px;
            width: 80px;
        }
    }
`;

//border-radius: 7px;
// box-shadow: 3px 2px 10px 1px #B7B5B2;