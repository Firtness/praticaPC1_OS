import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Venue } from '../../model/venue.entity';
import {VenuesApiService} from '../../services/venues-api.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-venue-table',
  templateUrl: './venue-table.component.html',
  imports: [MatTableModule, NgForOf],
  styleUrls: ['./venue-table.component.css']
})
export class VenueTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'url', 'timeZone','parkingDetail','images', 'city', 'country', 'address'];
  dataSource = new MatTableDataSource<Venue>();

  constructor(private venuesApiService: VenuesApiService ) {}

  ngOnInit(): void {
    this.venuesApiService.getVenues().subscribe({
      next: (venues) => {
        this.dataSource.data = venues;
      },
      error: (err) => {
        console.error('Error fetching venues', err);
      }
    });
  }
}
