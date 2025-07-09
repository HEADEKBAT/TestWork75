'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.scss';
import Link from 'next/link';

import phone from '../../public/phone.svg';
import mail from '../../public/mail.svg';
import pin from '../../public/pin.svg';
import headerImg from '../../public/header-img.jpg';

import Navigation from './Navigation';
import HeaderAuth from './HeaderAuth';

const contactItems = [
  { icon: phone, text: '+021-95-51-84', alt: 'phone' },
  { icon: mail, text: 'shopAbelogost.com', alt: 'mail' },
  { icon: pin, text: '1734 Stonecoal Road', alt: 'address' },
];

function ContactItem({ icon, text, alt }: { icon: string; text: string; alt: string }) {
  return (
    <div className={styles.element}>
      <Image src={icon} alt={alt} />
      <span>{text}</span>
    </div>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.top} content`}>
        <div className={styles.left}>
          {contactItems.map((item, i) => (
            <ContactItem key={i} {...item} />
          ))}
        </div>
        <div className={styles.right}>
          <HeaderAuth />
        </div>
      </div>
      <div className={styles.middle}>
        <div className={`${styles.middleContent} ${'content'}`}>
          <div className={styles.logo}>
            Abelohost Shop<span>.</span>
          </div>
          <Link href="/" className={styles.headerImg}>
            <Image src={headerImg} alt="headerImg" />
          </Link>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
