import { body } from "ionicons/icons";

const responseInit = async(url: string, method: string, authorization?: string|null, body?: any) : Promise<Response>=> {
    const content = {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: ""
        },
        body: body !== undefined ? body : undefined
      };
    
      if (authorization !== undefined && authorization !== null) {
        content.headers.Authorization = authorization;
      }
    
      const response = await fetch(url, content);
    
      return response;
  } 



  export const fetchData = async(url: string, method: string, authorization?: string|null, body?: any) : Promise<any> => {

    const response= await responseInit(url,method,authorization,body);

  
    if (response.status === 400) {
        throw new Error("Error");
    }

    const data = await response.json();
    
    if ("error" in data) {
        throw new Error(data.error.message);
    }

    return data.data;

  };
