import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
  <div>
  <h2>I like {name}</h2>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
{
  id:1,
  name: 'Kimchi',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UWSVhd7ruaKRcwspRSnKrAHaEK%26pid%3DApi&f=1',
  rating: 5,
},
{
  id:2,
  name: 'Samgyeopsal',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a79JJZowEkUR0ngQsXgJYwHaEK%26pid%3DApi&f=1',
  rating: 4.9,
},
{
  id:3,
  name: 'Bibimbap',
  image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PdWMa_FQWmv9tJmDnTp7fwHaE8%26pid%3DApi&f=1',
  rating: 3.5,
},
{
  id:4,
  name:'Doncasu',
  image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ckM2xs1d1jfhLUyGS3kApwHaLH%26pid%3DApi&f=1',
  rating: 5,
},
{
  id:5,
  name: 'Kimbap',
  image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ay3kZ7klIDPbNrS8dc4GXAHaEe%26pid%3DApi&f=1',
  rating: 1,
},
];

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image}
      rating={dish.rating} />
    ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
