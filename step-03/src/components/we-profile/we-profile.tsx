import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'we-profile',
  styleUrl: 'we-profile.css',
  shadow: true,
})
export class WeProfile {

  @Prop() name: string;

  @Prop() profileTitle: string;

  @Prop() img: string;

  render() {
    return (
      <Host>
        <figure class="wrapper">
          <img src={this.img} />
          <figcaption>
            <div class="name">{this.name}</div>
            <div class="title">{this.profileTitle}</div>
          </figcaption>
        </figure>
      </Host>
    );
  }

}
