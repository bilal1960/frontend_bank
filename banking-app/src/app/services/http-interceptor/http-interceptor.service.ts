import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJmdWxsTmFtZSI6InVzZXIyIHBvcG8yIiwidXNlcklkIjoyNTMsInN1YiI6Im15dXNlcjNAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNzIwODc3MDM0LCJleHAiOjE3MjE1OTcwMzR9.WY_5eDpy_AU6ISou33JTYNpV43ebwvrb9QOX2gKe4fs";

    if(token !== undefined && token !==null) {
      // assigner le token
      const  authReq = req.clone( {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token

        })
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
