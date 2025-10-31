
import Click from '@assets/media/Click.mp3';
import Swipe from '@assets/media/Swipe.mp3';
import Bubble from '@assets/media/Bubble.mp3';

export default function useAudio() {
    return {
        sound: { Click, Swipe, Bubble },
        playSound(sound:any ) {
            const _audio = new Audio(sound);

            _audio.currentTime = 0;
            _audio.play();
        }
    }
}