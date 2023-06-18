import { CarProps, FilterProps } from "@/types";

//comment back in when testing is done
export async function fetchCars(filters: FilterProps) {
  // const { manufacturer, year, model, limit, fuel } = filters;
  //   const headers = {
	// 	'X-RapidAPI-Key': 'eb54f0765cmshc7a891205949d3fp17ace4jsn6d7610b2aa8e',
	// 	'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	// }

  //   const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
  //       headers: headers,
  //   })

  //   const result = await response.json();

  //   return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {

  if (angle === 'dev') {
    return '/hero.png';
  }
  
  const url = new URL('https://cdn.imagin.studio/getimage')

  const { make, year, model } = car;

  // update with my key if I implement this
  url.searchParams.append('customer', 'keyGoHere');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`
}


export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPath = `${window.location.pathname}?${searchParams.toString()}`;
  
  return newPath;
}



export const testCarData = [
    {
      "city_mpg": 23,
      "class": "compact car",
      "combination_mpg": 24,
      "cylinders": 4,
      "displacement": 1.6,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 26,
      "make": "toyota",
      "model": "corolla",
      "transmission": "a",
      "year": 2020
    },
    {
      "city_mpg": 53,
      "class": "compact car",
      "combination_mpg": 26,
      "cylinders": 4,
      "displacement": 1.6,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 31,
      "make": "toyota",
      "model": "corolla",
      "transmission": "m",
      "year": 2000
    },
    {
      "city_mpg": 33,
      "class": "compact car",
      "combination_mpg": 25,
      "cylinders": 4,
      "displacement": 1.8,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 30,
      "make": "toyota",
      "model": "corolla",
      "transmission": "a",
      "year": 1995
    },
    {
      "city_mpg": 23,
      "class": "compact car",
      "combination_mpg": 26,
      "cylinders": 4,
      "displacement": 1.8,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 30,
      "make": "toyota",
      "model": "corolla",
      "transmission": "m",
      "year": 1993
    },
    {
      "city_mpg": 29,
      "class": "small station wagon",
      "combination_mpg": 25,
      "cylinders": 4,
      "displacement": 1.8,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 30,
      "make": "toyota",
      "model": "corolla wagon",
      "transmission": "a",
      "year": 1999
    }
  ]