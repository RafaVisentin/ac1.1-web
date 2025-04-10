import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {
  produto: Produto | undefined;

  produtos: Produto[] = [
    { id: 1, nome: 'Notebook', preco: 3500, descricao: 'Notebook de última geração', emEstoque: true },
    { id: 2, nome: 'Smartphone', preco: 1500, descricao: 'Smartphone com câmera de 48MP', emEstoque: true },
    { id: 3, nome: 'Tablet', preco: 1200, descricao: 'Tablet com tela de 10 polegadas', emEstoque: false },
    { id: 4, nome: 'Fones de Ouvido', preco: 250, descricao: 'Fones Bluetooth com cancelamento de ruído', emEstoque: true },
    { id: 5, nome: 'Smartwatch', preco: 800, descricao: 'Relógio inteligente com monitor cardíaco', emEstoque: false }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.produto = this.produtos.find(p => p.id === id);
  }
}
