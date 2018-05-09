import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'pfng-block-copy',
  templateUrl: './block-copy.component.html',
  styleUrls: ['./block-copy.component.less']
})

export class BlockCopyComponent implements OnInit {

  tokenPanelOpen: boolean = false;

  tmpString: string = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBsTDB2WHM5WVJWcVpNb3d5dzh1TkxSX3lyMGlGYW96ZFFrOXJ6cTJPVlUiLCJ0eXAiOiJKV1QifQ.eyJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vYXV0aC5vcGVuc2hpZnQuaW8iLCJodHRwczovL29wZW5zaGlmdC5pbyJdLCJhcHByb3ZlZCI6dHJ1ZSwiYXVkIjoiZmFicmljOC1vbmxpbmUtcGxhdGZvcm0iLCJhdXRoX3RpbWUiOjE1MjU4MDE5MjgsImF6cCI6ImZhYnJpYzgtb25saW5lLXBsYXRmb3JtIiwiZW1haWwiOiJtc3BheG1hbkByZWRoYXQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV4cCI6MTUyODM5MzkyOCwiZmFtaWx5X25hbWUiOiJTcGF4bWFuIiwiZ2l2ZW5fbmFtZSI6Ik1pY2hhZWwiLCJpYXQiOjE1MjU4MDE5MjgsImlzcyI6Imh0dHBzOi8vc3NvLm9wZW5zaGlmdC5pby9hdXRoL3JlYWxtcy9mYWJyaWM4IiwianRpIjoiNGI2YTZkMjctZTM0Yi00YWRiLThhOTEtYTM4NWFjOGZhOGE0IiwibmFtZSI6Ik1pY2hhZWwgU3BheG1hbiIsIm5iZiI6MCwicHJlZmVycmVkX3VzZXJuYW1lIjoibXNwYXhtYW4iLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX0sImJyb2tlciI6eyJyb2xlcyI6WyJyZWFkLXRva2VuIl19fSwic2Vzc2lvbl9zdGF0ZSI6IjE4Zjg0MDRlLWY4NjQtNDdiZS1iNWNlLTQ3M2I1N2RmNzFjZiIsInN1YiI6IjIyYWNiYzFhLTE0Y2QtNGIwYS1iZGVmLThmYjQyYjE4OGQ3NyIsInR5cCI6IkJlYXJlciJ9.Mkq-hF0P7mHam8MnkMLnLnTtpcCK0vy1dESHxPXQdrn2vYSRFHgNPujI_pqhmCGu2ietHFKm5G-qjFUubYMQZb1lOjxXwkxBxTfeli2C3Jc0aNEhYnDB__th2preo4XQT0DcdBo82gia41VLc_qmhr0yqbau-YjLkn0SLqJx8hg1FJtgQGLFLX9zeCUKWtujg2POZGqgYiwCWXdOpPc22PFi58rbghorzCclOjCqaymGBiIELdJFVeRrLYWl5MKOQYoyFxJrsfogrCFUFin9wJjuDqBAQaHmtN2rYY-ql8pq63S2Zh396jQNETU1wcHQ6R8uDm5GXHOkj61Grn4gBg';

  /**
   * The default constructor
   */
  constructor() {}

  /**
   * Toggle copy token panel open and close
   */
  toggleTokenPanel(): void {
    console.log('attempting to toggle token panel');
    this.tokenPanelOpen = !this.tokenPanelOpen;
  }

  copyTokenToClipboard(): void {
    console.log('attempting to copy');
  }

  ngOnInit(): void {
    console.log('block copy on init!');
  }
}