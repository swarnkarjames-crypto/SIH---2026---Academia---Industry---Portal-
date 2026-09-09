import { Component } from '@angular/core';

@Component({
  selector: 'app-student-opportunities',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Student</p>
      <h2>Recommended Opportunities</h2>
      <p>List internships and jobs matched to skill compatibility and eligibility.</p>

      <div class="opportunity-list">
        <div class="opportunity-item">
          <strong>Data Analyst Intern</strong>
          <span>Match: 88%</span>
        </div>
        <div class="opportunity-item">
          <strong>Business Analyst Intern</strong>
          <span>Match: 76%</span>
        </div>
      </div>
    </section>
  `,
})
export class StudentOpportunitiesComponent {}
