import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice"

function Trending() {
    // function refreshPage() {
    //     window.location.reload(false);
    //   }
    const movies = useSelector(selectTrending);



    return (
        <Container>
            <h4>Trending</h4>

            <Content>
                {
                    movies && movies.map((movie, key) => (

                        <Wrap key={key}>

                           
                                <Link to={'/detail/'+ movie.id}>
                                    <img src={movie.cardImg} alt={movie.title} />
                                </Link>
                           
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Trending

const Container = styled.div`
    padding-bottom: 50px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0,1fr));
    }
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /75%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 /72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }

`