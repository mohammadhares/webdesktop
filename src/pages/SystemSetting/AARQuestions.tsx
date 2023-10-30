import SingleQuestion from "./SingleQuestion";

interface AARQuestionsProps {
    aarQuestion: any
}

const AARQuestions = ({ aarQuestion }: AARQuestionsProps) => {

    return (
        aarQuestion?.fields?.filter((item: any) => item.choices.length > 0).map((item: any, index: number) => (
            <SingleQuestion
                item={item}
                index={index}
                order={3}
                key={index}
            />
        ))
    )
}

export default AARQuestions;