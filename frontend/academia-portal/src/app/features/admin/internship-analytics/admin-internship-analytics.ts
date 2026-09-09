import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-internship-analytics',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Administration</p>
      <h2>Internship & Placement Analytics</h2>
      <p>Review placement conversion, internship demand, and skills contributing to student employability.</p>

      <div class="chart-placeholder">
        <div class="bar" style="height: 45%"></div>
        <div class="bar" style="height: 70%"></div>
        <div class="bar" style="height: 82%"></div>
        <div class="bar" style="height: 94%"></div>
        <div class="bar" style="height: 68%"></div>
      </div>
    </section>
  `,
})
export class AdminInternshipAnalyticsComponent {}
