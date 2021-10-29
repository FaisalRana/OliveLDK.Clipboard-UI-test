import { IntroWhisper } from './whispers';
import {
  clipboardListener,
  keyboardListener,
  networkExample,
  openHandler,
  customKeyboardListener,
} from './aptitudes';

(async function main() {
  console.log('Example Loop Started');
  clipboardListener.listen();
  // keyboardListener.listen();
  customKeyboardListener.keyboardListenChar();
  // networkExample.run();
  // openHandler.start();
  // new IntroWhisper().show();
})();
