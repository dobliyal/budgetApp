export interface Transaction {
   id: number;
  category_id: number;
  amount: number;
  date: number;
  description: string;
  type: "Expense" | "Income";
}
export interface Transactiont {
 category_id: number;
 amount: number;
 date: number;
 description: string;
 type: "Expense" | "Income";
}
export interface Category {
  id: number;
  name: string;
  type: "Expense" | "Income";
}

export interface TransactionsByMonth {
  totalExpenses: number;
  totalIncome: number;
}
export interface TransactionListItemProps {
  transaction: Transaction;
  categoryInfo: Category | undefined;
}