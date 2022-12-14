type TValidRoles = 'admin' | 'client';

export interface IUser {
   _id: string;
   name: string;
   email: string;
	password?: string;
   role: TValidRoles;
   avatar?: string;
}