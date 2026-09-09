import { Component } from '@angular/core';

@Component({
  selector: 'app-student-applications',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Student</p>
      <h2>Applications Tracking</h2>
      <p>Track application status, review progress, and monitor interview follow-ups.</p>

      <table class="data-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Status</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data Analyst Intern</td>
            <td><span class="status success">Shortlisted</span></td>
            <td>12 Sep</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
})
export class StudentApplicationsComponent {}
