export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  deposit: number;
  image: string;
  category: string;
  transmission: string;
  fuel: string;
}

export const generateCars = (): Car[] => {
  const brands = [
    { name: 'Mercedes-Benz', models: ['S-Class', 'E-Class', 'GLE', 'GLS', 'AMG GT'] },
    { name: 'BMW', models: ['7 Series', '5 Series', 'X5', 'X7', 'M5'] },
    { name: 'Audi', models: ['A8', 'A6', 'Q7', 'Q8', 'RS6'] },
    { name: 'Porsche', models: ['Panamera', 'Cayenne', '911', 'Taycan', 'Macan'] },
    { name: 'Range Rover', models: ['Vogue', 'Sport', 'Velar', 'Evoque', 'Discovery'] },
    { name: 'Lamborghini', models: ['Urus', 'Huracan', 'Aventador'] },
    { name: 'Ferrari', models: ['Roma', 'F8', 'Portofino', '812'] },
    { name: 'Bentley', models: ['Continental', 'Flying Spur', 'Bentayga'] },
    { name: 'Rolls-Royce', models: ['Ghost', 'Wraith', 'Cullinan'] },
    { name: 'Tesla', models: ['Model S', 'Model X', 'Model 3'] },
    { name: 'Lexus', models: ['LS', 'LX', 'RX', 'ES'] },
    { name: 'Cadillac', models: ['Escalade', 'CT6', 'XT6'] },
    { name: 'Maserati', models: ['Ghibli', 'Levante', 'Quattroporte'] }
  ];

  const categories = ['Бизнес', 'Премиум', 'Люкс', 'Суперкар'];
  const transmissions = ['Автомат', 'Робот'];
  const fuels = ['Бензин', 'Дизель', 'Электро', 'Гибрид'];
  const images = [
    'https://cdn.poehali.dev/projects/10a2141a-c10d-4531-8caf-da024826421e/files/c18a1a72-e0a0-4cc4-a6b1-914e712cf7f5.jpg',
    'https://cdn.poehali.dev/projects/10a2141a-c10d-4531-8caf-da024826421e/files/d126c915-d74a-4911-87af-3c03651c626c.jpg',
    'https://cdn.poehali.dev/projects/10a2141a-c10d-4531-8caf-da024826421e/files/3c7e76c9-c6dc-4c93-b722-52ad9f444887.jpg'
  ];

  const cars: Car[] = [];
  let carId = 1;

  brands.forEach(brand => {
    brand.models.forEach(model => {
      if (carId <= 95) {
        const year = 2020 + Math.floor(Math.random() * 5);
        const basePrice = brand.name === 'Lamborghini' || brand.name === 'Ferrari' || brand.name === 'Rolls-Royce' 
          ? 35000 + Math.random() * 65000
          : brand.name === 'Bentley' || brand.name === 'Porsche'
          ? 25000 + Math.random() * 35000
          : 8000 + Math.random() * 20000;

        cars.push({
          id: carId++,
          brand: brand.name,
          model: model,
          year: year,
          price: Math.round(basePrice / 100) * 100,
          deposit: Math.round(basePrice * 0.3 / 100) * 100,
          image: images[Math.floor(Math.random() * images.length)],
          category: categories[Math.floor(Math.random() * categories.length)],
          transmission: transmissions[Math.floor(Math.random() * transmissions.length)],
          fuel: fuels[Math.floor(Math.random() * fuels.length)]
        });
      }
    });
  });

  return cars;
};
