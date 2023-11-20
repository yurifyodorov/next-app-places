'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach } from 'react-icons/tb';
import { GiWaterfall } from "react-icons/gi";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
} from 'react-icons/gi';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This places is close to the beach!',
  },
  {
    label: 'Waterfall',
    icon: GiWaterfall,
    description: 'This places has a waterfall!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This places is on an island!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This places is near a lake!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This places is an ancient castle!'
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'This places is in a spooky cave!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This places offers camping activities!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This places is in the desert!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-start
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;