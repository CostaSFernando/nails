import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public horarios = [
    {
      cliente: 'Fernando Costa',
      data: new Date('2020-12-31'),
      horario: {
        inicio: new Date('2020-12-31 18:00:00'),
        fim: new Date('2020-12-31 22:00:00')
      },
      valor: 120,
      descricao: 'Fazer unha de Gel de fibra de vidro nas mãos mais o pé. Com decoração.'
    },
    {
      cliente: 'Fernando Costa',
      data: new Date('2020-12-31'),
      horario: {
        inicio: new Date('2020-12-31 08:00:00'),
        fim: new Date('2020-12-31 12:00:00')
      },
      valor: 120,
      descricao: 'Fazer unha de Gel de fibra de vidro nas mãos mais o pé. Com decoração.'
    },
    {
      cliente: 'Fernando Costa',
      data: new Date('2020-12-31'),
      horario: {
        inicio: new Date('2020-12-31 12:00:00'),
        fim: new Date('2020-12-31 18:00:00')
      },
      valor: 120,
      descricao: 'Fazer unha de Gel de fibra de vidro nas mãos mais o pé. Com decoração.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectDate(dateSelected: Date) {
    let dateSelection = dateSelected.toISOString().split('T')[0].split('-').reduce((acc,cur)=>{
      acc = cur+'/'+acc;
      return acc;
      },'').slice(0,-1);
    console.log('teste', dateSelection);
  }

}
