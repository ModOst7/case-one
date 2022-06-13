import {useSpring, useSpringRef, useChain, animated} from 'react-spring';
import {useEffect} from 'react';

export default function SlideTwo({one, two, slideOneToggle, slideTwoToggle, slideThreeToggle, toggleTitle}){
    const slideTwoRef = useSpringRef();
    const leftMessageRef = useSpringRef();
    const rightMessageRef = useSpringRef();
    const leftKidsRef = useSpringRef();
    const rightKidRef = useSpringRef();
    const molniyaRef = useSpringRef();
    const teacherRef = useSpringRef();
    const arrowLeftRef = useSpringRef();
    const arrowRightRef = useSpringRef();
    const kidContainerRef = useSpringRef();

    const propsLeftMessage = useSpring({ref: leftMessageRef, to: {opacity: 1, left: '3%'}, from: {opacity: 0, left: '-60%'}});
    const propsLeftKids = useSpring({ref: leftKidsRef, to: {opacity: 1}, from: {opacity: 0}});
    const propsTeacher = useSpring({ref: teacherRef, to: {opacity: 1}, from: {opacity: 0}});
    const propsMolniya = useSpring({ref: molniyaRef, to: {opacity: 1}, from: {opacity: 0}, config: {duration: 1000}});
    const propsRightKid = useSpring({ref: rightKidRef, to: {left: '55%'}, from: {left:'49%'}, config: {duration: 3000}});
    const propsRightMessage = useSpring({ref: rightMessageRef, to: {opacity: 1, left: '57%'}, from: {opacity: 0, left: '80%'}});
    const propsArrowLeft = useSpring({ref: arrowLeftRef, to: {opacity: 1}, from: {opacity: 0}});
    const propsArrowRight = useSpring({ref: arrowRightRef, to: {opacity: 1}, from: {opacity: 0}});
    const propsKidContainer = useSpring({ref: kidContainerRef, to: {opacity: 1}, from: {opacity: 0}, config: {duration: 2000}});

       

        


    const propsSlideTwo = useSpring({
        ref: slideTwoRef,
        to: {
            opacity: two? 1 : 0, 
            display: two? 'block' : 'none' 
        }, 
        from: {
            opacity: two? 0 : 1, 
            display: two? 'none' : 'block'
        }
    });

    useChain(two? [slideTwoRef, leftKidsRef, leftMessageRef, teacherRef, molniyaRef, kidContainerRef, rightKidRef, rightMessageRef, arrowLeftRef, arrowRightRef] : [slideTwoRef], [0, 0.3, 0.6, 1.5, 1.55, 2.0, 2.0, 3.0, 3.5, 3.6]);

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
        <animated.img style={propsLeftKids} className='slide-two-left-kids' src='./img/slide2_left-kids.svg'></animated.img>
        <animated.img style={propsLeftMessage} className='slide-two-left-message' src='./img/slide2_left-message.svg'></animated.img>
        <animated.div style={propsKidContainer}>
            <animated.img style={propsRightKid} className='slide-two-right-kid' src='./img/slide2_right-kid997.svg'></animated.img>
        </animated.div>
        <animated.img style={propsMolniya} className='slide-two-molniya' src='./img/slide2_molniya.svg'></animated.img>
        <animated.img style={propsRightMessage} className='slide-two-right-message' src='./img/slide2_right-message.svg'></animated.img>
        <animated.img style={propsTeacher} className='slide-two-teacher' src='./img/slide2_teacher.svg'></animated.img>
        <animated.img style={propsArrowLeft} className='slide-two-arrow-left' src='./img/slide2_arrow-left.svg' onClick={slideTwoClickPrev} ></animated.img>
        <animated.img style={propsArrowRight} className='slide-two-arrow-right' src='./img/slide2_arrow-right.svg' onClick={slideTwoClickNext} ></animated.img>
      </animated.div>
}