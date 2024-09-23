import { useNavigate } from "react-router-dom";

export function navigate(e: any, path: string) {
  const navigate = useNavigate();

  e.preventDefault();
  navigate(`/${path}`);
}
