import { Component } from '@angular/core';

@Component({
  selector: 'app-student-assessment',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Student</p>
      <h2>Skill Assessment</h2>
      <p>Assessment area for evaluating core skills, technical aptitude, and competency level.</p>

      <div class="placeholder-actions">
        <button type="button">Start Assessment</button>
      </div>
    </section>
  `,
})
export class StudentAssessmentComponent {}
