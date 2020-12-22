import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import {AuthGuardService} from '../../guards/auth-guard.service';
import {AddCarModalComponent} from '../add-car-modal/add-car-modal.component';
import {ServerEmulatorService} from '../../services/server-emulator.service';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Car} from '../../models/car';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {


  constructor(public readonly router: Router,
              private authService: AuthGuardService,
              public dialog: MatDialog,
              private service: ServerEmulatorService) {
  }

  favCars$: Observable<Car[]>;

  ngOnInit(): void {
    if (this.service.getFavoritesList()) {
      this.favCars$ = this.service.getFavoritesList();
    }
  }

  addNewCar(): void {
    const dialogRef = this.dialog.open(AddCarModalComponent, {
      width: '500px'
    });


    dialogRef.afterClosed().pipe(
      switchMap(result => {
        if (result) {
          return this.service.addNewCar(result);
        }
      })
    ).subscribe();
  }


  logOut(): void {
    this.authService.logOut();
  }

}
