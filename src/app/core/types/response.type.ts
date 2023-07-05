export type DigiHttpResponse<T> = {
  data: T[];
  status: {
    credit_count: number;
    elapsed: number;
    error_code: number;
    error_message?: string;
    notice: string;
    timestamp: string;
    total_count: number;
  };
};
