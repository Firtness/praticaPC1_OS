import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-tool-bar-content',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './tool-bar-content.component.html',
  styleUrl: './tool-bar-content.component.css'
})
export class ToolBarContentComponent {

}
