import { Moment } from 'moment';
import { Episode } from '../interfaces/episode';

export interface Season {
  show_id: string;
  id: string;
  season_number: number;
  name: string;
  overview: string;
  poster_path: string;
  air_date: Moment;
  episodes: Episode[];
}
