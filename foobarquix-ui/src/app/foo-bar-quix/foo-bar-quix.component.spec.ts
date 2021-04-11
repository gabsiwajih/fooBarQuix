import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FooBarQuixService } from '../foo-bar-quix.service';
import { FooBarQuixComponent } from './foo-bar-quix.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('FooBarQuixComponentTest', () => {
  let component: FooBarQuixComponent;
  let fixture: ComponentFixture<FooBarQuixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooBarQuixComponent],
      imports: [HttpClientTestingModule],
      providers: [FooBarQuixService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooBarQuixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show title in h2', () => {
    const hostElement = fixture.nativeElement;
    const h2: HTMLInputElement = hostElement.querySelector('h2');
    expect(h2.textContent).toBe('Already converted values :');
  });
});
