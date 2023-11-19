'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This places is close to the beach!',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This places has a beautiful pool!'
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