import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['leitor', 'livro', 'dataEmprestimo', 'status', 'excluir', 'editar', 'capa'];

  constructor() { }

  ngOnInit(): void {
  }

}