import Layout from "../components/layout";
import React from "react";
import { Hero } from "../section/Hero";
import { Insight } from "../section/Insight";
import { Money } from "../section/Money";
import { PayPal } from "../section/PayPal";
import { CreditCard } from "../section/CreditCard";
import { People } from "../section/People";
import { Service } from "../section/Service";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Insight />
      <Money />
      <PayPal />
      <CreditCard />
      <People />
      <Service />
    </Layout>
  );
}
