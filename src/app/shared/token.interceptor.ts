import {HttpErrorResponse, HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {catchError, Observable, of, switchMap, throwError} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "../auth/services/auth.service";
import {TokenService} from "./token.service";
import {Router} from "@angular/router";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authSrv: AuthService = inject(AuthService)
  const tokenService: TokenService = inject(TokenService);
  const router: Router = inject(Router);
  const token: string = tokenService.getToken();

  const cloneReq=req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })

  return next(cloneReq).pipe(
     catchError((error:HttpErrorResponse) => {

        if(error.status === 401) {
         return authSrv.getRefreshToken().pipe(
           catchError((err: any) => {
             if(error.status == 400) {
               router.navigate(['/auth/login']);
               localStorage.clear();
             }
             return throwError(() => err);
           }),
           switchMap((data: any) => {
             tokenService.setRefreshToken(data.data.refreshToken);
             tokenService.setToken(data.data.token);
             const cloneReq=req.clone({
               setHeaders:{
                 Authorization:`Bearer ${tokenService.getToken()}`
               }
             })
             return next(cloneReq);
           })
         );


         /*authSrv.getRefreshToken().pipe(

           switchMap(() => {
             alert(22)
             // Retry the original request with the new token
             const clonedRequest = req.clone({
               setHeaders: {
                 Authorization: `Bearer ${tokenService.getToken()}`
               }
             });
             return next(clonedRequest);
           }),
           catchError((refreshError: any) => {

             console.error('Token refresh failed:', refreshError);
             return throwError(refreshError);
           })


         );*/



         //authSrv.$refreshToken.next(true)
         // error - refresh is expired --> redirect to hoñe/login page
         // success - save new access token and refresh token + clone access token in request ...
         // attention - infinite loop (RXJS operator take or any other operator)
         //pipe or subscribe

         /*
         const refreshConfirm: boolean = confirm("your session is expired, wanna continue?");
         if(refreshConfirm){

         }*/
       }
        return throwError(() => error);

     })
  );


};
