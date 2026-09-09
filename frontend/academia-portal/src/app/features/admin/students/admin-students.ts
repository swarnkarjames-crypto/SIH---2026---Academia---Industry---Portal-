import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-students',
  standalone: true,
  template: `
    <section class="page-card">
      <p class="eyebrow">Administration</p>
      <h2>Student Monitoring</h2>
      <p>View student progress, profile completion, and identified skill gaps.</p>

      <table class="data-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Course</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Riya Sharma</td>
            <td>B.Tech CSE</td>
            <td>86%</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
})
export class AdminStudentsComponent {}
