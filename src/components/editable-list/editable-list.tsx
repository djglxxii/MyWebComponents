import {
  Component,
  h,
  Prop,
  State,
} from '@stencil/core';

@Component({
  tag: 'aegis-editable-list',
  styleUrl: 'editable-list.css',
  scoped: true,
})
export class EditableList {
  @State()
  parsedData: any[];

  @Prop()
  propertyName: string;

  @Prop()
  value: string;

  componentWillLoad() {
    console.log(this.value);
    //this.parsedData = JSON.parse(this.value);
  }

  render() {
    return (
      <div>
        <input id={this.propertyName}
               name={this.propertyName}
               type='hidden'
               value={this.value} />
      </div>
    );
  }
}


