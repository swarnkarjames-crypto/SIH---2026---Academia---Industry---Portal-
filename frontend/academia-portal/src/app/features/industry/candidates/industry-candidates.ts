import { Component } from '@angular/core';

@Component({
  selector: 'app-industry-candidates',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Industry</p>
      <h2>Candidate Matching</h2>
      <p>View candidates matching the required skill profile and eligibility criteria.</p>

      <table class="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Match %</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Asha Verma</td>
            <td>91%</td>
            <td><span class="status info">Reviewed</span></td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
})
export class IndustryCandidatesComponent {}
