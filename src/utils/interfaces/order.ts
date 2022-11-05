
export interface IOrder {
   _id: string;
   name: string;
   email: string;
   paid: boolean;
   numberOfItems: number;
   total: number;
	createdAt: Date;
	updatedAt: Date;
}
