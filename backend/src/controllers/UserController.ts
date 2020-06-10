import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Edson', email: 'edsaraujocorral12@gmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailservice = new EmailService();

    emailservice.sendMail({
      to: { name: 'Edson Araujo', email: 'edsaraujoc@gmail.com' },
      message: { subject: 'Bem-vindo ao sistema', body: 'Seja bem-vindo' }
    });

    return res.json({ msg: 'Success' });
  }
};
