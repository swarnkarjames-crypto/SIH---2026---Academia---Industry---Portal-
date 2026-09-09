import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="logo">Academia Portal</div>

        <nav class="nav-list" aria-label="Main navigation">
          <div class="nav-group">Authentication</div>
          <a routerLink="/login" routerLinkActive="active">Login</a>
          <a routerLink="/register" routerLinkActive="active">Register</a>
          <a routerLink="/forgot-password" routerLinkActive="active">Forgot Password</a>

          <div class="nav-group">Student</div>
          <a routerLink="/student/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/student/assessment" routerLinkActive="active">Skill Assessment</a>
          <a routerLink="/student/skills" routerLinkActive="active">Skill Profile</a>
          <a routerLink="/student/skill-gap" routerLinkActive="active">Skill Gap</a>
          <a routerLink="/student/recommended-learning" routerLinkActive="active">Recommended Learning</a>
          <a routerLink="/student/opportunities" routerLinkActive="active">Opportunities</a>
          <a routerLink="/student/applications" routerLinkActive="active">Applications</a>
          <a routerLink="/student/portfolio" routerLinkActive="active">Portfolio</a>

          <div class="nav-group">Industry</div>
          <a routerLink="/industry/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/industry/post-opportunity" routerLinkActive="active">Post Internship/Job</a>
          <a routerLink="/industry/manage-opportunities" routerLinkActive="active">Manage Opportunities</a>
          <a routerLink="/industry/candidates" routerLinkActive="active">Candidate Matching</a>
          <a routerLink="/industry/shortlisted-candidates" routerLinkActive="active">Shortlisted Candidates</a>

          <div class="nav-group">Admin</div>
          <a routerLink="/admin/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/admin/students" routerLinkActive="active">Students</a>
          <a routerLink="/admin/opportunities" routerLinkActive="active">Opportunities</a>
          <a routerLink="/admin/analytics" routerLinkActive="active">Skill Analytics</a>
          <a routerLink="/admin/internship-analytics" routerLinkActive="active">Internship & Placement Analytics</a>
        </nav>
      </aside>

      <div class="main-panel">
        <header class="topbar">
          <div>
            <p class="eyebrow">Academia – Industry Collaboration</p>
            <h1>Smart Campus Portal</h1>
          </div>

          <div class="topbar-actions">
            <span class="user-pill">User Profile</span>
            <button class="ghost-button" type="button">Log out</button>
          </div>
        </header>

        <main class="content-area">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class AppShellComponent {}
