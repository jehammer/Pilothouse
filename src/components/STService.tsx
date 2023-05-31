class stservice {

    async signUp(callsign: String): Promise<any> {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              symbol: callsign,
              faction: "COSMIC", /* Leaving this as default for now */
            }),
          };
          
        return fetch('https://api.spacetraders.io/v2/register', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    async fetchData(): Promise<any> {
        return fetch('')
    }

    test(value: String): void {
      console.log(value);
    }
}

export default stservice;