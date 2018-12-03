import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Season } from '../interfaces/season';
import { ApiCallerService } from '../services/apiCaller.service';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class SeasonDetailResolverService implements Resolve<Season> {

  season: Season;

  constructor(
    private apiCaller: ApiCallerService,
    private router: Router,
    private route: ActivatedRoute) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Season> | Observable<never> {
    const season_id = route.paramMap.get('seasonId');
    const show_id = route.paramMap.get('showId');

   return this.apiCaller.getSeasonDetails(+show_id, +season_id).pipe(
     take(1),
     mergeMap(season => {
       if (season) {
         return of(season);
       } else {
         return EMPTY;
       }
     })
   );
  }

}
