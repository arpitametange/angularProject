import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeadersInterceptorService implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // const API_KEY = '123'
        const request = req.clone({
            setHeaders: {
                'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
               'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        })
        console.log('request from interceptor', request);
        return next.handle(request)
    }
}