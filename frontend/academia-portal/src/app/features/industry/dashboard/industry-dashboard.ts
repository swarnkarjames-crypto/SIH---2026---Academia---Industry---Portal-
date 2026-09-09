import { Component } from '@angular/core';

@Component({
  selector: 'app-industry-dashboard',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Industry</p>
      <h2>Industry Dashboard</h2>
      <p>Track posted internships, candidate matches, and hiring pipeline health.</p>

      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-label">Active Jobs</span>
          <strong>07</strong>
        </div>
        <div class="stat-card">
          <span class="stat-label">Shortlisted</span>
          <strong>19</strong>
        </div>
      </div>
    </section>
  `,
})
export class IndustryDashboardComponent {}
