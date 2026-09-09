import { Component } from '@angular/core';

@Component({
  selector: 'app-industry-shortlisted-candidates',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Industry</p>
      <h2>Shortlisted Candidates</h2>
      <p>Track current shortlisted candidates, interviews scheduled, and hiring decisions.</p>

      <div class="people-list">
        <div class="person-row">
          <strong>Riya Sharma</strong>
          <span class="status success">Interview Ready</span>
        </div>
        <div class="person-row">
          <strong>Arjun Mehta</strong>
          <span class="status info">Shortlisted</span>
        </div>
        <div class="person-row">
          <strong>Sneha Patel</strong>
          <span class="status warning">Awaiting Review</span>
        </div>
      </div>
    </section>
  `,
})
export class IndustryShortlistedCandidatesComponent {}
