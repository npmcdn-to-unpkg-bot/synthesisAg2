import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    public static get API_BASE_URL(): string { return 'http://localhost:3000'; }
    //public static get API_HERO_BASE_URL(): string { return this.API_HERO_BASE_URL + '/api/v1/heroes'; }
    //public static get DEFAULT_HERO_PICTURE(): string { return '/hero-default.jpg'; }
}