import './Recipe.css';
import { useState } from 'react';
import ListComponent from './ListComponent';
import PropTypes from 'prop-types';

export default function Recipe(props) {
  const [pictureShowing, togglePicture] = useState(true);

  const { name, ingredients, directions, picture } = props.recipe || {};

  if (!name) {
    return (<div>loading...</div>)
  }
  return (
    <div>
      <h2>{name}</h2>
      {pictureShowing ? <img src={picture} /> : null}
      <br />
      <button className="btn btn-primary" onClick={() => togglePicture(!pictureShowing)}>{pictureShowing ? 'hide picture' : 'show picture'}</button>
      <ListComponent name="ingredients" list={ingredients} />
      <ListComponent name="directions" list={directions} />
    </div>
  )
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    directions: PropTypes.arrayOf(PropTypes.string).isRequired

  }).isRequired
};
