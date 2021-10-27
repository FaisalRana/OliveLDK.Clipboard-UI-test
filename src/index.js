import { IntroWhisper } from './whispers';
import {
  clipboardListener,
  keyboardListener,
  networkExample,
  openHandler,
} from './aptitudes';

(async function main() {
  console.log('Example Loop Started');
  clipboardListener.listen();
  keyboardListener.listen();
  networkExample.run();
  openHandler.start();
  new IntroWhisper().show();
})();
