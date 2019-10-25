import { authenticationService } from "@/_services";

export function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if ([401, 403].indexOf(response.status) !== -1) {
        if (data.message === "your session has expired") {
          authenticationService.logout();
          location.href = "/login";
        }
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
