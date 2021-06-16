import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'aeg-validation-message',
  styleUrl: 'validation-message.css',
  shadow: true,
})
export class ValidationMessage {
  @State()
  showMessage: boolean = false;

  @Prop()
  message = '';

  componentWillLoad() {
    this.showMessage = this.message.length > 0;
  }

  render() {
    let messageCss = 'message';
    if (this.showMessage){
      messageCss += ' show';
    }

    return (
      <div class='container' onChange={() => this.showMessage = false}>
        <slot />
        <div class={messageCss}>{this.message}</div>
      </div>
    );
  }
}
