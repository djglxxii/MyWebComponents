import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'aeg-masked-input',
  styleUrl: 'masked-input.css',
  scoped: true,
})
export class MaskedInput {

  @Prop()
  name: string;

  @Prop()
  value: string;

  @Prop({ mutable: true, reflect: true })
  isMasked = true;

  render() {
    const icon = this.isMasked
      ? 'visibility_off'
      : 'visibility';

    return (
      <div class='container'>

        <input
          type={this.isMasked ? 'password' : 'text'}
          name={this.name}
          value={this.value} />

        <span class='material-icons'
              onClick={() => this.isMasked = !this.isMasked}
        >{icon}</span>

      </div>
    );
  }
}
