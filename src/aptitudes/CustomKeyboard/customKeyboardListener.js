import { keyboard, whisper } from '@oliveai/ldk';
import { KeyboardWhisper } from '../../whispers';

const typedChar = 'o';
const keyboardListenChar = () => 
keyboard.listenCharacter((keyboardChar) => {
  console.log(keyboardChar);
  console.log("does this work");
    if (typedChar === keyboardChar) {
        whisper.create({
          components: [{type: whisper.WhisperComponentType.Message,
          body: keyboardChar}],
          label: "CustomKeyboardChar",
          onClose: KeyboardWhisper.onClose
        }
        )

    } else {
     console.log(`Received keyboard character: ${keyboardChar}`);
    }
});
export default { keyboardListenChar };

// const handler = (text) => {
//   const whisper = new KeyboardWhisper(text);
//   whisper.show();
// };
// const listen = () => {
//   keyboard.listenText(handler);
// };

// export { handler };
// export default { listen };