import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  DashboardMetricsComponent,
  DashboardPhotosComponent,
  DashboardPostsComponent
} from '../../components';

@Component({
  standalone: true,
  selector: 'sg-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DashboardMetricsComponent, DashboardPostsComponent, DashboardPhotosComponent]
})
export class DashboardComponent {}
