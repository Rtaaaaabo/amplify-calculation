import { Component } from "@angular/core";
import {
 IonContent,
 IonButton,
 IonCard,
 IonCardHeader,
 IonCardTitle,
 IonCardContent,
 IonGrid,
 IonRow,
 IonCol,
} from "@ionic/angular/standalone";

@Component({
 selector: "app-additional",
 standalone: true,
 imports: [
  IonCol,
  IonRow,
  IonGrid,
  IonCardContent,
  IonCardTitle,
  IonCardHeader,
  IonCard,
  IonButton,
  IonContent,
 ],
 templateUrl: "./additional.component.html",
 styleUrl: "./additional.component.css",
})
export class AdditionalComponent {
 public result = "";
 public answer = "";
 public readonly keys: string[][] = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["0", "C", "="],
 ];
 constructor() {}
}
