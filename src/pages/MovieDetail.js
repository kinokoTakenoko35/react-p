import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    //moviesはh配列のため、セットする値は配列にしないとデータが取得できない
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {/* MOVIE が存在していてばDivコンテンツをレンダリングする */}
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <Recomended>
            <q>{movie.recomended}</q>
          </Recomended>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="img" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

//styled component に motion 追加するには以下のように括弧で囲う
const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px){
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Recomended = styled.div`
  padding: 0rem 0rem 10rem 0rem;
  display: flex;
  justify-content: center;
  q {
    font-size: 2rem;
    color: #cccccc;
    font-weight: lighter;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
