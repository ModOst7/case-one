import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import {useSpring, useSpringRef, useChain, animated} from 'react-spring';

export default function SlideThree({answer, handleAnswer, two, three, slideThreeToggle, slideFourToggle}) {

    const propsSlideThree = useSpring({
        to: {
            opacity: three? 1 : 0, 
            display: three? 'block' : 'none' 
        }, 
        from: {
            opacity: three? 0 : 1, 
            display: three? 'none' : 'block'
        }
    });

    const handleChange = (event) => {
        console.log(event.target.value);
        handleAnswer(event.target.value);
    }

    const putAnswer = () => {
        slideThreeToggle(false);
        slideFourToggle(true);
        //handleAnswer(answer.replace(/\n/g, "&#013"));
    }

    return <animated.div className='slide-3' style={propsSlideThree}>
    <animated.img className='slide-three-teacher' src='./img/slide3_teacher.svg'></animated.img>
    <animated.img className='slide-three-question' src='./img/slide3_message.svg'></animated.img>
    <animated.div className='slide-three-answer-block'>
      <animated.div className='answer'>Ответ:</animated.div>
      <animated.div className='text-block'>
        <textarea wrap={'soft'} className='text' onChange={handleChange} ></textarea>
      </animated.div>
      <animated.div className='button'><button onClick={putAnswer}>КНОПКА</button></animated.div>
    </animated.div>
  </animated.div>
}