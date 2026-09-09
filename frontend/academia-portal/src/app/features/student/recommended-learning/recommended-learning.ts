import { Component } from '@angular/core';

@Component({
  selector: 'app-student-recommended-learning',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Student</p>
      <h2>Recommended Learning</h2>
      <p>Suggested modules, certifications, and mentorship tracks aligned with target roles.</p>

      <div class="learning-grid">
        <div class="learning-item">
          <h3>SQL for Analytics</h3>
          <p>Build dashboards and data query confidence.</p>
          <div class="tag-list">
            <span class="tag">3 weeks</span>
            <span class="tag">Beginner</span>
          </div>
        </div>
        <div class="learning-item">
          <h3>Power BI Fundamentals</h3>
          <p>Practice business case storytelling and reporting.</p>
          <div class="tag-list">
            <span class="tag">2 weeks</span>
            <span class="tag">Intermediate</span>
          </div>
        </div>
        <div class="learning-item">
          <h3>Communication Skills</h3>
          <p>Prepare for interviews, presentations, and client readiness.</p>
          <div class="tag-list">
            <span class="tag">1 week</span>
            <span class="tag">Core</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class StudentRecommendedLearningComponent {}
