import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { DashboardMetricsComponent } from '../../components';

@Component({
  standalone: true,
  selector: 'sg-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCard, MatCardContent, MatIcon, DashboardMetricsComponent],
})
export class DashboardComponent {}
