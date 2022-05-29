import { Component, OnInit, ViewChild } from '@angular/core';
import { GlucoseService } from './../service/glucose-service.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ModalComponent } from '../utils/modal/modal.component';

@Component({
  selector: 'app-glucose-list',
  templateUrl: './glucose-list.component.html',
  styleUrls: ['./glucose-list.component.scss']
})
export class GlucoseListComponent implements OnInit {

  glucoseData: any[] = [];
  glucoseDataShow: any[] = [];
  paginatorPendency: object = {};
  modalInfoRemove: any = {};
  isLoading: boolean = true;
  filterDate: any = moment().year() + '-' + moment().format("MM");
  @ViewChild(ModalComponent) child: ModalComponent | undefined;

  constructor(private glucoseService: GlucoseService, private router: Router) { }

  ngOnInit(): void {
    this.getGlucoseData();
  }

  getGlucoseData() {
    this.filterByDate();
    this.getList(1);
  }

  filterByDate() {
    this.isLoading = true;
    this.glucoseData = this.glucoseService.getGlucose();
    this.glucoseData = this.glucoseData.filter(item =>
      (moment(item.date).month() + 1) == (moment(this.filterDate).month() + 1) && moment(item.date).year() == moment(this.filterDate).year()
    );

    this.getList(1);
  }

  editItem(_item: any) {
    this.router.navigate(['/glucose/update/' + _item.registerId]);
  }

  openModal(_item: any) {
    this.modalInfoRemove.title = "Delete confirmation";
    this.modalInfoRemove.body = "Are you sure delete this item?";
    this.modalInfoRemove.item = _item;
    this.child?.toggle();
  }

  removeItem() {
    this.glucoseService.removeGlucose(this.modalInfoRemove.item);
    this.getGlucoseData();
  }

  /**
   * Cria paginação de acordo com a quantidade de registros do pedidos de informação
   */
  getList(page: number) {
    const limit = 8;
    const offset = page * limit;

    this.glucoseDataShow = this.glucoseData.slice((offset - limit), offset);

    this.isLoading = false;
    this.paginatePendency(this.glucoseData.length, limit);

  }

  /**
   * Constroi objeto da Paginação
   */
  paginatePendency(_totalItens: number, _limit: number) {
    this.paginatorPendency = {
      total: _totalItens,
      itemsPerPage: _limit,
      showTotal: false,
      showSearch: false
    };
  }

}
