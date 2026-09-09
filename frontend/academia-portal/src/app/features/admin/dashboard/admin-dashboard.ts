import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Administration</p>
      <h2>Admin Dashboard</h2>
      <p>Monitor student progress, institution internship demand, and performance analytics.</p>

      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-label">Students</span>
          <strong>1200</strong>
        </div>
        <div class="stat-card">
          <span class="stat-label">Placements</span>
          <strong>230</strong>
        </div>
      </div>
    </section>
  `,
})
export class AdminDashboardComponent {}
