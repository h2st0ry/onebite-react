import "./Editor.css";
import EmotionItem from "./EmotionItem";

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
    {
        emotionId: 6,
        emotionName: "삐짐"
    },
    {
        emotionId: 7,
        emotionName: "만족"
    },
    {
        emotionId: 8,
        emotionName: "그냥그래"
    },
    {
        emotionId: 9,
        emotionName: "넘슬픔"
    },
]

const Editor = () => {
    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input type="date" />
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem key={item.emotionId} {...item} />
                    ))}
                </div>
            </section>
            <section className="content_section"></section>
            <section className="button_section"></section>
        </div>)
};

export default Editor;