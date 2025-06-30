import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

const EmotionItem = ({ emotionId, emotionName }) => {
    return (
        <div>
            <img src={getEmotionImage(emotionId)} />
            <div>{emotionName}</div>
        </div>
    );
};

export default EmotionItem;