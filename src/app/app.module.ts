import { NgModule, Injector, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideHttpClient()],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector, private appRef: ApplicationRef) {

    // Create the Angular Element
    const myElement = createCustomElement(AppComponent, { injector });    
    // Define the custom element if not already defined
    if (!customElements.get('app2-root')) {
      customElements.define('app2-root', myElement);
    }

    // Add the disconnectedCallback to clean up Angular views
    const app1Element = customElements.get('app2-root');
    if (app1Element) {
      app1Element.prototype.disconnectedCallback = function () {
        const element = this; // Reference to the custom element
        const view = element.__ngView__; // Reference to Angular's view associated with this element
        if (view) {
          this.appRef.detachView(view); // Detach the view from Angular's change detection
          view.destroy(); // Destroy the Angular view to clean up resources
          element.__ngView__ = null; // Remove the reference to the view
        }
      };
    }
  }

  ngDoBootstrap() {} // Use Angular Elements, so no need to bootstrap
}