
// Import the core angular services.
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { IntersectionObserverDirective } from "./intersection-observer.directive";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@NgModule({
	imports: [
		BrowserModule
	],
	providers: [],
	declarations: [
		AppComponent,
		IntersectionObserverDirective
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
	// ...
}
