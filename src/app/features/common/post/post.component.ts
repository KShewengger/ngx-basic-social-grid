import { NgClass } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';
import { PostUser } from '@app/models';

@Component({
  selector: 'sg-post',
  standalone: true,
  templateUrl: 'post.component.html',
  styleUrl: 'post.component.scss',
  imports: [NgClass]
})
export class PostComponent {
  public post = input.required<PostUser>();
  public activePreview = input(false, { transform: booleanAttribute });
  public hideUsername = input(false, { transform: booleanAttribute });
}
