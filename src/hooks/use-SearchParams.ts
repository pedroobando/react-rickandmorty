import { URL } from 'url';

interface SearchParams {
  urlString: string;
  paramSearch: string[];
}

export const useSearchParams = ({ urlString, paramSearch }: SearchParams) => {
  // Example URL
  // const urlString = 'https://example.com/path?name=JohnDoe&age=30&city=NewYork';

  // Create a new URL object
  const url = new URL(urlString);

  // Get the search parameters
  const searchParams = url.searchParams;

  // Access individual parameters
  // const name = searchParams.get('name'); // 'JohnDoe'
  // const age = searchParams.get('age'); // '30'
  // const city = searchParams.get('city'); // 'NewYork'

  let retParams: string[] = [];
  paramSearch.forEach((param) => {
    const value = searchParams.get(param);
    if (value) {
      retParams.push(value);
    }
  });

  // console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

  // Iterate over all search parameters
  // searchParams.forEach((value, key) => {
  //   console.log(`${key}: ${value}`);
  // });

  // Modify search parameters
  // searchParams.set('age', '31');
  // searchParams.append('country', 'USA');

  // Convert back to string
  // const modifiedUrl = url.toString();
  // console.log(modifiedUrl); //

  return { ...retParams, searchParams };
};
