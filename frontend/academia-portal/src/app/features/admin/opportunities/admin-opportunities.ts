import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-opportunities',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Administration</p>
      <h2>Opportunity Overview</h2>
      <p>Monitor internship and placement openings across departments and industry partners.</p>

      <table class="data-table">
        <thead>
          <tr>
            <th>Organization</th>
            <th>Role</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Finora Labs</td>
            <td>Data Analyst Intern</td>
            <td>CSE</td>
          </tr>
          <tr>
            <td>NextGen Systems</td>
            <td>Business Analyst</td>
            <td>Management</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
})
export class AdminOpportunitiesComponent {}
