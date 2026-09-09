import { Component } from '@angular/core';

@Component({
  selector: 'app-student-skill-gap',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Student</p>
      <h2>Skill Gap Analysis</h2>
      <p>Compare your current skill set with target internship or job requirements.</p>

      <ul class="list-box">
        <li>Missing: Power BI</li>
        <li>Missing: Data Visualization</li>
        <li>Recommended: Complete SQL practice module</li>
      </ul>
    </section>
  `,
})
export class StudentSkillGapComponent {}
