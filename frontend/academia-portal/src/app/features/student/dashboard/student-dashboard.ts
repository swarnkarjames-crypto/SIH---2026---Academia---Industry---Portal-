import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Student</p>
      <h2>Student Dashboard</h2>
      <p>Overview of profile strength, skill gaps, internship matches, and applications.</p>

      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-label">Skill Match</span>
          <strong>82%</strong>
        </div>
        <div class="stat-card">
          <span class="stat-label">Open Opportunities</span>
          <strong>14</strong>
        </div>
        <div class="stat-card">
          <span class="stat-label">Applications</span>
          <strong>05</strong>
        </div>
      </div>
    </section>
  `,
})
export class StudentDashboardComponent {}
