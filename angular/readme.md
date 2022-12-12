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

Pipes   =           Daten formatieren beim Data-Binding

Services    =       Klassen mit Geschäftslogik
                    - Static und Singleton
                    - Bereitgestellt via Dependency Injection
                    - Instanzen via Contrcutor

## Ab wann Komponenten erzeugen

- Wenn tatsächlich Inhalt wiederverwendet werden muss
- Zur Übersichtlichkeit, aktuelle Datei hat schon hunderte Zeilen
- Technisch bedingt (z.B. Routing)
- Für Listen/Tabellen aus Performancegründen

## Component to Compontn Communication
- @Input 
    - Stellt Property als Attribute in HTML zur Verfügung 
    - Daten können von außen nach innen empfangen werden
- @Output 
    - Stellt Event in HTML zur Verfügung
    - Daten können nach außen weitergegeben werden

## Angular Universum
- Routing       Navigation Framework für mehrere Seiten
- Forms         2 x Formular API´s
- HttpClient    Support für HTTP-APIs
- DI
- PWA           Support für Progressive Web Apps
- Material      UI Framework
- I18n          Internationalisierung
- ...


Todos:
- Router Module einbinden
- router-outlet komponente einfügen
- Konfiguration hinterlegen der Pfade
- Ein Menü (routerLink)
- Aktive Seite im Menü mit CSS Klasse
- Nicht gefunden Seite
- Navigieren via Code
