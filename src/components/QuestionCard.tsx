import React, { FC } from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
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
                            <button disabled={userAnswer} onClick={callback}>Submit</button>
                            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                        </div>
                    ))
                }
            </div>
        </div>
    );

export default QuestionCard
