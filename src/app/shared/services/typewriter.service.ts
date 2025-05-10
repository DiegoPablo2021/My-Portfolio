import { Injectable } from '@angular/core';
import { Observable, interval, of, from, concat } from 'rxjs';
import { map, take, delay, ignoreElements, concatMap, repeat } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {
  private type({ word, speed, backwards = false }: { word: string; speed: number; backwards?: boolean }): Observable<string> {
    const length = word.length;
    return interval(speed).pipe(
      map(i => {
        if (backwards) {
          return word.substring(0, length - i);
        } else {
          return word.substring(0, i + 1);
        }
      }),
      take(length + 1)
    );
  }

  private typeEffect(word: string): Observable<string> {
    return concat(
      this.type({ word, speed: 100 }),
      of('').pipe(delay(1500), ignoreElements()),
      this.type({ word, speed: 40, backwards: true }),
      of('').pipe(delay(500), ignoreElements())
    );
  }

  getTypewriterEffect(titles: string[]): Observable<string> {
    return from(titles).pipe(
      concatMap(title => this.typeEffect(title)),
      repeat()
    );
  }
}