export async function storefront(query, variables = {}){
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        },
        body: JSON.stringify({
          query, variables
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        // .then(data => {
        //   console.log('API Response:', data); // Add this line to inspect the API response
        //   if (!data || !data.data || !data.data.products || !data.data.products.edges) {
        //     throw new Error('Invalid API response');
        //   }
        //   return data
        // })
        // .catch(error => {
        //   // Handle errors here
        //   console.error('Error:', error);
        // });
}