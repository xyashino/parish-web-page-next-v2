import { ApiRoute } from "@/types/enums";
import { apiCall, apiCallWithToast } from "@/lib/utils";
import { ApiToastsCrudMessages, ToastMessages } from "@/types/toast";
import { DEFAULT_API_TOAST_CRUD_MESSAGES } from "@/lib/constants/common";

export class BaseCrudApiCall<T extends Record<string, any>> {
  constructor(
    private url: ApiRoute,
    private useToast = true,
    private msg: ApiToastsCrudMessages = DEFAULT_API_TOAST_CRUD_MESSAGES,
  ) {}

  private apiCall(
    method: ApiMethod,
    id: string | null,
    body: object | null,
    msg?: ToastMessages,
  ): Promise<T> {
    const fetchOptions = {
      method: method,
      ...(body && { body: JSON.stringify(body) }),
    };

    const url = `${this.url}${id ? `/${id}` : ""}`;

    if (!this.useToast) return apiCall<T>(url, fetchOptions);

    return apiCallWithToast<T>({
      url,
      fetchOptions,
      msg,
    });
  }

  public create(body: object) {
    return this.apiCall("POST", null, body, this.msg.create);
  }

  public update(id: string, body: object) {
    return this.apiCall("PUT", id, body, this.msg.update);
  }

  public delete(id: string) {
    return this.apiCall("DELETE", id, null, this.msg.delete);
  }

  public get(id: string) {
    return this.apiCall("GET", id, null);
  }

  public getMany() {
    return this.apiCall("GET", null, null);
  }
}
