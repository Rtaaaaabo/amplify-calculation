import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AdditionalComponent } from "./additional.component";

describe("AdditionalComponent", () => {
 let component: AdditionalComponent;
 let fixture: ComponentFixture<AdditionalComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [AdditionalComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(AdditionalComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it("should create", () => {
  expect(component).toBeTruthy();
 });
});
