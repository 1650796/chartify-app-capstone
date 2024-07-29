import Head from 'next/head';
import { useRouter } from "next/router";
import Link from 'next/link';
import { useEffect } from 'react';
import { withIronSessionSsr } from "iron-session/next";
import sessionOptions from "../../../config/session";
import Header from '../../../components/header';
import db from '../../../db';
import styles from "../../../styles/Home.module.css";

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({ req, params }) {
      const { user } = req.session;
      const props = {};
      if (user) {
        props.user = req.session.user;
        const chart = await db.chart.getByChartId(req.session.user.id, params.id)
        if (chart)
          props.chart = chart
      }
      props.isLoggedIn = !!user;
      return { props };
    },
    sessionOptions
  );
  
 