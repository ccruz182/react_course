import type { ReactNode } from "react";

export interface StudentProps {
  fullName: string;
  experience: number;
  children?: ReactNode;
}