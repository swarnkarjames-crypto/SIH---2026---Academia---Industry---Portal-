import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-analytics',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Administration</p>
      <h2>Analytics & Reports</h2>
      <p>Track skill demand, placement trends, and internship distribution across departments.</p>

      <div class="chart-placeholder">
        <div class="bar" style="height: 55%"></div>
        <div class="bar" style="height: 75%"></div>
        <div class="bar" style="height: 90%"></div>
        <div class="bar" style="height: 62%"></div>
      </div>
    </section>
  `,
})
export class AdminAnalyticsComponent {}
