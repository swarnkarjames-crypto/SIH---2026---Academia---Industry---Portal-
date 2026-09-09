import { Component } from '@angular/core';

@Component({
  selector: 'app-student-skills',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Student</p>
      <h2>Skill Profile</h2>
      <p>List of assessed and self-declared technical and professional skills.</p>

      <div class="tag-list">
        <span class="tag">Python</span>
        <span class="tag">SQL</span>
        <span class="tag">Excel</span>
        <span class="tag">Power BI</span>
      </div>
    </section>
  `,
})
export class StudentSkillsComponent {}
