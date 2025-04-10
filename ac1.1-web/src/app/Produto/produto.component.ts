import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Notebook', preco: 3500, descricao: 'Notebook de última geração', emEstoque: true },
    { id: 2, nome: 'Smartphone', preco: 1500, descricao: 'Smartphone com câmera de 48MP', emEstoque: true },
    { id: 3, nome: 'Tablet', preco: 1200, descricao: 'Tablet com tela de 10 polegadas', emEstoque: false },
    { id: 4, nome: 'Fones de Ouvido', preco: 250, descricao: 'Fones Bluetooth com cancelamento de ruído', emEstoque: true },
    { id: 5, nome: 'Smartwatch', preco: 800, descricao: 'Relógio inteligente com monitor cardíaco', emEstoque: false }
  ];
}