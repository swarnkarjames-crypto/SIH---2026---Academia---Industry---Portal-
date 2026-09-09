import { Component } from '@angular/core';

@Component({
  selector: 'app-student-portfolio',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Student</p>
      <h2>Digital Portfolio</h2>
      <p>Verified profile with projects, certifications, achievements, and skill evidence.</p>

      <div class="portfolio-grid">
        <div class="portfolio-item">Project: Sales Dashboard</div>
        <div class="portfolio-item">Certificate: Python Basics</div>
        <div class="portfolio-item">Achievement: Hackathon Finalist</div>
      </div>
    </section>
  `,
})
export class StudentPortfolioComponent {}
