import { Component } from '@angular/core';

@Component({
  selector: 'app-post-opportunity',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Industry</p>
      <h2>Post Opportunity</h2>
      <p>Publish internship, job, or project openings with required skills and eligibility.</p>

      <div class="placeholder-actions">
        <button type="button">Create Opportunity</button>
      </div>
    </section>
  `,
})
export class PostOpportunityComponent {}
