/**
 * Here we provide an injection token to fully encapsulate Capacitor dependencies
 * thus not having to import them at all during testing.
 */

import { InjectionToken } from '@angular/core';
export const STORAGE_SERVICE_TOKEN = new InjectionToken('storage_service');