import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  template: `
    <section class="page-card center-card">
      <p class="eyebrow">Authentication</p>
      <h2>Forgot Password</h2>
      <p>Reset access for student, industry, or institutional accounts securely.</p>

      <div class="form-card">
        <div class="form-field">
          <label for="email">Email address</label>
          <input id="email" type="email" placeholder="name@college.edu" />
        </div>

        <div class="button-row">
          <button type="button">Send reset link</button>
          <button type="button" class="secondary">Back to login</button>
        </div>
      </div>
    </section>
  `,
})
export class ForgotPasswordComponent {}
