import { Routes } from '@angular/router';
import { AppShellComponent } from './core/layout/app-shell/app-shell';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { AdminDashboardComponent } from './features/admin/dashboard/admin-dashboard';
import { AdminInternshipAnalyticsComponent } from './features/admin/internship-analytics/admin-internship-analytics';
import { AdminOpportunitiesComponent } from './features/admin/opportunities/admin-opportunities';
import { AdminAnalyticsComponent } from './features/admin/analytics/admin-analytics';
import { AdminStudentsComponent } from './features/admin/students/admin-students';
import { IndustryCandidatesComponent } from './features/industry/candidates/industry-candidates';
import { IndustryDashboardComponent } from './features/industry/dashboard/industry-dashboard';
import { IndustryManageOpportunitiesComponent } from './features/industry/manage-opportunities/manage-opportunities';
import { PostOpportunityComponent } from './features/industry/post-opportunity/post-opportunity';
import { IndustryShortlistedCandidatesComponent } from './features/industry/shortlisted-candidates/shortlisted-candidates';
import { StudentApplicationsComponent } from './features/student/applications/student-applications';
import { StudentAssessmentComponent } from './features/student/assessment/student-assessment';
import { StudentDashboardComponent } from './features/student/dashboard/student-dashboard';
import { StudentOpportunitiesComponent } from './features/student/opportunities/student-opportunities';
import { StudentPortfolioComponent } from './features/student/portfolio/student-portfolio';
import { StudentRecommendedLearningComponent } from './features/student/recommended-learning/recommended-learning';
import { StudentSkillGapComponent } from './features/student/skill-gap/student-skill-gap';
import { StudentSkillsComponent } from './features/student/skills/student-skills';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },

      { path: 'student/dashboard', component: StudentDashboardComponent },
      { path: 'student/assessment', component: StudentAssessmentComponent },
      { path: 'student/skills', component: StudentSkillsComponent },
      { path: 'student/skill-gap', component: StudentSkillGapComponent },
      { path: 'student/recommended-learning', component: StudentRecommendedLearningComponent },
      { path: 'student/opportunities', component: StudentOpportunitiesComponent },
      { path: 'student/applications', component: StudentApplicationsComponent },
      { path: 'student/portfolio', component: StudentPortfolioComponent },

      { path: 'industry/dashboard', component: IndustryDashboardComponent },
      { path: 'industry/post-opportunity', component: PostOpportunityComponent },
      { path: 'industry/manage-opportunities', component: IndustryManageOpportunitiesComponent },
      { path: 'industry/candidates', component: IndustryCandidatesComponent },
      { path: 'industry/shortlisted-candidates', component: IndustryShortlistedCandidatesComponent },

      { path: 'admin/dashboard', component: AdminDashboardComponent },
      { path: 'admin/students', component: AdminStudentsComponent },
      { path: 'admin/opportunities', component: AdminOpportunitiesComponent },
      { path: 'admin/analytics', component: AdminAnalyticsComponent },
      { path: 'admin/internship-analytics', component: AdminInternshipAnalyticsComponent },

      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ],
  },
];
