import React, { FC, MouseEvent } from 'react';

//types
import { AnswerObject } from '../App';


type Props = {
    question: string;
    answers: string[];
    callback: (e: MouseEvent<HTMLButtonElement>) => any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions
}) => (
        <div>
            <p className="number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }}></p>
            <div>
                {
                    answers.map(answer => (
                        <div key={answer}>
                            <button disabled={!!userAnswer} value={answer} onClick={callback}>Submit</button>
                            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                        </div>
                    ))
                }
            </div>
        </div>
    );

export default QuestionCard
