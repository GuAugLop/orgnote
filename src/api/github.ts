const BASE_URL = "https://api.github.com";

export const API = {
  getOrg: async (value: string) => {
    try {
      let result = await fetch(`${BASE_URL}/orgs/${value}`);
      let json = await result.json();
      return json;
    } catch (err) {
      console.log("error");
    }
  },
};
