import QuestionModel from "../../model/questionModel";
import AnswerModel from "../../model/answerModel";

const questions: QuestionModel[] = [
    new QuestionModel(202, 'Which animal transmits Chagas disease?', [
        AnswerModel.wrong('Bee'),
        AnswerModel.wrong('Cockroach'),
        AnswerModel.wrong('Flea'),
        AnswerModel.certain('Barbeiro'),
    ]),
    new QuestionModel(203, 'What is the collective of dogs?', [
        AnswerModel.wrong('Herd'),
        AnswerModel.wrong('Wolf Pack'),
        AnswerModel.wrong('Flock'),
        AnswerModel.certain('Pack'),
    ]),
    new QuestionModel(204, 'What is the triangle that has all the different sides?', [
        AnswerModel.wrong('Equilateral'),
        AnswerModel.wrong('Isosceles'),
        AnswerModel.wrong('Trapeze'),
        AnswerModel.certain('Scalene'),
    ]),
    new QuestionModel(205, 'Who composed the Brazilian Independence Anthem?', [
        AnswerModel.wrong('Castro Alves'),
        AnswerModel.wrong('Manuel Bandeira'),
        AnswerModel.wrong('Carlos Gomes'),
        AnswerModel.certain('Dom Pedro I'),
    ]),
    new QuestionModel(206, 'What is the antonym of "lose out"?', [
        AnswerModel.wrong('Lose'),
        AnswerModel.wrong('Lose out'),
        AnswerModel.wrong('Despise'),
        AnswerModel.certain('Get'),
    ]),
    new QuestionModel(207, 'Who was the last President of the period of the military dictatorship in Brazil?', [
        AnswerModel.wrong('Costa e Silva'),
        AnswerModel.wrong('Emílio Médici'),
        AnswerModel.wrong('Ernesto Geisel'),
        AnswerModel.certain('João Figueiredo'),
    ]),
    new QuestionModel(208, 'Following the sequence of the deck, which card comes after ten?', [
        AnswerModel.wrong('Ace'),
        AnswerModel.wrong('Nine'),
        AnswerModel.wrong('King'),
        AnswerModel.certain('Jack'),
    ]),
    new QuestionModel(209, 'The adjective "venous" is related to:', [
        AnswerModel.wrong('Candle'),
        AnswerModel.wrong('Wind'),
        AnswerModel.wrong('Curtsey'),
        AnswerModel.certain('Vein'),
    ]),
    new QuestionModel(210, 'What name is given to purification through water?', [
        AnswerModel.wrong('Abruption'),
        AnswerModel.wrong('Abolition'),
        AnswerModel.wrong('Abnegation'),
        AnswerModel.certain('Ablution'),
    ]),
    new QuestionModel(211, 'Which mountain lies between the Tibet-Nepal border?', [
        AnswerModel.wrong('Mont Blanc'),
        AnswerModel.wrong('Mont Fuji'),
        AnswerModel.wrong('Mont Carlo'),
        AnswerModel.certain('Mont Everest'),
    ]),
    new QuestionModel(212, 'In which part of the body is the epiglottis found?', [
        AnswerModel.wrong('Stomach'),
        AnswerModel.wrong('Pancreas'),
        AnswerModel.wrong('Kidney'),
        AnswerModel.certain('Neck'),
    ]),
    new QuestionModel(213, 'The compensation for loss is called...', [
        AnswerModel.wrong('Deficit'),
        AnswerModel.wrong('Indexing'),
        AnswerModel.wrong('Indebtedness'),
        AnswerModel.certain('Indemnity'),
    ]),
]

export default questions