import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { retailPartnerValidationSchema } from 'validationSchema/retail-partners';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.retail_partner
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getRetailPartnerById();
    case 'PUT':
      return updateRetailPartnerById();
    case 'DELETE':
      return deleteRetailPartnerById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getRetailPartnerById() {
    const data = await prisma.retail_partner.findFirst(convertQueryToPrismaUtil(req.query, 'retail_partner'));
    return res.status(200).json(data);
  }

  async function updateRetailPartnerById() {
    await retailPartnerValidationSchema.validate(req.body);
    const data = await prisma.retail_partner.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteRetailPartnerById() {
    const data = await prisma.retail_partner.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
