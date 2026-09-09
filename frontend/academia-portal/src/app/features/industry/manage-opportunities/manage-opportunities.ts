import { Component } from '@angular/core';

@Component({
  selector: 'app-industry-manage-opportunities',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Industry</p>
      <h2>Manage Opportunities</h2>
      <p>Review active openings, update eligibility criteria, and monitor application flow.</p>

      <table class="data-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Applications</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data Analyst Intern</td>
            <td>42</td>
            <td><span class="status info">Active</span></td>
          </tr>
          <tr>
            <td>Product Analyst</td>
            <td>18</td>
            <td><span class="status warning">Reviewing</span></td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
})
export class IndustryManageOpportunitiesComponent {}
