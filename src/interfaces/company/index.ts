import { BrandPartnerInterface } from 'interfaces/brand-partner';
import { RetailPartnerInterface } from 'interfaces/retail-partner';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  brand_partner?: BrandPartnerInterface[];
  retail_partner?: RetailPartnerInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    brand_partner?: number;
    retail_partner?: number;
    team_member?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
