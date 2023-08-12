export class Profile {
  // The username of the profile
  username!: string;
  // The name of the profile
  profileName!: string;
  // A list of playlists titles that profile has
  playlists!: string[];

  nameUri!: string;

  playlistUri!: string[];

  content!: HTMLElement[];
}
