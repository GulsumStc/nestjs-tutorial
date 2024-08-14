import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class PassportLocalGuard extends AuthGuard('local') {} // local is the default strategy