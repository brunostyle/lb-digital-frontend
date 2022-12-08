import { useEffect } from "react";
import { useNavigate as useRouter } from "react-router-dom";
import { FullScreenLoading } from "../index";
import { useAuthRenew } from "../../hooks";

interface ILayout {
   children: JSX.Element | JSX.Element[];
}

export const LayoutMain = ({ children }: ILayout) => {
   const router = useRouter();
   const { mutate, isLoading } = useAuthRenew();
   const token = localStorage.getItem('token');

   useEffect(() => {
      if (token) {
         mutate(token);
         router('/');
      }
   }, []);

   if (isLoading) return <FullScreenLoading />

   return <div>{children}</div>
};
