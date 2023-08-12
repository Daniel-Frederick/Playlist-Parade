import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.css'],
})
export class SingleProfileComponent implements OnInit {
  @Input() profile!: Profile;

  ngOnInit(): void {
    // Adds a link to the User Profile's name
    var nodes = document.querySelectorAll('#profilename');
    var last = nodes[nodes.length - 1];
    last.setAttribute('href', this.profile.nameUri);

    for (let i = 0; i < this.profile.content.length - 1; i++) {
      document.querySelectorAll('.flex-container').forEach((element) => {
        // console.log('does this even work: ', element);
        element.append(this.profile.content[i]);
      });
    }
  }
}
