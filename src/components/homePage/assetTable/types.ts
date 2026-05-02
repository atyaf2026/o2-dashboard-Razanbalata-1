export type AssetStatus = 'Operational' | 'Active' | 'Maintenance' | 'Degraded';
export type AssetIconType = 'database' | 'storage' | 'infrastructure' | 'performance';

export interface Asset {
  id: string;
  name: string;
  category: string;
  owner: {
    name: string;
    initials: string;
  };
  status: AssetStatus;
  date: string;
  iconType: AssetIconType;
}