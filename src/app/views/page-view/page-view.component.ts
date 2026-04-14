import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

/** Vista genérica para rutas que comparten maquetación (título desde `route.data`). */
@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css'],
})
export class PageViewComponent {
  readonly title$: Observable<string>;

  constructor(route: ActivatedRoute) {
    this.title$ = route.data.pipe(map((d: Data) => (d['title'] as string) ?? ''));
  }
}
