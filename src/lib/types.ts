
export interface UserData {
  fullName: string;
  address: string;
  cpf: string;
  city: string;
  country: string;
  maritalStatus: string;
  companyName: string;
  companyAddress: string;
}

export type SelectionOption = "1/3" | "2/3" | "3/3";

export interface SelectionData {
  option: SelectionOption;
  percentage?: number;
}

export interface CalculationSummary {
  option: SelectionOption;
  percentage?: number;
  calculatedValue: number;
  explanation: string;
}
