import { Component, inject, model, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Cliente } from '../../../models/Cliente.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe, CommonModule } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-nova-conta-dialog',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AsyncPipe
  ],
  templateUrl: './nova-conta-dialog.component.html',
  styleUrl: './nova-conta-dialog.component.scss',
})
export class NovaContaDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<NovaContaDialogComponent>);
  readonly data = inject<Cliente>(MAT_DIALOG_DATA);

  options = [
    { nome: 'Cliente 1' },
    { nome: 'Cliente 2' },
    { nome: 'Cliente 3' },
    { nome: 'Cliente 4' },
  ];
  filteredOptions!: Observable<string[]>;

  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
  });

  get controls() {
    return this.form.controls;
  }

  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.controls.nome.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.nome.toLowerCase().includes(filterValue)).map(option => option.nome);
  }

  onDismiss() {
    this.dialogRef.close();
  }

  onConfirm() {
    if (this.form.valid) this.dialogRef.close(this.form.value);
  }
}
