import { Moment } from 'moment';

export interface ShowDetails {
  id: number;
  title: string;
  overview: string;
  first_air_date: string;
  next_episode_to_air: string;
  nextEpisodeLocal: Moment;
  status: string;
  poster_path: string;
  onWatchList: boolean;
  siteRating: number;
  airsTime: number;
}
