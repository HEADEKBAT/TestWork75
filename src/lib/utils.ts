import axios from 'axios';

//обработка ошибок axios
export function getErrorMessage(error: unknown, fallback = 'Something went wrong'): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.message || fallback;
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return fallback;
  }
}
