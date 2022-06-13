import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import {useSpring, useSpringRef, useChain, animated} from 'react-spring';

import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SlideFour from './SlideFour';

function App() {
  const [title, setTitle] = useState(true);
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [answer, setAnswer] = useState('');

const slideOneToggle = (state) => {
  setOne(state);
}

const slideTwoToggle = (state) => {
  setTwo(state);
}

const slideThreeToggle = (state) => {
  setThree(state);
}

const slideFourToggle = (state) => {
  setFour(state);
}

const toggleTitle = (state) => {
  setTitle(state);
}

const handleAnswer = (state) => {
  setAnswer(state);
}

  const propsTitle = useSpring({
    to: {
      opacity: title? 1 : 0, 
    }, 
    from: {
      opacity: title? 0 : 1, 
    }, 
    //from: {opacity: 0, display: 'none'}
});

  return (
    <div className="App">
      <animated.div className='title' style={propsTitle}>
        <img src='./img/slide1_title.svg'></img>
      </animated.div>
      <SlideOne one={one} two={two} slideOneToggle={slideOneToggle} slideTwoToggle={slideTwoToggle} />
      <SlideTwo one={one} two={two} title={title} slideOneToggle={slideOneToggle} slideTwoToggle={slideTwoToggle} slideThreeToggle={slideThreeToggle} toggleTitle={toggleTitle} />
      <SlideThree answer={answer} handleAnswer={handleAnswer} two={two} three={three} slideThreeToggle={slideThreeToggle} slideFourToggle={slideFourToggle}  />
      <SlideFour answer={answer} four={four} />
    </div>
  );
}

export default App;
