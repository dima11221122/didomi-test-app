import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CollectedConsentsService } from '../../services/collected-consents/collected-consents.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-collected-consents',
  templateUrl: './collected-consents.component.html',
  styleUrls: ['./collected-consents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectedConsentsComponent implements OnInit {
  consents$ = this.collectedConsentsService.consents$;
  displayedColumns = ['name', 'email', 'consents'];
  constructor(
    private collectedConsentsService: CollectedConsentsService
  ) { }

  ngOnInit(): void {
  }

}
