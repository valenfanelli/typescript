//helper function to fetch data
export async function get(url: string){
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('Failed to fetch data');
    }
    const data = await response.json() as unknown; //Es mas seguro unknown que any
    return data;
}