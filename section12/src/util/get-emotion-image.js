import angry from "./../assets/angry.png";
import love from "./../assets/love.png";
import passion from "./../assets/passion.png";
import sad from "./../assets/sad.png";
import salty from "./../assets/salty.png";
import satisfaction from "./../assets/satisfaction.png";
import soso from "./../assets/soso.png";
import verysad from "./../assets/verysad.png";
import happy from "./../assets/happy.png";

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return happy;
    case 2:
      return angry;
    case 3:
      return love;
    case 4:
      return passion;
    case 5:
      return sad;
    // case 6:
    //   return salty;
    // case 7:
    //   return satisfaction;
    // case 8:
    //   return soso;
    // case 9:
    //   return verysad;
  }
}
