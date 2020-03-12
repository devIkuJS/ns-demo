import {Injectable} from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {

        console.log(error);
        let errorMessage = '';
        if (error instanceof HttpErrorResponse) {
          // client-side error
          errorMessage = `Client-side error: ${error.error.error}`;
        } else {
          // backend error
          errorMessage = `Server-side error: ${error.status} ${error.error.error}`;
        }
        

        return throwError(errorMessage);
      })
    );
  }
}