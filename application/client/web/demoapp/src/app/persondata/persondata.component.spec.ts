import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersondataComponent } from './persondata.component';
import { PersondataService } from './persondata.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersondataComponent } from './persondata.component';


describe('PersondataComponent', () => {
  let component: PersondataComponent;
  let fixture: ComponentFixture<PersondataComponent>;
  let service: PersondataService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ PersondataComponent ],
      providers: [ PersondataService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersondataComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PersondataService);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit application onload
  it('should set the created_by property with the value from sessionStorage', () => {
    const mockEmail = 'test@example.com';
    spyOn(sessionStorage, 'getItem').and.returnValue(mockEmail);
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.persondata.created_by).toEqual(mockEmail);

  });
  


});