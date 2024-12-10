import { NgModule, Injector, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FallbackService {
  constructor() {
    console.log('FallbackService initialized');
  }
}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  // bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
  // providers: [FallbackService]
})
export class AppModule {
  constructor(private injector: Injector, private appRef: ApplicationRef) {
    console.log('Injector initialized:', injector);

    // Create the Angular Element
    const myElement = createCustomElement(AppComponent, { injector });
    console.log('No Injectoe-section...');
    
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$',!customElements.get('app2-root'));
    
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
          console.log('Destroying previous Angular view');
          this.appRef.detachView(view); // Detach the view from Angular's change detection
          view.destroy(); // Destroy the Angular view to clean up resources
          element.__ngView__ = null; // Remove the reference to the view
        }
      };
    }
  }

  ngDoBootstrap() {} // Use Angular Elements, so no need to bootstrap
}