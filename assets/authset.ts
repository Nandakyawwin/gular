import { HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Loki } from "./loki";

@Injectable()

export class authSet implements HttpInterceptor {
    constructor() {

    }

    intercept(req: any, next: any):any{
        let token = Loki.getToken();
        let modiR = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(modiR);
    }
}
