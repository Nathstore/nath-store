import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
  providers: [{ provide: NativeDateAdapter, useClass: NativeDateAdapter }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdministrationComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion; 
}
