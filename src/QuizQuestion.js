import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

 class QuizQuestion extends Component {

    render(){
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map((answer_option, index)=><QuizQuestionButton 
                                key={index} 
                                clickHandler={this.handleClick.bind(this)}
                                button_text={answer_option}/>)
                        }                           
                    </ul>
                </section>
            </main>
        )
    }

    handleClick(button_text){
        if (button_text === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler()
        }
    }
 }


 export default QuizQuestion;