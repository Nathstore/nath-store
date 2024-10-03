import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleService {
  private idleTimeout: any;
  private readonly IDLE_TIME: number = 10 * 60 * 1000; // 10 minutes in milliseconds
  private idle$: Subject<boolean> = new Subject();

  constructor(private router: Router, private zone: NgZone) {
    this.resetTimeout();
    this.setupActivityListeners();
  }

  private setupActivityListeners(): void {
    ['mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
      window.addEventListener(event, () => this.resetTimeout());
    });
  }

  private resetTimeout(): void {
    clearTimeout(this.idleTimeout);
    this.startTimeout();
  }

  private startTimeout(): void {
    this.zone.runOutsideAngular(() => {
      this.idleTimeout = setTimeout(() => {
        this.logoutUser();
      }, this.IDLE_TIME);
    });
  }

  private logoutUser(): void {
    // You can call your logout method here
    this.router.navigate(['/login']);
    this.idle$.next(true); // Optionally emit an event when the user is logged out
  }

  get idleStatus() {
    return this.idle$.asObservable();
  }
}
