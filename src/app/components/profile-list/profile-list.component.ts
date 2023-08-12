import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = [];

  constructor(private profileService: ProfileService) {}

  addProfile(profile: Profile) {
    // this.profileService.addProfile(profile).subscribe((profile: Profile) => {
    //   this.profiles.push(profile);
    // });
    this.profiles.push(profile);
  }

  ngOnInit(): void {
    // Sample Starting Data
    // this.profiles = [
    // {
    //   username: 'UltraNinja',
    //   playlists: ['Everything', 'Everything II'],
    // },
    // {
    //   username: 'example',
    //   playlists: ['one', 'two'],
    // },
    // ];
    // console.log(this.profiles);
  }
}
