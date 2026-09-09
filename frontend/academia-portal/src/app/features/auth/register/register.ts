import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  template: `
    <section class="page-card center-card">
      <p class="eyebrow">Authentication</p>
      <h2>Register</h2>
      <p>Create a profile and select the right user role.</p>

      <div class="placeholder-actions">
        <button type="button">Register as Student</button>
        <button type="button" class="secondary">Register as Industry</button>
      </div>
    </section>
  `,
})
export class RegisterComponent {}
