import { Component, EventEmitter, Output } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import axios from 'axios';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css'],
})
export class AddProfileComponent {
  @Output() addProfile: EventEmitter<any> = new EventEmitter();

  username!: string;
  profileNotFound = false;

  async onSubmit() {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/user_profile/',
      params: {
        id: this.username,
        playlistLimit: '15',
        artistLimit: '15',
      },
      headers: {
        'X-RapidAPI-Key': '06e79c5f01msh5a2b2aae3e6477ap144ae3jsnd7b4d9848667',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const result = response.data;
      // console.log(result);

      let playlistList: string[] = [];
      let playlistUri: string[] = [];
      let content: HTMLElement[] = [];
      for (let i = 0; i < result.public_playlists.length; i++) {
        // console.log(result.public_playlists[i]);
        // let uri = result.uri;
        playlistList.push(result.public_playlists[i].name);
        playlistUri.push(result.public_playlists[i].uri);
        const dec = document.createElement('article');
        dec.classList.add('stylePlaylists');
        dec.innerHTML = `
        <a href="${result.public_playlists[i].uri}">
          <p>${result.public_playlists[i].name}</p>
        <a/>
        `;
        content.push(dec);
      }
      console.log('before', result.uri);

      const profile = {
        username: this.username, // username of profile
        profileName: result.name, // name of profile
        playlists: playlistList.join('   -    \n'), // array of public spotify playlists
        nameUri: result.uri, // url to spotify profile
        playlistUri: playlistUri, // array of urls to playlists
        content: content, // Array of HTML for playlists
      };

      console.log('after', profile.nameUri);

      console.log(content);
      console.log(profile.content);
      this.profileNotFound = false;
      this.addProfile.emit(profile);
    } catch (error) {
      console.error(error);
      this.profileNotFound = true;
    }
  }
}
