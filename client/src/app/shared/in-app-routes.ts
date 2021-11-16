import { Routes } from "@angular/router";

export const IN_APP_ROUTES: Routes = [
    {
        path: 'events',
        loadChildren: (() => import('../../app/events/events.module').then(m => m.EventsModule))
    }
]