import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';


@Injectable()
export class GardenGuard implements CanActivate {
    canActivate(
        context : ExecutionContext,
    ) : boolean | Promise<boolean> | Observable<boolean> {

        // const request = context.switchToHttp().getRequest();
        // const hasLargeGarden = request.user.gardens.includes('large');

        return true;
    };
};
