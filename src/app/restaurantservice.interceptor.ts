import { Injectable, NgModule } from '@angular/core';

//import http interceptor module
import { HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

//import observable
import { Observable } from 'rxjs/Observable';
@Injectable()
export class RestaurantServiceInterceptor implements HttpInterceptor
{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        const dupRequest = req.clone
        ({
            headers : req.headers.set('user-key','d85750357784a319a2f843e4961c0fc9')
        });
        return next.handle(dupRequest);
    }
};

@NgModule({
    providers : [
        {
            provide : HTTP_INTERCEPTORS,
            useClass : RestaurantServiceInterceptor,
            multi : true
        }
    ]
})
export class InterceptorModule{}