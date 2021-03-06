import { whisper } from '@oliveai/ldk';
import { stripIndent } from 'common-tags';

export default class NetworkWhisper {
  constructor(recalls) {
    this.whisper = undefined;
    this.label = 'Example for Network Aptitude (FDA Recalls)';
    this.props = {
      recalls,
    };
  }

  createComponents() {
    const components = [];
    this.props.recalls.forEach((recall) => {
      components.push({
        type: whisper.WhisperComponentType.Link,
        text: `${recall.recalling_firm} (${recall.recall_initiation_date})`,
        onClick: () => {
          const markdown = stripIndent`
          # Recalling Firm
          ${recall.recalling_firm}
          # Recall Number
          ${recall.recall_number}
          # Product Description
          ${recall.product_description}
          # Reason for Recall
          ${recall.reason_for_recall}
          `;

          whisper.create({
            label: `Recall for ${recall.recalling_firm}`,
            components: [
              {
                type: whisper.WhisperComponentType.Markdown,
                body: markdown,
              },
            ],
          });
        },
      });
    });

    return components;
  }

  show() {
    whisper
      .create({
        components: this.createComponents(),
        label: this.label,
        onClose: NetworkWhisper.onClose,
      })
      .then((newWhisper) => {
        this.whisper = newWhisper;
      });
  }

  close() {
    this.whisper.close(NetworkWhisper.onClose);
  }

  static onClose(err) {
    if (err) {
      console.error('There was an error closing Network whisper', err);
    }
    console.log('Network whisper closed');
  }
}
