# Angular Workshop

## Angular Anatomie

Module      =       Vergleichbar mit Assemblies aus Windows
- Ausführbare Assemblies (*.exe)
Application Module
- Teilbare Assemblies (*.dll)
Shared Module (Angular Library), Feature Module

Components  =       Eigene HTML Elemente erzeugen
- Vergleichbar mit User Controls (Steuerelemente)

Directive   =       Vorhandenes HTML Element um Logik erweitern.
- ngModel <- FormsModule
- Build-In
- *ngFor
- *ngIf
- ngClass ([class])

Data-Binding =      Daten kommunikation zwischen View und ViewModel.
- {{}} - Interpolation Binding - One-Way (ViewModel -> View)
- [] - Attribute Binding - One-Way (ViewModel -> View)
- () - Event Binding - One-Way (View -> ViewModel)
- [()] - Two-Way Binding
- # - Element to Element Binding
