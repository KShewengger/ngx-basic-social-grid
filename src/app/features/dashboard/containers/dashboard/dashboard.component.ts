import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DashboardMetricsComponent, DashboardPostsComponent } from '../../components';

@Component({
  standalone: true,
  selector: 'sg-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DashboardMetricsComponent, DashboardPostsComponent],
})
export class DashboardComponent {}
