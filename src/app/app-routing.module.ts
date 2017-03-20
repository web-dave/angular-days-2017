import { BookListComponent } from './book-list/book-list.component';
import {RouterModule, Routes} from '@angular/router'

export const bookRoutes: Routes = [
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: '**',
        redirectTo: '/books'
    }
];

export const bookRouting = RouterModule.forRoot(bookRoutes)