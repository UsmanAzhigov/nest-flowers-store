import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGurd implements CanActivate {
// implements - это ключевое слово в TypeScript, которое используется для реализации интерфейса.
// В данном случае класс AuthGurd реализует интерфейс CanActivate из @nestjs/common.
// Это означает, что класс AuthGurd обязан реализовать все методы и свойства,
// определенные в интерфейсе CanActivate (в данном случае метод canActivate).
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // switchToHttp() преобразует общий ExecutionContext в HttpArgumentsHost
        // Это позволяет получить доступ к объектам запроса (request), ответа (response)
        // и следующей функции (next) для HTTP-приложений
        const request = context.switchToHttp().getRequest();
        return request.headers.authorization === '1234567890';
      }
}
