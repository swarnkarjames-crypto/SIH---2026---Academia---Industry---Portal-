import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <section class="page-card center-card">
      <p class="eyebrow">Authentication</p>
      <h2>Login</h2>
      <p>Student, industry, and institution login entry point.</p>

      <div class="placeholder-actions">
        <button type="button">Student Login</button>
        <button type="button" class="secondary">Industry Login</button>
      </div>
    </section>
  `,
})
export class LoginComponent {}
