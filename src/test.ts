import 'zone.js';  // Included with Angular CLI.
import 'zone.js/testing';  // Correct import for zone testing
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Import all test files manually (replace with your actual spec files)
import './app/pipes/telefono.pipe.spec';
// Add more imports for other spec files as needed
