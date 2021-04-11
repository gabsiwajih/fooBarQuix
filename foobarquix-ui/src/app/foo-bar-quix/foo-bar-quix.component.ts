import { Component, OnInit, OnDestroy } from '@angular/core';
import { FooBarQuixService } from '../foo-bar-quix.service';
import { Result } from '../model/result';

@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html',
})
export class FooBarQuixComponent implements OnInit, OnDestroy {
  items: NumberConverted[] = [];
  constructor(private fooBarQuixService: FooBarQuixService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  convertNumber(inputNumber: number): void {
    this.fooBarQuixService.convertNumber(inputNumber).subscribe({
      next: (data: Result) => {
        this.items.push({
          numberToConvert: inputNumber,
          result: data.result,
        });
      },
      error: (err) => console.error(err),
    });
  }
}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}
