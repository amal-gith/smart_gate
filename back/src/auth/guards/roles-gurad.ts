import { CanActivate, ExecutionContext, Inject, Injectable, forwardRef } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { UserService } from "src/user/user.service";



@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,
    @Inject(forwardRef(()=>UserService))
    private userService:UserService
  ) {}
  canActivate (context: ExecutionContext):boolean | Promise<boolean> | Observable<boolean>  {
    const roles = this.reflector.get('roles', context.getHandler());
    if (!roles) {
        return true; 
      }
      const request = context.switchToHttp().getRequest();
      //console.log(request);
      const user = request.user;
      //return matchRoles(roles, user.roles);
      console.log(user)
      return true;

  }
}