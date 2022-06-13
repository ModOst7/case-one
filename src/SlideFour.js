import {useSpring, useSpringRef, useChain, animated} from 'react-spring';
import { Preview, print } from "react-html2pdf";

export default function SlideFour({answer, four}) {

    const propsSlideFour = useSpring({
        to: {
            opacity: four? 1 : 0, 
            display: four? 'flex' : 'none' 
        }, 
        from: {
            opacity: four? 0 : 1, 
            display: four? 'none' : 'flex'
        }
    });

    return <animated.div className='slide-4' style={propsSlideFour}>
    <Preview id={'pdf'}>
        <animated.div className='slide-four-answer'>Ваш ответ:</animated.div>
        <animated.div className='slide-four-your-answer-text'>{answer}</animated.div>
        <animated.div className='slide-four-right-answer'>Верный ответ:</animated.div>
        <animated.div className='slide-four-right-answer-text'>верный ответ</animated.div>
    </Preview>
    <animated.div className='slide-four-buttons'>
      <button className='slide-four-save-button' onClick={() => print("a", "pdf")}>СОХРАНИТЬ</button>
      <button className='slide-four-print-button' onClick={() => window.print()}>ПЕЧАТЬ</button>
    </animated.div>
  </animated.div>
}