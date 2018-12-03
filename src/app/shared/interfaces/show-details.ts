import { Moment } from 'moment';
import { Season } from './season';

export interface ShowDetails {
  id: number;
  title: string;
  overview: string;
  first_air_date: string;
  next_episode_to_air: {
    air_date: string;
  };
  nextEpisodeLocal: Moment | string;
  status: string;
  poster_path: string;
  onWatchList: boolean;
  siteRating: number;
  airsTime: number;
  seasons: Season[];
}
