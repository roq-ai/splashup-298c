const mapping: Record<string, string> = {
  'brand-partners': 'brand_partner',
  companies: 'company',
  'retail-partners': 'retail_partner',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
