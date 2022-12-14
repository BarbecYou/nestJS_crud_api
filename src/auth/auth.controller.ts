import { Controller, ParseIntPipe, Post} from "@nestjs/common";
import { Body } from "@nestjs/common/decorators";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() dto: AuthDto){
        return this.authService.login(dto)
    }

    @Post('signup')
    signUp(@Body() dto: AuthDto){
        return this.authService.signUp(dto)
    }
}