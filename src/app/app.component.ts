import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Amplify } from "aws-amplify";
import { AdditionalComponent } from "./components/additional/additional.component";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs);

@Component({
 selector: "app-root",
 standalone: true,
 templateUrl: "./app.component.html",
 styleUrl: "./app.component.css",
 imports: [RouterOutlet, AdditionalComponent],
})
export class AppComponent {
 title = "amplify-angular-template";
}
