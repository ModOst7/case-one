import {useSpring, useSpringRef, useChain, animated} from 'react-spring';

export default function SlideOne({one, two, slideOneToggle, slideTwoToggle}){
    const slideOneRef = useSpringRef();
    const leftMessageRef = useSpringRef();
    const arrowNextRef = useSpringRef();
    const emotionsRef = useSpringRef();
    const teacherOneRef = useSpringRef();
    const teacherTwoRef = useSpringRef();
    const rightMessageRef = useSpringRef();

    const propsLeftMessage = useSpring({ref: leftMessageRef, to: {opacity: 1, left: '10%'}, from: {opacity: 0, left: '-60%'}});
    const propsTeacherOne = useSpring({ref: teacherOneRef, to: {opacity: 1, left: '14%', marginTop: '17%'}, from: {opacity: 0, left: '-60%', marginTop: '60%'}});
    const propsRightMessage = useSpring({ref: rightMessageRef, to: {opacity: 1, left: '54%', marginTop: '37.5%'}, from: {opacity: 0, left: '80', marginTop: '60%'}});
    const propsTeacherTwo = useSpring({ref: teacherTwoRef, to: {opacity: 1, left: '59.2%'}, from: {opacity: 0, left: '80%'}});
    const propsEmotions = useSpring({ref: emotionsRef, to: {opacity: 1}, from: {opacity: 0}});
    const propsArrowNext = useSpring({ref: arrowNextRef, to: {opacity: 1}, from: {opacity: 0}});

    const propsSlideOne = useSpring({
        ref: slideOneRef,
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

    useChain([slideOneRef, leftMessageRef, teacherOneRef, rightMessageRef, teacherTwoRef, emotionsRef, arrowNextRef], [0, 0.3, 0.5, 0.9, 1.1, 1.3, 1.8]);
// <animated.img style={propsArrowNext} className='slide-one-arrow-next' src='./img/slide1_arrow.svg' onClick={slideOneClick} ></animated.img>
    return <animated.div className='slide-1' style={propsSlideOne}>
    <animated.img style={propsEmotions} className='slide-one-emotions' src='./img/slide1_emotions.svg'></animated.img>
    <animated.svg style={propsArrowNext} className='slide-one-arrow-next' onClick={slideOneClick} id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.41 175.54"><defs><style>{`.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:9.38px;}`}</style></defs><path className="cls-1" d="M4.69,4.69l86,86-86,80.13"/></animated.svg>
    <animated.img style={propsLeftMessage} className='slide-one-left-message' src='./img/slide1_left-message.svg'></animated.img>
    <animated.img style={propsTeacherOne} className='slide-one-teacher-1' src='./img/slide1_teacher1.svg'></animated.img>
    <animated.img style={propsTeacherTwo} className='slide-one-teacher-2' src='./img/slide1_teacher2.svg'></animated.img>
    <animated.img style={propsRightMessage} className='slide-one-right-message' src='./img/slide1_right-message.svg'></animated.img>
  </animated.div>
}