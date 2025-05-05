import { Component } from '@angular/core';
import {ToolBarContentComponent} from './public/tool-bar-content/tool-bar-content.component';
import {FooterContentComponent} from './public/footer-content/footer-content.component';
import {VenueTableComponent} from './venues/components/venue-table/venue-table.component';

@Component({
  selector: 'app-root',
  imports: [ToolBarContentComponent, FooterContentComponent, VenueTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicaPC1';
}
