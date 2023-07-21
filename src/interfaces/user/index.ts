import { BrandPartnerInterface } from 'interfaces/brand-partner';
import { RetailPartnerInterface } from 'interfaces/retail-partner';
import { TeamMemberInterface } from 'interfaces/team-member';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;
  created_at: string;
  updated_at: string;

  brand_partner: BrandPartnerInterface[];
  retail_partner: RetailPartnerInterface[];
  team_member: TeamMemberInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
