import React from 'react';
import { useForm } from 'react-hook-form';
import nodemailer from 'nodemailer';

export default function NewsLetter() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
    
      const onSubmit = async (data) => {
        // Créer un objet transporter pour SMTP
        const transporter = nodemailer.createTransport({
          host: 'web49.lws-hosting.com',
          port: 465,
          secure: true,
          auth: {
            user: 'contact@probusiness-services-gabon.com',
            pass: 'CpPFZgT8X%4f',
          },
        });
    
        // Configurer le message
        const message = {
          from: data.email,
          to: 'contact@probusiness-services-gabon.com',
          subject: `Message de ${data.email}`,
          text: data.message,
        };
    
        // Envoyer le message
        try {
          const info = await transporter.sendMail(message);
          console.log(`Message envoyé : ${info.response}`);
          reset();
        } catch (error) {
          console.error(error);
        }
      };

    //  rendu navigateur
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={register({
              required: 'Veuillez entrer votre adresse email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse email invalide',
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <button type="submit">S'inscrire</button>
        </form>
      );
}


