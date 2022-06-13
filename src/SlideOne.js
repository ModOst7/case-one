import {useSpring, useSpringRef, useChain, animated} from 'react-spring';

export default function SlideOne({one, two, slideOneToggle, slideTwoToggle}){
    const propsSlideOne = useSpring({
        to: {
            opacity: one? 1 : 0, 
            display: one? 'block' : 'none' 
        }, 
        from: {
            opacity: one? 0 : 1, 
            display: one? 'none' : 'block'
        }
    });

    const slideOneClick = () => {
        slideOneToggle(false);
        slideTwoToggle(true);
    }

    return <animated.div className='slide-1' style={propsSlideOne}>
    <animated.img className='slide-one-emotions' src='./img/slide1_emotions.svg'></animated.img>
    <animated.img className='slide-one-arrow-next' src='./img/slide1_arrow.svg' onClick={slideOneClick} ></animated.img>
    <animated.img className='slide-one-left-message' src='./img/slide1_left-message.svg'></animated.img>
    <animated.img className='slide-one-teacher-1' src='./img/slide1_teacher1.svg'></animated.img>
    <animated.img className='slide-one-teacher-2' src='./img/slide1_teacher2.svg'></animated.img>
    <animated.img className='slide-one-right-message' src='./img/slide1_right-message.svg'></animated.img>
  </animated.div>
}