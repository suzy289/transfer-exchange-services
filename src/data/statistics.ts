import { MapPin, Star, Users, Briefcase, LucideIcon } from 'lucide-react';
import { Statistic } from '@/types';

export interface StatisticWithIcon extends Omit<Statistic, 'icon'> {
  icon: LucideIcon;
}

export const statistics: StatisticWithIcon[] = [
  {
    id: 'agencies',
    value: '6',
    label: 'Agences au Cameroun',
    labelEn: 'Agencies in Cameroon',
    icon: MapPin,
  },
  {
    id: 'years',
    value: '5+',
    label: 'Années d\'expérience',
    labelEn: 'Years of experience',
    icon: Star,
  },
  {
    id: 'clients',
    value: '1000+',
    label: 'Clients satisfaits',
    labelEn: 'Satisfied clients',
    icon: Users,
  },
  {
    id: 'services',
    value: '7',
    label: 'Services disponibles',
    labelEn: 'Available services',
    icon: Briefcase,
  },
];


