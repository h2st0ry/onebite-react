import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
    {
        emotionId: 1,
        emotionName: "행복"
    },
    {
        emotionId: 2,
        emotionName: "화남"
    },
    {
        emotionId: 3,
        emotionName: "사랑"
    },
    {
        emotionId: 4,
        emotionName: "열정"
    },
    {
        emotionId: 5,
        emotionName: "슬픔"
    },
    // {
    //     emotionId: 6,
    //     emotionName: "삐짐"
    // },
    // {
    //     emotionId: 7,
    //     emotionName: "만족"
    // },
    // {
    //     emotionId: 8,
    //     emotionName: "그냥그래"
    // },
    // {
    //     emotionId: 9,
    //     emotionName: "넘슬픔"
    // },
]

const getStringedDate = (targetDate) => {
    // 날짜 -> YYYY-MM-DD
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if (month < 10) {
        month = `0${month}`;
    }

    if (date < 10) {
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit }) => {

    const nav = useNavigate();

    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        });
    };

    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input
                    name="createdDate"
                    onChange={onChangeInput}
                    value={getStringedDate(input.createdDate)}
                    type="date" />
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem
                            onClick={() => onChangeInput({
                                target: {
                                    name: "emotionId",
                                    value: item.emotionId,
                                },
                            })}
                            key={item.emotionId} {...item} isSelected={item.emotionId === input.emotionId} />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder="오늘의 감정은 어땠나요?" />
            </section>
            <section className="button_section">
                <Button
                    onClick={() => nav(-1)} text={"취소하기"} />
                <Button
                    onClick={onClickSubmitButton}
                    text={"작성완료"} />
            </section>
        </div>)
};

export default Editor;