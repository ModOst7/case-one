import {useSpring, useSpringRef, useChain, animated} from 'react-spring';

export default function SlideTwo({one, two, slideOneToggle, slideTwoToggle, slideThreeToggle, toggleTitle}){
    const propsSlideTwo = useSpring({
        to: {
            opacity: two? 1 : 0, 
            display: two? 'block' : 'none' 
        }, 
        from: {
            opacity: two? 0 : 1, 
            display: two? 'none' : 'block'
        }
    });

    const slideTwoClickPrev = () => {
        slideTwoToggle(false);
        slideOneToggle(true);
    }

    const slideTwoClickNext = () => {
        slideTwoToggle(false);
        slideThreeToggle(true);
        toggleTitle(false);
    }

    return  <animated.div className='slide-2' style={propsSlideTwo}>
        <animated.img className='slide-two-left-kids' src='./img/slide2_left-kids.svg'></animated.img>
        <animated.img className='slide-two-left-message' src='./img/slide2_left-message.svg'></animated.img>
        <animated.img className='slide-two-right-kid' src='./img/slide2_right-kid997.svg'></animated.img>
        <animated.img className='slide-two-molniya' src='./img/slide2_molniya.svg'></animated.img>
        <animated.img className='slide-two-right-message' src='./img/slide2_right-message.svg'></animated.img>
        <animated.img className='slide-two-teacher' src='./img/slide2_teacher.svg'></animated.img>
        <animated.img className='slide-two-arrow-left' src='./img/slide2_arrow-left.svg' onClick={slideTwoClickPrev} ></animated.img>
        <animated.img className='slide-two-arrow-right' src='./img/slide2_arrow-right.svg' onClick={slideTwoClickNext} ></animated.img>
      </animated.div>
}