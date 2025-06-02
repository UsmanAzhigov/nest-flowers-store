// Этот файл содержит стратегию JWT аутентификации для NestJS приложения.
// JWT (JSON Web Token) - это механизм для безопасной передачи данных между клиентом и сервером.

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // Проверяем наличие секретного ключа в переменных окружения
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }

    // Настраиваем стратегию JWT
    super({
      // Указываем, что токен будет извлекаться из заголовка Authorization
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Не игнорируем срок действия токена
      ignoreExpiration: false,
      // Используем секретный ключ для проверки подписи токена
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  // Этот метод вызывается после успешной проверки JWT
  // Он получает расшифрованные данные из токена (payload)
  // и возвращает объект пользователя, который будет доступен в запросе
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
