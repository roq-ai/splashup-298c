interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Team Member', 'Business Owner', 'Retail Partner', 'Brand Partner'],
  tenantName: 'Company',
  applicationName: 'Splashup',
  addOns: ['file', 'notifications', 'chat'],
};
