import { Component, OnInit } from '@angular/core';
import { MenuDataService } from 'src/app/shared/layout/menu/menu-data.service';
import { ApplicationStateService } from 'src/app/core/services/application-state.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css']
})

/**
 * Layout component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
export class LayoutComponent implements OnInit {

  isMenuVisible: boolean;

  constructor(private menuDataService: MenuDataService,
    private applicationStateService: ApplicationStateService) {
  }

  ngOnInit() {
    var that = this;
    this.menuDataService.toggleMenuBar.subscribe(function (data: any) {
      if (data && data != null) {
        that.isMenuVisible = !that.isMenuVisible;
      }
    });

    if (this.applicationStateService.getIsMobileResolution()) {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }

  ngOnDestroy() {
    this.menuDataService.toggleMenuBar.observers.forEach(function (element) { element.complete(); });
  }

}
