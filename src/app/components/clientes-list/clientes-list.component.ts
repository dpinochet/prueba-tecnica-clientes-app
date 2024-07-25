import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {
  clientes: Cliente[] = [];
  pageNumber = 1;
  pageSize = 10;
  useSP = true;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.fetchClientes();
  }

  fetchClientes(): void {
    this.clientesService.getClientes(this.pageNumber, this.pageSize, this.useSP)
      .subscribe(data => {
        this.clientes = data;
      });
  }
}
