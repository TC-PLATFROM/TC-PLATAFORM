// domains/tc-legal/permissions/permissions.config.ts

export type UserRole =
  | 'admin'
  | 'coordinador'
  | 'abogado'
  | 'cliente';

/**
 * Acciones base del sistema
 * (puedes ampliar sin romper nada)
 */
export type PermissionKey =
  | 'usuarios'
  | 'procesos'
  | 'documentos'
  | 'notas'
  | 'contactos'
  | 'perfil';

/**
 * Mapa de permisos por rol
 */
export const PERMISSIONS: Record<UserRole, Record<PermissionKey, boolean>> = {

  admin: {
    usuarios: true,
    procesos: true,
    documentos: true,
    notas: true,
    contactos: true,
    perfil: true
  },

  coordinador: {
    usuarios: false,
    procesos: true,
    documentos: true,
    notas: true,
    contactos: false,
    perfil: true
  },

  abogado: {
    usuarios: false,
    procesos: true,
    documentos: true,
    notas: true,
    contactos: false,
    perfil: true
  },

  cliente: {
    usuarios: false,
    procesos: false,
    documentos: true,
    notas: false,
    contactos: false,
    perfil: true
  }

};
