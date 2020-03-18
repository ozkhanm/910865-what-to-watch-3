import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {createStore} from "redux";

import AddReview from "./add-review";

import reducer from "../../reducer/reducer";

const films = [
  {
    name: `Film#1`,
    picture: `picture#1`,
    genre: `genre#1`,
    id: 1,
    releaseDate: `2020`,
    ratingScore: 1,
    ratingsNumber: 2,
    director: `Director#1`,
    starring: [`Actor#1`, `Actor#2`, `Actor#3`, `Actor#4`],
    description: `Test paragraph #1.`,
    preview: `preview#1`,
    runTime: 130,
    previewImage: `preview image#1`,
    videoLink: `video link#1`,
    isFavorite: false,
    backgroundColor: `background color#1`,
    backgroundImage: `background image#1`,
  },
  {
    name: `Film#2`,
    picture: `picture#2`,
    genre: `genre#2`,
    id: 2,
    releaseDate: `2021`,
    ratingScore: 2,
    ratingsNumber: 3,
    director: `Director#2`,
    starring: [`Actor#5`, `Actor#6`, `Actor#7`, `Actor#8`],
    description: `Test paragraph #2.`,
    preview: `preview#2`,
    runTime: 131,
    previewImage: `preview image#2`,
    videoLink: `video link#2`,
    isFavorite: false,
    backgroundColor: `background color#2`,
    backgroundImage: `background image#2`,
  },
  {
    name: `Film#3`,
    picture: `picture#3`,
    genre: `genre#3`,
    id: 3,
    releaseDate: `2022`,
    ratingScore: 3,
    ratingsNumber: 4,
    director: `Director#2`,
    starring: [`Actor#9`, `Actor#10`, `Actor#11`, `Actor#12`],
    description: `Test paragraph #3.`,
    preview: `preview#3`,
    runTime: 132,
    previewImage: `preview image#3`,
    videoLink: `video link#3`,
    isFavorite: false,
    backgroundColor: `background color#3`,
    backgroundImage: `background image#3`,
  },
];

it(`AddReview component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(reducer)}>
          <AddReview
            film={films[0]}
            films={films}
            activeCard={0}
            postReview={() => {}}
            changeActiveCard={() => {}}
            id={0}
            updateCommentsList={() => {}}
            textAreaChangeHandler={() => {}}
            formSubmitHandler={() => {}}
            radioButtonClickHandler={() => {}}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
