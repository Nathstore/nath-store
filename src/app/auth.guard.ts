import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from './user/authentification.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthentificationService); 
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; // Autorise l'accès à la route
  } else {
    // Redirige l'utilisateur vers la page de connexion
    router.navigate(['/signin']);
    return false; // Bloque l'accès à la route
  }
};
