import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {


  dt = new Date();
  month = this.dt.getMonth();
  year = this.dt.getFullYear();

  public mes: any = this.month;
  public ano: number = this.year;
  public nameMes: string = '';

  @Input() callback: ((s: Date) => void) | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.GetDaysCalendar(this.month, this.year);
  }

  botao_proximo(){
    this.month++;
    if(this.month > 11){
      this.month = 0;
      this.year++;
    }

    this.GetDaysCalendar(this.month, this.year);
  };

  botao_anterior(){
    this.month--;
    if(this.month < 0){
      this.month = 11;
      this.year--;
    }
    this.GetDaysCalendar(this.month, this.year);
  }

  GetDaysCalendar(mesCurrent: any, anoCurrent: any){
    const monthsBR = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'];
    this.mes = mesCurrent;
    console.log(this.ano, 'select', anoCurrent);
    this.ano = anoCurrent;
    this.nameMes = monthsBR[mesCurrent]
    const tableDays = document.getElementById('dias');
    const month = mesCurrent;
    const year = anoCurrent;

    const firtsDayOfWeek = new Date(year, month, 1).getDay() -1;
    const getLastDayThisMonth = new Date(year, month + 1, 0).getDate();


    for( var i = -firtsDayOfWeek, index = 0; i < (42 - firtsDayOfWeek); i++, index++){
      const dt = new Date(year, month, i);
      const atualDate = new Date();
      let dayTable: any;
      if ( !tableDays) {
        return;
      }
      dayTable = tableDays.getElementsByTagName('td')[index];
      dayTable.classList.remove('mes-anterior');
      dayTable.classList.remove('proximo-mes');
      dayTable.classList.remove('dia-atual');
      dayTable.innerHTML = dt.getDate();

      if(dt.getFullYear() == atualDate.getFullYear() && dt.getMonth() == atualDate.getMonth() && dt.getDate() == atualDate.getDate()){
        dayTable.classList.add('dia-atual');
      }
      if(i < 1){
        dayTable.classList.add('mes-anterior');
      }
      if(i > getLastDayThisMonth){
        dayTable.classList.add('proximo-mes');
      }
    }
  }

  selectDate(e: any) {

    const dateSelected = new Date(
      this.ano,
      this.mes,
      parseInt(e.srcElement.innerText)
    );
    if ( this.callback) {
      this.callback(dateSelected);
    }
  }

}
