import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, Observable, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  loadSvg(path: string): Observable<SafeHtml> {
    return this.http.get(path, { responseType: 'text' }).pipe(
      take(1),
      map(svg => this.sanitizer.bypassSecurityTrustHtml(svg))
    );
  }
}
