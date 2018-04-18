import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { translator } from '../../translator';
import { tableIgnore } from '../../tableIgnore';

@Component({
  selector: 'app-make-table',
  templateUrl: './make-table.component.html',
  styleUrls: ['./make-table.component.css']
})
export class MakeTableComponent implements OnInit {
  translator = translator;
  tableIgnore = tableIgnore;
  ngOnInit() {
    if (this.data) {

      const itesms: any[] = this.data;

      if (itesms[0])
        this.schema = itesms[0]

      for (var i in this.schema) {
        if (this.checkColumn(i)) {
          this.displayedColumns.push(i)

          this.shemaArray.push({
            name: i,
            translation: this.translator[i] || i
          })
        }
      }

      this.dataSource = new MatTableDataSource(itesms);
    }
  }

  shemaArray: any = [];

  displayedColumns = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input("schema")
  schema

  @Input()
  data

  constructor() {

  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  checkColumn(name) {
    if (this.tableIgnore[name]) {
      return false;
    }
    return true;
  }
}





